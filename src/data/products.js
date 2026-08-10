const products = [
  // ==================== MEN ====================

  {
    id: 1,
    name: "Men Printed Oversized T-Shirt",
    brand: "Bewakoof",
    description: "Comfortable oversized fit with a stylish printed design.",
    category: "men",
    subCategory: "t-shirts",

    price: 599,
    originalPrice: 1299,
    discount: 54,

    rating: 4.5,
    reviews: 128,
    material: "100% Cotton",

    colours: [
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
          
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
         
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 2,
    name: "Men Graphic Printed T-Shirt",
    brand: "Bewakoof",
    description: "Regular fit graphic printed t-shirt for everyday wear.",
    category: "men",
    subCategory: "t-shirts",

    price: 649,
    originalPrice: 1399,
    discount: 54,

    rating: 4.4,
    reviews: 96,
    material: "100% Cotton",

    colours: [
      {
  name: "Black",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f37f3844?auto=format&fit=crop&w=800&q=80",
  ],
},
      {
        name: "Grey",
        images: [
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 3,
    name: "Men Oversized Casual T-Shirt",
    brand: "Bewakoof",
    description: "Relaxed oversized t-shirt made for everyday comfort.",
    category: "men",
    subCategory: "t-shirts",

    price: 699,
    originalPrice: 1499,
    discount: 53,

    rating: 4.6,
    reviews: 184,
    material: "100% Cotton",

    colours: [
      {
        name: "Blue",
        images: [
          "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 4,
    name: "Men Classic Casual T-Shirt",
    brand: "Bewakoof",
    description: "Classic everyday t-shirt with a comfortable regular fit.",
    category: "men",
    subCategory: "t-shirts",

    price: 549,
    originalPrice: 1199,
    discount: 54,

    rating: 4.3,
    reviews: 74,
    material: "100% Cotton",

    colours: [
      {
        name: "Grey",
        images: [
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1583743814966-8936f37f3844?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  },

  // ==================== WOMEN ====================

  {
    id: 5,
    name: "Women Printed T-Shirt",
    brand: "Bewakoof",
    description: "Trendy printed t-shirt with a comfortable regular fit.",
    category: "women",
    subCategory: "t-shirts",

    price: 599,
    originalPrice: 1299,
    discount: 54,

    rating: 4.5,
    reviews: 112,
    material: "100% Cotton",

    colours: [
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 6,
    name: "Women Oversized T-Shirt",
    brand: "Bewakoof",
    description: "Relaxed oversized t-shirt with a modern casual look.",
    category: "women",
    subCategory: "t-shirts",

    price: 699,
    originalPrice: 1399,
    discount: 50,

    rating: 4.4,
    reviews: 87,
    material: "100% Cotton",

    colours: [
      {
        name: "Blue",
        images: [
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 7,
    name: "Women Casual Top",
    brand: "Bewakoof",
    description: "Stylish casual top designed for everyday comfort.",
    category: "women",
    subCategory: "tops",

    price: 749,
    originalPrice: 1599,
    discount: 53,

    rating: 4.6,
    reviews: 143,
    material: "Cotton Blend",

    colours: [
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 8,
    name: "Women Printed Casual Top",
    brand: "Bewakoof",
    description: "Comfortable printed top with a stylish everyday look.",
    category: "women",
    subCategory: "tops",

    price: 799,
    originalPrice: 1699,
    discount: 53,

    rating: 4.5,
    reviews: 105,
    material: "Cotton Blend",

    colours: [
      {
        name: "Sky Blue",
        images: [
          "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Pink",
        images: [
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=800&q=80",
  },

  // ==================== MORE MEN PRODUCTS ====================

  {
    id: 9,
    name: "Men Solid Casual Shirt",
    brand: "Bewakoof",
    description: "Comfortable solid shirt with a clean casual look.",
    category: "men",
    subCategory: "shirts",

    price: 899,
    originalPrice: 1799,
    discount: 50,

    rating: 4.5,
    reviews: 86,

    material: "Cotton Blend",

    colours: [
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1602810319428-019690571b5b?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 10,
    name: "Men Oversized Graphic T-Shirt",
    brand: "Bewakoof",
    description: "Trendy oversized graphic t-shirt for everyday style.",
    category: "men",
    subCategory: "t-shirts",

    price: 699,
    originalPrice: 1499,
    discount: 53,

    rating: 4.6,
    reviews: 154,

    material: "100% Cotton",

    colours: [
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Grey",
        images: [
          "https://images.unsplash.com/photo-1564859228273-274232fdb516?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 11,
    name: "Men Casual Denim Shirt",
    brand: "Bewakoof",
    description: "Classic denim shirt with a versatile casual style.",
    category: "men",
    subCategory: "shirts",

    price: 999,
    originalPrice: 1999,
    discount: 50,

    rating: 4.4,
    reviews: 73,

    material: "Denim Cotton",

    colours: [
      {
        name: "Blue",
        images: [
          "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
    "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=800&q=80"
  },

  {
    id: 12,
    name: "Men Relaxed Fit Hoodie",
    brand: "Bewakoof",
    description: "Warm relaxed-fit hoodie with a minimal everyday design.",
    category: "men",
    subCategory: "hoodies",

    price: 1099,
    originalPrice: 2199,
    discount: 50,

    rating: 4.7,
    reviews: 126,

    material: "Cotton Fleece",

    colours: [
      {
        name: "Grey",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Black",
        images: [
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 13,
    name: "Men Premium Polo T-Shirt",
    brand: "Bewakoof",
    description: "Premium polo t-shirt with a smart casual appearance.",
    category: "men",
    subCategory: "t-shirts",

    price: 799,
    originalPrice: 1599,
    discount: 50,

    rating: 4.5,
    reviews: 91,

    material: "Cotton Pique",

    colours: [
      {
        name: "Navy Blue",
        images: [
           "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 14,
    name: "Men Casual Sweatshirt",
    brand: "Bewakoof",
    description: "Comfortable sweatshirt designed for a relaxed casual look.",
    category: "men",
    subCategory: "sweatshirts",

    price: 899,
    originalPrice: 1799,
    discount: 50,

    rating: 4.6,
    reviews: 118,

    material: "Cotton Fleece",

    colours: [
      {
        name: "Brown",
        images: [
          "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
  },


  // ==================== MORE WOMEN PRODUCTS ====================

  {
    id: 15,
    name: "Women Casual Oversized Shirt",
    brand: "Bewakoof",
    description: "Relaxed oversized shirt with a stylish modern silhouette.",
    category: "women",
    subCategory: "shirts",

    price: 899,
    originalPrice: 1799,
    discount: 50,

    rating: 4.6,
    reviews: 132,

    material: "Cotton Blend",

    colours: [
      {
        name: "White",
        images: [
          "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Blue",
        images: [
          "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 16,
    name: "Women Printed Summer Dress",
    brand: "Bewakoof",
    description: "Lightweight printed dress perfect for a casual summer look.",
    category: "women",
    subCategory: "dresses",

    price: 999,
    originalPrice: 1999,
    discount: 50,

    rating: 4.7,
    reviews: 168,

    material: "Rayon",

    colours: [
      {
        name: "Floral",
        images: [
          "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 17,
    name: "Women Relaxed Fit Hoodie",
    brand: "Bewakoof",
    description: "Soft relaxed hoodie for a comfortable everyday outfit.",
    category: "women",
    subCategory: "hoodies",

    price: 1099,
    originalPrice: 2199,
    discount: 50,

    rating: 4.5,
    reviews: 97,

    material: "Cotton Fleece",

    colours: [
      {
        name: "Pink",
        images: [
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
  },

 {
  id: 18,
  name: "Women Ribbed Casual Top",
  brand: "Bewakoof",
  description: "Stylish ribbed top with a comfortable everyday fit.",
  category: "women",
  subCategory: "tops",

  price: 649,
  originalPrice: 1299,
  discount: 50,

  rating: 4.4,
  reviews: 84,

  material: "Cotton Blend",

  colours: [
    {
      name: "Beige",
      images: [
        "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],

  sizes: ["S", "M", "L", "XL"],

  image:
    "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=80",
},

  {
    id: 19,
    name: "Women Casual Denim Jacket",
    brand: "Bewakoof",
    description: "Classic denim jacket for a stylish layered look.",
    category: "women",
    subCategory: "jackets",

    price: 1299,
    originalPrice: 2599,
    discount: 50,

    rating: 4.7,
    reviews: 142,

    material: "Denim",

    colours: [
      {
        name: "Blue",
        images: [
          "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 20,
    name: "Women Casual Sweatshirt",
    brand: "Bewakoof",
    description: "Soft sweatshirt with a relaxed fit for everyday comfort.",
    category: "women",
    subCategory: "sweatshirts",

    price: 899,
    originalPrice: 1799,
    discount: 50,

    rating: 4.5,
    reviews: 109,

    material: "Cotton Fleece",

    colours: [
      {
        name: "Lavender",
        images: [
          "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?auto=format&fit=crop&w=800&q=80",
  },
];

export default products;