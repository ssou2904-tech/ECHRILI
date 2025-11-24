# E-Commerce Algeria - متجر إلكتروني جزائري

A full-featured bilingual e-commerce website designed specifically for the Algerian market, supporting both Arabic (RTL) and French (LTR) languages with seamless language switching.

## 🌟 Project Overview

**Name**: E-Commerce Algeria (متجر إلكتروني)  
**Tech Stack**: Hono + Cloudflare Pages + D1 Database + Vanilla JavaScript + TailwindCSS  
**Languages**: Arabic (العربية) & French (Français)  
**Market**: Algeria (الجزائر)

## ✨ Currently Completed Features

### 🛍️ Product Management
- ✅ Bilingual product catalog (Arabic & French names, descriptions)
- ✅ Product categories with hierarchical structure
- ✅ Featured products highlighting
- ✅ Product images with fallback placeholders
- ✅ Stock management (in stock / out of stock)
- ✅ Price comparison (original price vs. sale price)
- ✅ SKU and barcode tracking
- ✅ Product detail modal view

### 🔍 Search & Filter
- ✅ Real-time product search (searches in both languages)
- ✅ Category-based filtering
- ✅ Responsive product grid layout

### 🛒 Shopping Cart
- ✅ Add to cart functionality
- ✅ Remove from cart
- ✅ Update quantities
- ✅ Cart persistence (localStorage)
- ✅ Cart badge with item count
- ✅ Sliding cart sidebar
- ✅ Subtotal, shipping, and total calculations

### 📦 Checkout & Orders
- ✅ Complete checkout form
- ✅ Customer information collection
- ✅ All 58 Algerian wilayas (provinces) dropdown
- ✅ Shipping address management
- ✅ Payment method selection (Cash on Delivery / Bank Transfer)
- ✅ Order notes field
- ✅ Order submission to backend
- ✅ Order number generation
- ✅ Order confirmation

### 🌐 Bilingual Support
- ✅ Complete Arabic (RTL) interface
- ✅ Complete French (LTR) interface
- ✅ Seamless language switching
- ✅ All UI elements translated
- ✅ Direction-aware CSS (RTL/LTR)

### 🎨 Design & UX
- ✅ Modern gradient design (Green theme)
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Hero section with call-to-action
- ✅ Smooth animations and transitions
- ✅ Product card hover effects
- ✅ Loading states
- ✅ Success notifications
- ✅ Modal overlays
- ✅ Custom scrollbar styling

### 💾 Backend & Database
- ✅ Hono REST API
- ✅ Cloudflare D1 SQLite database
- ✅ Product CRUD operations
- ✅ Category management
- ✅ Customer management
- ✅ Order processing
- ✅ Database migrations
- ✅ Seed data with sample products

## 🚀 Public URLs

- **Live Demo**: https://3000-iupjbi8hj4c9eqo34a035-b32ec7bb.sandbox.novita.ai
- **API Endpoint**: https://3000-iupjbi8hj4c9eqo34a035-b32ec7bb.sandbox.novita.ai/api

## 📊 API Endpoints

### Categories
- `GET /api/categories` - Get all categories

### Products
- `GET /api/products` - Get all products (with filters)
  - Query params: `category`, `search`, `featured`, `limit`, `offset`
