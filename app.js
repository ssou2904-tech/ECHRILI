// E-Commerce Application - Bilingual (Arabic & French)

// Global State
const state = {
  lang: 'ar', // Default language: Arabic
  categories: [],
  products: [],
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  selectedCategory: null,
  searchQuery: '',
  showCart: false,
  showCheckout: false,
  currentProduct: null
}

// Algerian Wilayas (Provinces)
const WILAYAS = [
  { id: '01', name_ar: 'أدرار', name_fr: 'Adrar' },
  { id: '02', name_ar: 'الشلف', name_fr: 'Chlef' },
  { id: '03', name_ar: 'الأغواط', name_fr: 'Laghouat' },
  { id: '04', name_ar: 'أم البواقي', name_fr: 'Oum El Bouaghi' },
  { id: '05', name_ar: 'باتنة', name_fr: 'Batna' },
  { id: '06', name_ar: 'بجاية', name_fr: 'Béjaïa' },
  { id: '07', name_ar: 'بسكرة', name_fr: 'Biskra' },
  { id: '08', name_ar: 'بشار', name_fr: 'Béchar' },
  { id: '09', name_ar: 'البليدة', name_fr: 'Blida' },
  { id: '10', name_ar: 'البويرة', name_fr: 'Bouira' },
  { id: '11', name_ar: 'تمنراست', name_fr: 'Tamanrasset' },
  { id: '12', name_ar: 'تبسة', name_fr: 'Tébessa' },
  { id: '13', name_ar: 'تلمسان', name_fr: 'Tlemcen' },
  { id: '14', name_ar: 'تيارت', name_fr: 'Tiaret' },
  { id: '15', name_ar: 'تيزي وزو', name_fr: 'Tizi Ouzou' },
  { id: '16', name_ar: 'الجزائر', name_fr: 'Alger' },
  { id: '17', name_ar: 'الجلفة', name_fr: 'Djelfa' },
  { id: '18', name_ar: 'جيجل', name_fr: 'Jijel' },
  { id: '19', name_ar: 'سطيف', name_fr: 'Sétif' },
  { id: '20', name_ar: 'سعيدة', name_fr: 'Saïda' },
  { id: '21', name_ar: 'سكيكدة', name_fr: 'Skikda' },
  { id: '22', name_ar: 'سيدي بلعباس', name_fr: 'Sidi Bel Abbès' },
  { id: '23', name_ar: 'عنابة', name_fr: 'Annaba' },
  { id: '24', name_ar: 'قالمة', name_fr: 'Guelma' },
  { id: '25', name_ar: 'قسنطينة', name_fr: 'Constantine' },
  { id: '26', name_ar: 'المدية', name_fr: 'Médéa' },
  { id: '27', name_ar: 'مستغانم', name_fr: 'Mostaganem' },
  { id: '28', name_ar: 'المسيلة', name_fr: 'M\'Sila' },
  { id: '29', name_ar: 'معسكر', name_fr: 'Mascara' },
  { id: '30', name_ar: 'ورقلة', name_fr: 'Ouargla' },
  { id: '31', name_ar: 'وهران', name_fr: 'Oran' },
  { id: '32', name_ar: 'البيض', name_fr: 'El Bayadh' },
  { id: '33', name_ar: 'إليزي', name_fr: 'Illizi' },
  { id: '34', name_ar: 'برج بوعريريج', name_fr: 'Bordj Bou Arreridj' },
  { id: '35', name_ar: 'بومرداس', name_fr: 'Boumerdès' },
  { id: '36', name_ar: 'الطارف', name_fr: 'El Tarf' },
  { id: '37', name_ar: 'تندوف', name_fr: 'Tindouf' },
  { id: '38', name_ar: 'تيسمسيلت', name_fr: 'Tissemsilt' },
  { id: '39', name_ar: 'الوادي', name_fr: 'El Oued' },
  { id: '40', name_ar: 'خنشلة', name_fr: 'Khenchela' },
  { id: '41', name_ar: 'سوق أهراس', name_fr: 'Souk Ahras' },
  { id: '42', name_ar: 'تيبازة', name_fr: 'Tipaza' },
  { id: '43', name_ar: 'ميلة', name_fr: 'Mila' },
  { id: '44', name_ar: 'عين الدفلى', name_fr: 'Aïn Defla' },
  { id: '45', name_ar: 'النعامة', name_fr: 'Naâma' },
  { id: '46', name_ar: 'عين تموشنت', name_fr: 'Aïn Témouchent' },
  { id: '47', name_ar: 'غرداية', name_fr: 'Ghardaïa' },
  { id: '48', name_ar: 'غليزان', name_fr: 'Relizane' },
  { id: '49', name_ar: 'تيميمون', name_fr: 'Timimoun' },
  { id: '50', name_ar: 'برج باجي مختار', name_fr: 'Bordj Badji Mokhtar' },
  { id: '51', name_ar: 'أولاد جلال', name_fr: 'Ouled Djellal' },
  { id: '52', name_ar: 'بني عباس', name_fr: 'Béni Abbès' },
  { id: '53', name_ar: 'عين صالح', name_fr: 'In Salah' },
  { id: '54', name_ar: 'عين قزام', name_fr: 'In Guezzam' },
  { id: '55', name_ar: 'تقرت', name_fr: 'Touggourt' },
  { id: '56', name_ar: 'جانت', name_fr: 'Djanet' },
  { id: '57', name_ar: 'المغير', name_fr: 'El M\'Ghair' },
  { id: '58', name_ar: 'المنيعة', name_fr: 'El Meniaa' }
]

