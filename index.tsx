import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

type Bindings = {
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()

// Enable CORS for API routes
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// ==================== API Routes ====================

// Get all categories
app.get('/api/categories', async (c) => {
  try {
    const { results } = await c.env.DB.prepare(`
      SELECT * FROM categories ORDER BY display_order ASC
    `).all()
    return c.json({ success: true, data: results })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch categories' }, 500)
  }
})

// Get products with optional filters
app.get('/api/products', async (c) => {
  try {
    const categoryId = c.req.query('category')
    const search = c.req.query('search')
    const featured = c.req.query('featured')
    const limit = parseInt(c.req.query('limit') || '50')
    const offset = parseInt(c.req.query('offset') || '0')

    let query = `SELECT * FROM products WHERE is_active = 1`
    const params: any[] = []

    if (categoryId) {
      query += ` AND category_id = ?`
      params.push(categoryId)
    }

    if (search) {
      query += ` AND (name_ar LIKE ? OR name_fr LIKE ? OR description_ar LIKE ? OR description_fr LIKE ?)`
      const searchTerm = `%${search}%`
      params.push(searchTerm, searchTerm, searchTerm, searchTerm)
    }

    if (featured === 'true') {
      query += ` AND is_featured = 1`
    }

    query += ` ORDER BY created_at DESC LIMIT ? OFFSET ?`
    params.push(limit, offset)

    const { results } = await c.env.DB.prepare(query).bind(...params).all()
    return c.json({ success: true, data: results })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch products' }, 500)
  }
})

// Get single product by slug
app.get('/api/products/:slug', async (c) => {
  try {
    const slug = c.req.param('slug')
    const { results } = await c.env.DB.prepare(`
      SELECT p.*, c.name_ar as category_name_ar, c.name_fr as category_name_fr
      FROM products p
      JOIN categories c ON p.category_id = c.id
      WHERE p.slug = ? AND p.is_active = 1
    `).bind(slug).all()

    if (results.length === 0) {
      return c.json({ success: false, error: 'Product not found' }, 404)
    }

    return c.json({ success: true, data: results[0] })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch product' }, 500)
  }
})

// Create order
app.post('/api/orders', async (c) => {
  try {
    const body = await c.req.json()
    const {
      customer, // { email, phone, first_name, last_name, address, city, wilaya, postal_code }
      items, // [{ product_id, quantity, price }]
      shipping, // { name, phone, address, city, wilaya, postal_code }
      payment_method,
      notes
    } = body

    // Validate required fields
    if (!customer || !items || items.length === 0 || !shipping) {
      return c.json({ success: false, error: 'Missing required fields' }, 400)
    }

    // Start transaction (simulate with sequential operations)
    // 1. Create or get customer
    let customerId
    const existingCustomer = await c.env.DB.prepare(`
      SELECT id FROM customers WHERE email = ?
    `).bind(customer.email).first()

    if (existingCustomer) {
      customerId = existingCustomer.id
    } else {
      const customerResult = await c.env.DB.prepare(`
        INSERT INTO customers (email, phone, first_name, last_name, address, city, wilaya, postal_code)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        customer.email,
        customer.phone,
        customer.first_name,
        customer.last_name,
        customer.address,
        customer.city,
        customer.wilaya,
        customer.postal_code
      ).run()
      customerId = customerResult.meta.last_row_id
    }

    // 2. Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const shipping_cost = 600 // Fixed shipping cost (DZD)
    const total = subtotal + shipping_cost

    // 3. Generate order number
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`

    // 4. Create order
    const orderResult = await c.env.DB.prepare(`
      INSERT INTO orders (
        customer_id, order_number, status, subtotal, shipping_cost, total,
        payment_method, shipping_name, shipping_phone, shipping_address,
        shipping_city, shipping_wilaya, shipping_postal_code, notes
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(
      customerId,
      orderNumber,
      'pending',
      subtotal,
      shipping_cost,
      total,
      payment_method || 'cash_on_delivery',
      shipping.name,
      shipping.phone,
      shipping.address,
      shipping.city,
      shipping.wilaya,
      shipping.postal_code || '',
      notes || ''
    ).run()

    const orderId = orderResult.meta.last_row_id

    // 5. Create order items
    for (const item of items) {
      // Get product details
      const product = await c.env.DB.prepare(`
        SELECT name_ar, name_fr FROM products WHERE id = ?
      `).bind(item.product_id).first()

      if (product) {
        await c.env.DB.prepare(`
          INSERT INTO order_items (order_id, product_id, product_name, quantity, price, subtotal)
          VALUES (?, ?, ?, ?, ?, ?)
        `).bind(
          orderId,
          item.product_id,
          product.name_ar,
          item.quantity,
          item.price,
          item.price * item.quantity
        ).run()

        // Update product quantity
        await c.env.DB.prepare(`
          UPDATE products SET quantity = quantity - ? WHERE id = ?
        `).bind(item.quantity, item.product_id).run()
      }
    }

    return c.json({
      success: true,
      data: {
        order_id: orderId,
        order_number: orderNumber,
        total: total
      }
    })
  } catch (error) {
    console.error('Order creation error:', error)
    return c.json({ success: false, error: 'Failed to create order' }, 500)
  }
})

// Get order by order number
app.get('/api/orders/:orderNumber', async (c) => {
  try {
    const orderNumber = c.req.param('orderNumber')
    
    // Get order details
    const order = await c.env.DB.prepare(`
      SELECT o.*, c.email, c.phone as customer_phone, c.first_name, c.last_name
      FROM orders o
      JOIN customers c ON o.customer_id = c.id
      WHERE o.order_number = ?
    `).bind(orderNumber).first()

    if (!order) {
      return c.json({ success: false, error: 'Order not found' }, 404)
    }

    // Get order items
    const { results: items } = await c.env.DB.prepare(`
      SELECT * FROM order_items WHERE order_id = ?
    `).bind(order.id).all()

    return c.json({
      success: true,
      data: {
        ...order,
        items
      }
    })
  } catch (error) {
    return c.json({ success: false, error: 'Failed to fetch order' }, 500)
  }
})

// ==================== Frontend Routes ====================

app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>متجر إلكتروني - E-Commerce Algérie</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#10b981',
                  secondary: '#059669'
                }
              }
            }
          }
        </script>
    </head>
    <body class="bg-gray-50">
        <div id="app">
            <div class="flex items-center justify-center min-h-screen">
                <div class="text-center">
                    <i class="fas fa-spinner fa-spin text-6xl text-primary mb-4"></i>
                    <p class="text-xl text-gray-600">جاري التحميل...</p>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