- `GET /api/products/:slug` - Get single product by slug

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:orderNumber` - Get order details

## 🗄️ Data Models

### Categories
```sql
- id, name_ar, name_fr, slug
- description_ar, description_fr
- image_url, parent_id, display_order
- created_at
```

### Products
```sql
- id, category_id, name_ar, name_fr, slug
- description_ar, description_fr
- price, compare_price, cost
- sku, barcode, quantity
- image_url, images (JSON)
- weight, is_featured, is_active
- created_at, updated_at
```

### Customers
```sql
- id, email, phone
- first_name, last_name
- address, city, wilaya, postal_code
- created_at
```

### Orders
```sql
- id, customer_id, order_number
- status (pending, confirmed, shipped, delivered, cancelled)
- subtotal, shipping_cost, total
- payment_method, shipping details, notes
- created_at, updated_at
```

### Order Items
```sql
- id, order_id, product_id
- product_name, quantity, price, subtotal
```

## 📦 Sample Products (Seeded)

### Electronics (إلكترونيات / Électronique)
- Samsung Galaxy A54 Smartphone - 45,000 DZD
- HP Laptop Core i5 - 85,000 DZD
- Wireless Bluetooth Earbuds - 4,500 DZD
- Xiaomi Mi Band 7 Smartwatch - 6,500 DZD

### Fashion (أزياء / Mode)
- Men's Cotton Shirt - 2,500 DZD
- Women's Summer Dress - 3,800 DZD
- Nike Sports Shoes - 12,000 DZD
- Women's Handbag - 4,200 DZD

### Home & Kitchen (المنزل والمطبخ / Maison et Cuisine)
- 12-Piece Cookware Set - 15,500 DZD
- Electric Blender - 5,800 DZD
- 6-Piece Glass Set - 1,200 DZD

### Sports (رياضة / Sports)
- Mountain Bike - 35,000 DZD
- Thick Yoga Mat - 2,200 DZD
- Adjustable Dumbbells - 8,500 DZD

### Beauty (جمال وعناية / Beauté et Soins)
- Face Moisturizer - 1,800 DZD
- Complete Makeup Kit - 6,500 DZD
- Men's Luxury Perfume 100ml - 8,000 DZD

### Books (كتب / Livres)
- The Little Prince - 800 DZD
- Learn Programming - 2,500 DZD
- Kids Illustrated Stories - 1,500 DZD

## 🏪 Algerian Wilayas (All 58)

Complete support for all Algerian provinces including:
- Adrar (أدرار), Chlef (الشلف), Laghouat (الأغواط)
- Alger (الجزائر), Oran (وهران), Constantine (قسنطينة)
- And 52 more wilayas...

## 💳 Payment Methods

- **Cash on Delivery (COD)** - الدفع عند الاستلام / Paiement à la livraison
- **Bank Transfer** - تحويل بنكي / Virement bancaire

## 📱 User Guide

### For Customers (للعملاء / Pour les clients)

1. **Browse Products** - Navigate through categories or use search
2. **Select Language** - Click the language toggle (ع / FR) to switch
3. **View Details** - Click the eye icon to see full product details
4. **Add to Cart** - Click "Add to Cart" button on products you want
5. **Review Cart** - Click the cart icon to review your items
6. **Checkout** - Click "Proceed to Checkout" and fill the form
7. **Place Order** - Submit your order and receive order number

### For Admins (للمدراء / Pour les administrateurs)

The backend API is ready for admin panel integration. All CRUD operations are available through the REST API.

## 🔧 Storage Services

- **Cloudflare D1 Database** - Relational data (products, orders, customers)
- **Local Storage** - Cart persistence in browser

## 🚀 Deployment

### Local Development
```bash
# Build project
npm run build

# Apply migrations
npm run db:migrate:local

# Seed database
npm run db:seed

# Start server
pm2 start ecosystem.config.cjs

# Test
curl http://localhost:3000
```

### Production Deployment
```bash
# Create D1 database
npx wrangler d1 create webapp-production

# Update wrangler.jsonc with database_id

# Apply migrations to production
npm run db:migrate:prod

# Deploy to Cloudflare Pages
npm run deploy:prod
```

## 📈 Features Not Yet Implemented

### High Priority
- [ ] Admin dashboard for product management
- [ ] Order status tracking for customers
- [ ] Email notifications for orders
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] User authentication and accounts
- [ ] Order history for registered users

### Medium Priority
- [ ] Product variants (size, color)
- [ ] Inventory management
- [ ] Discount codes and promotions
- [ ] Advanced search with filters (price range, brand)
- [ ] Related products suggestions
- [ ] Product image gallery (multiple images)

### Low Priority
- [ ] Social media integration
- [ ] Newsletter subscription
- [ ] Live chat support
- [ ] Multiple currency support
- [ ] Analytics dashboard
- [ ] SEO optimization

## 🎯 Recommended Next Steps

1. **Admin Panel Development**
   - Create admin authentication
   - Build product management interface
   - Implement order management dashboard
   - Add inventory tracking

2. **Customer Experience Enhancement**
   - Add user registration and login
   - Implement order tracking system
   - Create customer profile pages
   - Add product reviews

3. **Payment Integration**
   - Integrate with Algerian payment gateways
   - Add bank transfer instructions
   - Implement payment confirmation flow

4. **Shipping Enhancement**
   - Add shipping calculator by wilaya
   - Integrate with delivery services
   - Add delivery time estimates

5. **Marketing Features**
   - Implement promotional banners
   - Add discount code system
   - Create flash sales functionality
   - Build email marketing integration

## 🛠️ Tech Stack Details

- **Framework**: Hono (Lightweight Edge Framework)
- **Runtime**: Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **Frontend**: Vanilla JavaScript + TailwindCSS
- **Icons**: Font Awesome 6
- **HTTP Client**: Axios
- **Process Manager**: PM2 (Development)
- **Build Tool**: Vite

## 📊 Database Performance

- Indexed columns for fast queries
- Optimized for product search
- Efficient category filtering
- Quick order processing

## 🌍 Platform

**Cloudflare Pages** - Global edge deployment for fast performance across Algeria and worldwide

## 📝 Status

✅ **Active** - Fully functional and ready for use

**Last Updated**: November 24, 2025

## 🤝 Contributing

This project is ready for further development. Key areas for contribution:
- Admin panel development
- Payment gateway integration
- Advanced features implementation
- Testing and optimization

## 📄 License

This is a demonstration project for an Algerian e-commerce website.

---

**مرحباً بكم في متجرنا الإلكتروني!**  
**Bienvenue dans notre boutique en ligne!**