// Translations
const translations = {
  ar: {
    home: 'الرئيسية',
    shop: 'المتجر',
    cart: 'السلة',
    checkout: 'الدفع',
    language: 'اللغة',
    search_placeholder: 'ابحث عن المنتجات...',
    all_categories: 'كل الفئات',
    featured_products: 'منتجات مميزة',
    add_to_cart: 'أضف للسلة',
    view_details: 'عرض التفاصيل',
    price: 'السعر',
    quantity: 'الكمية',
    subtotal: 'المجموع الفرعي',
    shipping: 'الشحن',
    total: 'الإجمالي',
    empty_cart: 'سلة التسوق فارغة',
    continue_shopping: 'متابعة التسوق',
    proceed_checkout: 'إتمام الطلب',
    customer_info: 'معلومات العميل',
    first_name: 'الاسم الأول',
    last_name: 'اسم العائلة',
    email: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    shipping_address: 'عنوان الشحن',
    address: 'العنوان',
    city: 'المدينة',
    wilaya: 'الولاية',
    postal_code: 'الرمز البريدي',
    payment_method: 'طريقة الدفع',
    cash_on_delivery: 'الدفع عند الاستلام',
    bank_transfer: 'تحويل بنكي',
    notes: 'ملاحظات (اختياري)',
    place_order: 'تأكيد الطلب',
    order_success: 'تم تقديم طلبك بنجاح!',
    order_number: 'رقم الطلب',
    loading: 'جاري التحميل...',
    dzd: 'دج',
    out_of_stock: 'غير متوفر',
    in_stock: 'متوفر',
    remove: 'إزالة',
    update: 'تحديث',
    close: 'إغلاق',
    product_details: 'تفاصيل المنتج',
    description: 'الوصف',
    category: 'الفئة',
    sku: 'رمز المنتج',
    free_shipping: 'شحن مجاني',
    fixed_shipping: 'تكلفة الشحن',
    shop_now: 'تسوق الآن',
    welcome_title: 'مرحباً بكم في متجرنا الإلكتروني',
    welcome_desc: 'اكتشف أفضل المنتجات بأسعار منافسة مع خدمة التوصيل السريع',
    special_offers: 'عروض خاصة',
    new_arrivals: 'وصل حديثاً',
    best_sellers: 'الأكثر مبيعاً'
  },
  fr: {
    home: 'Accueil',
    shop: 'Boutique',
    cart: 'Panier',
    checkout: 'Paiement',
    language: 'Langue',
    search_placeholder: 'Rechercher des produits...',
    all_categories: 'Toutes les catégories',
    featured_products: 'Produits en vedette',
    add_to_cart: 'Ajouter au panier',
    view_details: 'Voir les détails',
    price: 'Prix',
    quantity: 'Quantité',
    subtotal: 'Sous-total',
    shipping: 'Livraison',
    total: 'Total',
    empty_cart: 'Votre panier est vide',
    continue_shopping: 'Continuer les achats',
    proceed_checkout: 'Passer la commande',
    customer_info: 'Informations client',
    first_name: 'Prénom',
    last_name: 'Nom',
    email: 'Email',
    phone: 'Téléphone',
    shipping_address: 'Adresse de livraison',
    address: 'Adresse',
    city: 'Ville',
    wilaya: 'Wilaya',
    postal_code: 'Code postal',
    payment_method: 'Mode de paiement',
    cash_on_delivery: 'Paiement à la livraison',
    bank_transfer: 'Virement bancaire',
    notes: 'Notes (optionnel)',
    place_order: 'Confirmer la commande',
    order_success: 'Votre commande a été passée avec succès!',
    order_number: 'Numéro de commande',
    loading: 'Chargement...',
    dzd: 'DA',
    out_of_stock: 'Rupture de stock',
    in_stock: 'En stock',
    remove: 'Supprimer',
    update: 'Mettre à jour',
    close: 'Fermer',
    product_details: 'Détails du produit',
    description: 'Description',
    category: 'Catégorie',
    sku: 'Référence',
    free_shipping: 'Livraison gratuite',
    fixed_shipping: 'Frais de livraison',
    shop_now: 'Acheter maintenant',
    welcome_title: 'Bienvenue dans notre boutique en ligne',
    welcome_desc: 'Découvrez les meilleurs produits à des prix compétitifs avec livraison rapide',
    special_offers: 'Offres spéciales',
    new_arrivals: 'Nouveautés',
    best_sellers: 'Meilleures ventes'
  }
}

