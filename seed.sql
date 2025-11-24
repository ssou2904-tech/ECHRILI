-- Seed categories with Arabic and French names
INSERT OR IGNORE INTO categories (id, name_ar, name_fr, slug, description_ar, description_fr, display_order) VALUES 
  (1, 'إلكترونيات', 'Électronique', 'electronics', 'أجهزة إلكترونية وتقنية', 'Appareils électroniques et technologie', 1),
  (2, 'أزياء', 'Mode', 'fashion', 'ملابس وإكسسوارات', 'Vêtements et accessoires', 2),
  (3, 'المنزل والمطبخ', 'Maison et Cuisine', 'home-kitchen', 'أدوات منزلية ومطبخية', 'Articles ménagers et de cuisine', 3),
  (4, 'رياضة', 'Sports', 'sports', 'معدات رياضية ولياقة', 'Équipements sportifs et fitness', 4),
  (5, 'جمال وعناية', 'Beauté et Soins', 'beauty', 'منتجات التجميل والعناية', 'Produits de beauté et de soins', 5),
  (6, 'كتب', 'Livres', 'books', 'كتب ومطبوعات', 'Livres et publications', 6);

-- Seed products with bilingual content (Algerian e-commerce products)
INSERT OR IGNORE INTO products (
  category_id, name_ar, name_fr, slug, description_ar, description_fr, 
  price, compare_price, sku, quantity, image_url, is_featured, is_active
) VALUES 
  -- Electronics
  (1, 'هاتف ذكي سامسونج جالاكسي A54', 'Samsung Galaxy A54 Smartphone', 'samsung-galaxy-a54', 
   'هاتف ذكي بشاشة 6.4 بوصة، كاميرا 50 ميجابكسل، ذاكرة 128 جيجا', 
   'Smartphone avec écran 6.4 pouces, caméra 50MP, 128Go de stockage',
   45000, 52000, 'ELEC-001', 25, 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500', 1, 1),
  
  (1, 'لابتوب HP 15 Core i5', 'PC Portable HP 15 Core i5', 'hp-laptop-i5',
   'لابتوب بمعالج Intel Core i5، رام 8 جيجا، هارد 512 SSD، شاشة 15.6 بوصة',
   'Ordinateur portable Intel Core i5, 8Go RAM, 512Go SSD, écran 15.6 pouces',
   85000, 95000, 'ELEC-002', 15, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500', 1, 1),
  
  (1, 'سماعات بلوتوث لاسلكية', 'Écouteurs Bluetooth Sans Fil', 'wireless-earbuds',
   'سماعات بلوتوث عالية الجودة، مقاومة للماء، بطارية تدوم 24 ساعة',
   'Écouteurs Bluetooth haute qualité, résistants à l eau, batterie 24h',
   4500, 6000, 'ELEC-003', 50, 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500', 0, 1),
  
  (1, 'ساعة ذكية Xiaomi Mi Band 7', 'Montre Connectée Xiaomi Mi Band 7', 'xiaomi-mi-band-7',
   'ساعة ذكية لتتبع اللياقة، مراقبة ضربات القلب، شاشة AMOLED',
   'Montre intelligente fitness, moniteur cardiaque, écran AMOLED',
   6500, 8000, 'ELEC-004', 40, 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500', 1, 1),

  -- Fashion
  (2, 'قميص رجالي قطن', 'Chemise Homme en Coton', 'mens-cotton-shirt',
   'قميص رجالي قطن 100%، مريح وأنيق، متوفر بعدة ألوان',
   'Chemise homme 100% coton, confortable et élégante, plusieurs couleurs',
   2500, 3500, 'FASH-001', 100, 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500', 0, 1),
  
  (2, 'فستان نسائي صيفي', 'Robe Femme d Été', 'summer-dress-women',
   'فستان صيفي خفيف وأنيق، قماش قطني مريح',
   'Robe d été légère et élégante, tissu coton confortable',
   3800, 5000, 'FASH-002', 60, 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500', 1, 1),
  
  (2, 'حذاء رياضي نايكي', 'Baskets Nike Sport', 'nike-sports-shoes',
   'حذاء رياضي مريح، تصميم عصري، مناسب للجري والرياضة',
   'Baskets sportives confortables, design moderne, parfait pour le sport',
   12000, 15000, 'FASH-003', 45, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', 1, 1),

  (2, 'حقيبة يد نسائية', 'Sac à Main Femme', 'womens-handbag',
   'حقيبة يد أنيقة من الجلد الصناعي، مثالية للاستخدام اليومي',
   'Sac à main élégant en cuir synthétique, parfait pour un usage quotidien',
   4200, 5500, 'FASH-004', 35, 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500', 0, 1),

  -- Home & Kitchen
  (3, 'طقم أواني الطبخ 12 قطعة', 'Set de Casseroles 12 Pièces', 'cookware-set-12pc',
   'طقم أواني طبخ من الستانلس ستيل، 12 قطعة، مناسب لجميع أنواع المواقد',
   'Set de casseroles en acier inoxydable, 12 pièces, pour tous types de cuisinières',
   15500, 18000, 'HOME-001', 30, 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500', 1, 1),
  
  (3, 'خلاط كهربائي متعدد الاستخدام', 'Mixeur Électrique Multifonction', 'electric-blender',
   'خلاط كهربائي قوي 600 واط، متعدد السرعات، سهل التنظيف',
   'Mixeur électrique puissant 600W, vitesses multiples, facile à nettoyer',
   5800, 7000, 'HOME-002', 25, 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=500', 0, 1),

  (3, 'طقم أكواب زجاجية 6 قطع', 'Set de Verres 6 Pièces', 'glass-set-6pc',
   'طقم أكواب زجاجية شفافة، تصميم أنيق، سعة 300 مل',
   'Set de verres transparents, design élégant, capacité 300ml',
   1200, 1800, 'HOME-003', 80, 'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=500', 0, 1),

  -- Sports
  (4, 'دراجة هوائية جبلية', 'Vélo VTT', 'mountain-bike',
   'دراجة هوائية جبلية، 21 سرعة، إطار ألومنيوم خفيف',
   'Vélo VTT, 21 vitesses, cadre en aluminium léger',
   35000, 42000, 'SPORT-001', 12, 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500', 1, 1),

  (4, 'حصيرة يوغا سميكة', 'Tapis de Yoga Épais', 'yoga-mat-thick',
   'حصيرة يوغا سميكة مضادة للانزلاق، مثالية للتمارين المنزلية',
   'Tapis de yoga épais anti-dérapant, idéal pour exercices à domicile',
   2200, 3000, 'SPORT-002', 55, 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500', 0, 1),

  (4, 'أوزان رياضية قابلة للتعديل', 'Haltères Ajustables', 'adjustable-dumbbells',
   'أوزان رياضية قابلة للتعديل من 2 إلى 10 كغ، مناسبة لجميع المستويات',
   'Haltères ajustables de 2 à 10kg, adaptés à tous niveaux',
   8500, 10000, 'SPORT-003', 20, 'https://images.unsplash.com/photo-1517344687637-13ae46347f07?w=500', 0, 1),

  -- Beauty
  (5, 'كريم مرطب للوجه', 'Crème Hydratante Visage', 'face-moisturizer',
   'كريم مرطب للوجه بمكونات طبيعية، مناسب لجميع أنواع البشرة',
   'Crème hydratante visage aux ingrédients naturels, tous types de peau',
   1800, 2500, 'BEAUTY-001', 70, 'https://images.unsplash.com/photo-1556228578-dd6a8b9cc5b7?w=500', 0, 1),

  (5, 'مجموعة مكياج كاملة', 'Kit de Maquillage Complet', 'makeup-kit-complete',
   'مجموعة مكياج شاملة، تحتوي على كل ما تحتاجينه للمكياج الكامل',
   'Kit de maquillage complet avec tout ce qu il faut pour un maquillage parfait',
   6500, 8500, 'BEAUTY-002', 40, 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500', 1, 1),

  (5, 'عطر رجالي فاخر 100 مل', 'Parfum Homme Luxe 100ml', 'mens-perfume-luxury',
   'عطر رجالي فاخر برائحة منعشة تدوم طويلاً، 100 مل',
   'Parfum homme de luxe avec fragrance fraîche longue durée, 100ml',
   8000, 10000, 'BEAUTY-003', 30, 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500', 1, 1),

  -- Books
  (6, 'رواية الأمير الصغير', 'Le Petit Prince', 'le-petit-prince',
   'رواية كلاسيكية عالمية، نسخة باللغة العربية',
   'Roman classique mondial, édition en langue arabe',
   800, 1200, 'BOOK-001', 50, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500', 0, 1),

  (6, 'كتاب تعلم البرمجة', 'Apprendre la Programmation', 'learn-programming',
   'كتاب شامل لتعلم البرمجة للمبتدئين، مع أمثلة عملية',
   'Livre complet pour apprendre la programmation, avec exemples pratiques',
   2500, 3000, 'BOOK-002', 35, 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500', 0, 1),

  (6, 'قصص أطفال مصورة', 'Histoires Illustrées pour Enfants', 'kids-illustrated-stories',
   'مجموعة قصص أطفال مصورة بألوان جميلة، مناسبة لجميع الأعمار',
   'Collection d histoires pour enfants avec belles illustrations, tous âges',
   1500, 2000, 'BOOK-003', 60, 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500', 0, 1);