// Helper functions
const t = (key) => translations[state.lang][key] || key

const formatPrice = (price) => {
  return `${parseFloat(price).toLocaleString('fr-DZ')} ${t('dzd')}`
}

const updateLanguage = (lang) => {
  state.lang = lang
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
  render()
}

// Cart functions
const addToCart = (product, quantity = 1) => {
  const existingItem = state.cart.find(item => item.id === product.id)
  
  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    state.cart.push({
      ...product,
      quantity: quantity
    })
  }
  
  saveCart()
  render()
  showNotification(t('add_to_cart'), 'success')
}

const removeFromCart = (productId) => {
  state.cart = state.cart.filter(item => item.id !== productId)
  saveCart()
  render()
}

const updateCartQuantity = (productId, quantity) => {
  const item = state.cart.find(item => item.id === productId)
  if (item) {
    item.quantity = Math.max(1, parseInt(quantity))
    saveCart()
    render()
  }
}

const getCartTotal = () => {
  return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
}

const getCartCount = () => {
  return state.cart.reduce((sum, item) => sum + item.quantity, 0)
}

const saveCart = () => {
  localStorage.setItem('cart', JSON.stringify(state.cart))
}

const clearCart = () => {
  state.cart = []
  saveCart()
}

// API functions
const fetchCategories = async () => {
  try {
    const response = await axios.get('/api/categories')
    if (response.data.success) {
      state.categories = response.data.data
    }
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

const fetchProducts = async () => {
  try {
    let url = '/api/products?limit=100'
    
    if (state.selectedCategory) {
      url += `&category=${state.selectedCategory}`
    }
    
    if (state.searchQuery) {
      url += `&search=${encodeURIComponent(state.searchQuery)}`
    }
    
    const response = await axios.get(url)
    if (response.data.success) {
      state.products = response.data.data
    }
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

const submitOrder = async (orderData) => {
  try {
    const response = await axios.post('/api/orders', orderData)
    if (response.data.success) {
      return response.data.data
    }
  } catch (error) {
    console.error('Error submitting order:', error)
    throw error
  }
}

// Notification system
const showNotification = (message, type = 'info') => {
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }
  
  const notification = document.createElement('div')
  notification.className = `fixed top-4 ${state.lang === 'ar' ? 'left-4' : 'right-4'} ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50 success-message`
  notification.textContent = message
  
  document.body.appendChild(notification)
  
  setTimeout(() => {
    notification.remove()
  }, 3000)
}

// Component: Header
const Header = () => {
  const cartCount = getCartCount()
  
  return `
    <header class="bg-white shadow-md sticky top-0 z-40">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4 ${state.lang === 'ar' ? 'space-x-reverse' : ''}">
            <i class="fas fa-store text-3xl text-primary"></i>
            <h1 class="text-2xl font-bold text-gray-800">
              ${state.lang === 'ar' ? 'متجر إلكتروني' : 'E-Commerce'}
            </h1>
          </div>
          
          <nav class="flex items-center space-x-6 ${state.lang === 'ar' ? 'space-x-reverse' : ''}">
            <button onclick="state.showCart = false; state.showCheckout = false; render()" class="text-gray-700 hover:text-primary">
              <i class="fas fa-home mr-2"></i> ${t('home')}
            </button>
            
            <button onclick="toggleCart()" class="relative text-gray-700 hover:text-primary">
              <i class="fas fa-shopping-cart text-xl"></i>
              ${cartCount > 0 ? `
                <span class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cart-badge">
                  ${cartCount}
                </span>
              ` : ''}
            </button>
            
            <button onclick="toggleLanguage()" class="btn-primary text-white px-4 py-2 rounded-lg">
              <i class="fas fa-language mr-2"></i>
              ${state.lang === 'ar' ? 'FR' : 'ع'}
            </button>
          </nav>
        </div>
        
        <!-- Search Bar -->
        <div class="mt-4">
          <div class="relative">
            <input 
              type="text" 
              placeholder="${t('search_placeholder')}"
              value="${state.searchQuery}"
              oninput="handleSearch(event)"
              class="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg search-input"
            />
            <i class="fas fa-search absolute ${state.lang === 'ar' ? 'left-4' : 'right-4'} top-4 text-gray-400"></i>
          </div>
        </div>
      </div>
    </header>
  `
}

// Component: Hero Section
const HeroSection = () => {
  return `
    <div class="bg-gradient-to-r from-primary to-secondary text-white py-16 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          ${t('welcome_title')}
        </h2>
        <p class="text-xl mb-8">
          ${t('welcome_desc')}
        </p>
        <button onclick="scrollToProducts()" class="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
          <i class="fas fa-shopping-bag mr-2"></i> ${t('shop_now')}
        </button>
      </div>
    </div>
  `
}

// Component: Categories
const Categories = () => {
  return `
    <div class="container mx-auto px-4 py-8">
      <h3 class="text-2xl font-bold mb-6 text-gray-800">
        <i class="fas fa-th-large mr-2"></i> ${t('all_categories')}
      </h3>
      <div class="flex flex-wrap gap-3 mb-8">
        <button 
          onclick="selectCategory(null)" 
          class="category-badge ${!state.selectedCategory ? 'active' : ''}"
        >
          ${t('all_categories')}
        </button>
        ${state.categories.map(cat => `
          <button 
            onclick="selectCategory(${cat.id})" 
            class="category-badge ${state.selectedCategory === cat.id ? 'active' : ''}"
          >
            ${state.lang === 'ar' ? cat.name_ar : cat.name_fr}
          </button>
        `).join('')}
      </div>
    </div>
  `
}

// Component: Product Grid
const ProductGrid = () => {
  if (state.products.length === 0) {
    return `
      <div class="container mx-auto px-4 py-16 text-center">
        <i class="fas fa-box-open text-6xl text-gray-300 mb-4"></i>
        <p class="text-xl text-gray-500">${t('loading')}</p>
      </div>
    `
  }
  
  return `
    <div id="products-section" class="container mx-auto px-4 py-8">
      <h3 class="text-2xl font-bold mb-6 text-gray-800">
        <i class="fas fa-star mr-2 text-yellow-500"></i> ${t('featured_products')}
      </h3>
      <div class="product-grid">
        ${state.products.map(product => `
          <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
            <div class="relative">
              <img 
                src="${product.image_url}" 
                alt="${state.lang === 'ar' ? product.name_ar : product.name_fr}"
                class="w-full h-48 object-cover"
                onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'"
              />
              ${product.compare_price ? `
                <span class="absolute top-2 ${state.lang === 'ar' ? 'left-2' : 'right-2'} bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -${Math.round((1 - product.price / product.compare_price) * 100)}%
                </span>
              ` : ''}
            </div>
            
            <div class="p-4">
              <h4 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                ${state.lang === 'ar' ? product.name_ar : product.name_fr}
              </h4>
              
              <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                ${state.lang === 'ar' ? product.description_ar || '' : product.description_fr || ''}
              </p>
              
              <div class="flex items-center justify-between mb-4">
                <div>
                  <div class="price-tag">${formatPrice(product.price)}</div>
                  ${product.compare_price ? `
                    <div class="compare-price">${formatPrice(product.compare_price)}</div>
                  ` : ''}
                </div>
                <span class="text-sm ${product.quantity > 0 ? 'text-green-600' : 'text-red-600'}">
                  <i class="fas fa-${product.quantity > 0 ? 'check-circle' : 'times-circle'}"></i>
                  ${product.quantity > 0 ? t('in_stock') : t('out_of_stock')}
                </span>
              </div>
              
              <div class="flex gap-2">
                <button 
                  onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&apos;")})'
                  class="flex-1 btn-primary text-white px-4 py-2 rounded-lg font-bold"
                  ${product.quantity === 0 ? 'disabled' : ''}
                >
                  <i class="fas fa-cart-plus mr-2"></i> ${t('add_to_cart')}
                </button>
                <button 
                  onclick='showProductDetails(${JSON.stringify(product).replace(/'/g, "&apos;")})'
                  class="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
                >
                  <i class="fas fa-eye"></i>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `
}

// Component: Cart Sidebar
const CartSidebar = () => {
  if (!state.showCart) return ''
  
  const subtotal = getCartTotal()
  const shipping = 600
  const total = subtotal + shipping
  
  return `
    <div class="modal-overlay fixed inset-0 z-50" onclick="closeCart(event)">
      <div class="absolute ${state.lang === 'ar' ? 'left-0' : 'right-0'} top-0 h-full w-full max-w-md bg-white shadow-2xl overflow-y-auto" onclick="event.stopPropagation()">
        <div class="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <h3 class="text-xl font-bold">
            <i class="fas fa-shopping-cart mr-2"></i> ${t('cart')} (${getCartCount()})
          </h3>
          <button onclick="toggleCart()" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-times text-2xl"></i>
          </button>
        </div>
        
        <div class="p-4">
          ${state.cart.length === 0 ? `
            <div class="text-center py-16">
              <i class="fas fa-shopping-cart text-6xl text-gray-300 mb-4"></i>
              <p class="text-gray-500 mb-4">${t('empty_cart')}</p>
              <button onclick="toggleCart()" class="btn-primary text-white px-6 py-2 rounded-lg">
                ${t('continue_shopping')}
              </button>
            </div>
          ` : `
            <div class="space-y-4">
              ${state.cart.map(item => `
                <div class="cart-item bg-gray-50 rounded-lg p-4">
                  <div class="flex gap-4">
                    <img 
                      src="${item.image_url}" 
                      alt="${state.lang === 'ar' ? item.name_ar : item.name_fr}"
                      class="w-20 h-20 object-cover rounded"
                      onerror="this.src='https://via.placeholder.com/80'"
                    />
                    <div class="flex-1">
                      <h4 class="font-bold text-gray-800 mb-1">
                        ${state.lang === 'ar' ? item.name_ar : item.name_fr}
                      </h4>
                      <p class="text-primary font-bold mb-2">${formatPrice(item.price)}</p>
                      
                      <div class="flex items-center gap-2">
                        <input 
                          type="number" 
                          value="${item.quantity}" 
                          min="1" 
                          max="${item.quantity}"
                          onchange="updateCartQuantity(${item.id}, this.value)"
                          class="w-16 px-2 py-1 border rounded text-center"
                        />
                        <button 
                          onclick="removeFromCart(${item.id})"
                          class="text-red-500 hover:text-red-700"
                        >
                          <i class="fas fa-trash"></i> ${t('remove')}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <div class="mt-6 border-t pt-4 space-y-2">
              <div class="flex justify-between text-gray-700">
                <span>${t('subtotal')}:</span>
                <span class="font-bold">${formatPrice(subtotal)}</span>
              </div>
              <div class="flex justify-between text-gray-700">
                <span>${t('shipping')}:</span>
                <span class="font-bold">${formatPrice(shipping)}</span>
              </div>
              <div class="flex justify-between text-xl font-bold text-gray-900 border-t pt-2">
                <span>${t('total')}:</span>
                <span class="text-primary">${formatPrice(total)}</span>
              </div>
            </div>
            
            <button 
              onclick="proceedToCheckout()"
              class="w-full mt-6 btn-primary text-white px-6 py-3 rounded-lg font-bold text-lg"
            >
              <i class="fas fa-credit-card mr-2"></i> ${t('proceed_checkout')}
            </button>
          `}
        </div>
      </div>
    </div>
  `
}

// Component: Checkout Form
const CheckoutForm = () => {
  if (!state.showCheckout) return ''
  
  const subtotal = getCartTotal()
  const shipping = 600
  const total = subtotal + shipping
  
  return `
    <div class="modal-overlay fixed inset-0 z-50 overflow-y-auto" onclick="closeCheckout(event)">
      <div class="min-h-screen px-4 py-8">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl" onclick="event.stopPropagation()">
          <div class="bg-primary text-white p-6 rounded-t-lg flex items-center justify-between">
            <h3 class="text-2xl font-bold">
              <i class="fas fa-credit-card mr-2"></i> ${t('checkout')}
            </h3>
            <button onclick="state.showCheckout = false; render()" class="text-white hover:text-gray-200">
              <i class="fas fa-times text-2xl"></i>
            </button>
          </div>
          
          <form onsubmit="handleCheckout(event)" class="p-6">
            <div class="grid md:grid-cols-2 gap-6">
              <!-- Customer Info -->
              <div>
                <h4 class="text-xl font-bold mb-4 text-gray-800">
                  <i class="fas fa-user mr-2"></i> ${t('customer_info')}
                </h4>
                
                <div class="space-y-4">
                  <div>
                    <label class="block text-gray-700 mb-2">${t('first_name')} *</label>
                    <input type="text" name="first_name" required class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('last_name')} *</label>
                    <input type="text" name="last_name" required class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('email')} *</label>
                    <input type="email" name="email" required class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('phone')} *</label>
                    <input type="tel" name="phone" required placeholder="0555 123 456" class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                </div>
              </div>
              
              <!-- Shipping Address -->
              <div>
                <h4 class="text-xl font-bold mb-4 text-gray-800">
                  <i class="fas fa-shipping-fast mr-2"></i> ${t('shipping_address')}
                </h4>
                
                <div class="space-y-4">
                  <div>
                    <label class="block text-gray-700 mb-2">${t('address')} *</label>
                    <input type="text" name="address" required class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('wilaya')} *</label>
                    <select name="wilaya" required class="w-full px-4 py-2 border rounded-lg search-input wilaya-select">
                      <option value="">${t('wilaya')}</option>
                      ${WILAYAS.map(w => `
                        <option value="${state.lang === 'ar' ? w.name_ar : w.name_fr}">
                          ${w.id} - ${state.lang === 'ar' ? w.name_ar : w.name_fr}
                        </option>
                      `).join('')}
                    </select>
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('city')} *</label>
                    <input type="text" name="city" required class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                  
                  <div>
                    <label class="block text-gray-700 mb-2">${t('postal_code')}</label>
                    <input type="text" name="postal_code" class="w-full px-4 py-2 border rounded-lg search-input" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Payment Method -->
            <div class="mt-6">
              <h4 class="text-xl font-bold mb-4 text-gray-800">
                <i class="fas fa-money-bill-wave mr-2"></i> ${t('payment_method')}
              </h4>
              
              <div class="space-y-3">
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary">
                  <input type="radio" name="payment_method" value="cash_on_delivery" checked class="mr-3" />
                  <i class="fas fa-hand-holding-usd text-primary text-xl mr-3"></i>
                  <span class="font-bold">${t('cash_on_delivery')}</span>
                </label>
                
                <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary">
                  <input type="radio" name="payment_method" value="bank_transfer" class="mr-3" />
                  <i class="fas fa-university text-primary text-xl mr-3"></i>
                  <span class="font-bold">${t('bank_transfer')}</span>
                </label>
              </div>
            </div>
            
            <!-- Notes -->
            <div class="mt-6">
              <label class="block text-gray-700 mb-2">${t('notes')}</label>
              <textarea name="notes" rows="3" class="w-full px-4 py-2 border rounded-lg search-input"></textarea>
            </div>
            
            <!-- Order Summary -->
            <div class="mt-6 bg-gray-50 rounded-lg p-6">
              <h4 class="text-xl font-bold mb-4 text-gray-800">
                <i class="fas fa-file-invoice mr-2"></i> ${t('total')}
              </h4>
              
              <div class="space-y-2">
                <div class="flex justify-between text-gray-700">
                  <span>${t('subtotal')}:</span>
                  <span class="font-bold">${formatPrice(subtotal)}</span>
                </div>
                <div class="flex justify-between text-gray-700">
                  <span>${t('shipping')}:</span>
                  <span class="font-bold">${formatPrice(shipping)}</span>
                </div>
                <div class="flex justify-between text-2xl font-bold text-gray-900 border-t pt-2">
                  <span>${t('total')}:</span>
                  <span class="text-primary">${formatPrice(total)}</span>
                </div>
              </div>
            </div>
            
            <!-- Submit Button -->
            <button type="submit" class="w-full mt-6 btn-primary text-white px-6 py-4 rounded-lg font-bold text-lg">
              <i class="fas fa-check-circle mr-2"></i> ${t('place_order')}
            </button>
          </form>
        </div>
      </div>
    </div>
  `
}

// Component: Product Details Modal
const ProductDetailsModal = () => {
  if (!state.currentProduct) return ''
  
  const product = state.currentProduct
  const category = state.categories.find(c => c.id === product.category_id)
  
  return `
    <div class="modal-overlay fixed inset-0 z-50 overflow-y-auto" onclick="closeProductDetails(event)">
      <div class="min-h-screen px-4 py-8">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl" onclick="event.stopPropagation()">
          <div class="p-6">
            <button onclick="state.currentProduct = null; render()" class="float-${state.lang === 'ar' ? 'left' : 'right'} text-gray-500 hover:text-gray-700">
              <i class="fas fa-times text-2xl"></i>
            </button>
            
            <div class="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <img 
                  src="${product.image_url}" 
                  alt="${state.lang === 'ar' ? product.name_ar : product.name_fr}"
                  class="w-full rounded-lg shadow-md"
                  onerror="this.src='https://via.placeholder.com/500'"
                />
              </div>
              
              <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">
                  ${state.lang === 'ar' ? product.name_ar : product.name_fr}
                </h2>
                
                ${category ? `
                  <p class="text-gray-600 mb-4">
                    <i class="fas fa-tag mr-2"></i>
                    ${t('category')}: ${state.lang === 'ar' ? category.name_ar : category.name_fr}
                  </p>
                ` : ''}
                
                <div class="mb-6">
                  <div class="price-tag text-4xl">${formatPrice(product.price)}</div>
                  ${product.compare_price ? `
                    <div class="compare-price text-xl">${formatPrice(product.compare_price)}</div>
                  ` : ''}
                </div>
                
                <p class="text-gray-700 mb-6 leading-relaxed">
                  ${state.lang === 'ar' ? product.description_ar || '' : product.description_fr || ''}
                </p>
                
                <div class="mb-6">
                  <span class="inline-block px-4 py-2 rounded-lg ${product.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                    <i class="fas fa-${product.quantity > 0 ? 'check-circle' : 'times-circle'} mr-2"></i>
                    ${product.quantity > 0 ? t('in_stock') : t('out_of_stock')}
                  </span>
                </div>
                
                ${product.sku ? `
                  <p class="text-gray-600 mb-4">
                    ${t('sku')}: ${product.sku}
                  </p>
                ` : ''}
                
                <button 
                  onclick='addToCart(${JSON.stringify(product).replace(/'/g, "&apos;")}); state.currentProduct = null; render()'
                  class="w-full btn-primary text-white px-6 py-4 rounded-lg font-bold text-lg"
                  ${product.quantity === 0 ? 'disabled' : ''}
                >
                  <i class="fas fa-cart-plus mr-2"></i> ${t('add_to_cart')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

// Event handlers
const toggleCart = () => {
  state.showCart = !state.showCart
  state.showCheckout = false
  render()
}

const toggleLanguage = () => {
  updateLanguage(state.lang === 'ar' ? 'fr' : 'ar')
}

const closeCart = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    state.showCart = false
    render()
  }
}

const closeCheckout = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    state.showCheckout = false
    render()
  }
}

const closeProductDetails = (event) => {
  if (event.target.classList.contains('modal-overlay')) {
    state.currentProduct = null
    render()
  }
}

const selectCategory = async (categoryId) => {
  state.selectedCategory = categoryId
  await fetchProducts()
  render()
  scrollToProducts()
}

const handleSearch = async (event) => {
  state.searchQuery = event.target.value
  await fetchProducts()
  render()
}

const scrollToProducts = () => {
  setTimeout(() => {
    const element = document.getElementById('products-section')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, 100)
}

const proceedToCheckout = () => {
  state.showCart = false
  state.showCheckout = true
  render()
}

const showProductDetails = (product) => {
  state.currentProduct = product
  render()
}

const handleCheckout = async (event) => {
  event.preventDefault()
  
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData.entries())
  
  const orderData = {
    customer: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      wilaya: data.wilaya,
      postal_code: data.postal_code || ''
    },
    shipping: {
      name: `${data.first_name} ${data.last_name}`,
      phone: data.phone,
      address: data.address,
      city: data.city,
      wilaya: data.wilaya,
      postal_code: data.postal_code || ''
    },
    items: state.cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: item.price
    })),
    payment_method: data.payment_method,
    notes: data.notes
  }
  
  try {
    const result = await submitOrder(orderData)
    
    // Clear cart
    clearCart()
    
    // Show success message
    alert(`${t('order_success')}\n\n${t('order_number')}: ${result.order_number}\n${t('total')}: ${formatPrice(result.total)}`)
    
    // Reset state
    state.showCheckout = false
    state.showCart = false
    render()
  } catch (error) {
    alert('Error placing order. Please try again.')
  }
}

// Main render function
const render = () => {
  const app = document.getElementById('app')
  app.innerHTML = `
    ${Header()}
    ${HeroSection()}
    ${Categories()}
    ${ProductGrid()}
    ${CartSidebar()}
    ${CheckoutForm()}
    ${ProductDetailsModal()}
  `
}

// Initialize app
const init = async () => {
  await fetchCategories()
  await fetchProducts()
  render()
}

// Start the application
init()
