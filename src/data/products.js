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
      name: "White",
      images: [
        "/produts/men/t-shirts/tshirt1.jpg",
        "/produts/men/t-shirts/shirts1i.jpg",
        "/produts/men/t-shirts/tshirt1ii.jpg",
        "/produts/men/t-shirts/tshirt1iii.jpg",
      ],
    },

    {
      name: "Black",
      images: [
        "/produts/men/t-shirts/shirts1i.jpg",
        "/produts/men/t-shirts/tshirt1ii.jpg",
        "/produts/men/t-shirts/tshirt1iii.jpg",
      ],
    },
  ],

  sizes: ["S", "M", "L", "XL"],

  // Default image
  image: "/produts/men/t-shirts/tshirt1.jpg",
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
  name: "White",
  images: [
    "/produts/men/t-shirts/tshirt2.webp",
    "/produts/men/t-shirts/tshirt2i.jpg",
   "/produts/men/t-shirts/tshirt2ii.webp",

        ],
},
      {
        name: "Grey",
        images: [
          "/produts/men/t-shirts/tshirt1.jpg",
          "/produts/men/t-shirts/tshirt1ii.jpg",
          "/produts/men/t-shirts/tshirt1iii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
  "/produts/men/t-shirts/tshirt2i.jpg",
  },

  {
    id: 3,
    name: "Men Casual Shirt",
    brand: "Bewakoof",
    description: "Relaxed shirt made for everyday comfort.",
    category: "men",
    subCategory: "Shirts",

    price: 699,
    originalPrice: 1499,
    discount: 53,

    rating: 4.6,
    reviews: 184,
    material: "100% Cotton",

    colours: [
      {
        name: "Black",
        images: [
          "/produts/men/shirts/shirts1.jpg",
          "/produts/men/shirts/shirt1i.jpg",
          "/produts/men/shirts/shirts1ii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/shirts/shirts2.webp",
          "/produts/men/shirts/shirts2i.webp",
          "/produts/men/shirts/shirts2ii.webp",
          "/produts/men/shirts/shirts2iii.webp"
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/shirts/shirts1iii.jpg",
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
          "/produts/men/t-shirts/tshirt2.webp",
           "/produts/men/t-shirts/tshirt2i.jpg",
          "/produts/men/t-shirts/tshirt2ii.webp",
        ],
      },
      {
        name: "Black",
        images: [
          "/produts/men/t-shirts/tshirt1.jpg",
           "/produts/men/t-shirts/tshirt1ii.jpg",
          "/produts/men/t-shirts/tshirt1iii.jpg",
          
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/t-shirts/tshirt2.webp",
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
          "/produts/women/women-top/top1.webp",
          "/produts/women/women-top/top1i.webp",
          "/produts/women/women-top/top1ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
          "/produts/women/women-top/top2iii.webp"
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top1.webp",
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
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top3.jpg",
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
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top4.jpg",
          "/produts/women/women-top/top4i.jpg",
          "/produts/women/women-top/top4iii.jpg"
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top2.webp",
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
          "/produts/women/women-top/top4.jpg",
          "/produts/women/women-top/top4i.jpg",
          "/produts/women/women-top/top4ii.jpg",
        ],
      },
      {
        name: "Pink",
        images: [
          "/produts/women/women-top/top2iii.webp",
          "/produts/women/women-top/top4iii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top4.jpg",
  },

  // ==================== MORE MEN PRODUCTS ====================

 

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
          "/produts/men/t-shirts/tshirts5.webp",
          "/produts/men/t-shirts/tshirts5ii.webp",
          "/produts/men/t-shirts/tshirts5ii.webp"
        ],
      },
      {
        name: "Grey",
        images: [
          "/produts/men/t-shirts/tshirts4.webp",
          "/produts/men/t-shirts/tshirts4ii.webp",
          "/produts/men/t-shirts/tshirts4ii.webp",
          "/produts/men/t-shirts/tshirts4iii.webp"
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/t-shirts/tshirts5.webp",
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
          "/produts/men/shirts/shirts3.jpg",
          "/produts/men/shirts/shirts3i.jpg",
          "/produts/men/shirts/shirts3ii.webp",
          "/produts/men/shirts/shirts3iv.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/shirts/shirts2.webp",
          "/produts/men/shirts/shirts2ii.webp",
          "/produts/men/shirts/shirts2iii.webp",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
    "/produts/men/shirts/shirts3.jpg"
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
        name: "Blue",
        images: [
          "/produts/men/hoddies/hoddies2.webp",
          "/produts/men/hoddies/hoddies2i.webp",
          "/produts/men/hoddies/hoddies2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/hoddies/hoddies3.webp",
          "/produts/men/hoddies/hoddies3i.webp",
          "/produts/men/hoddies/hoddies3iii.webp",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/hoddies/hoddies2.webp",
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
        name: "Blue",
        images: [
          
          "/produts/men/t-shirts/tshirts4.webp",
          "/produts/men/t-shirts/tshirts4ii.webp",
          "/produts/men/t-shirts/tshirts4iii.webp",
          "/produts/men/t-shirts/tshirts4iv.webp"
        ],
      },
      {
        name: "White",
        images: [
         "/produts/men/t-shirts/tshirts5.webp",
          "/produts/men/t-shirts/tshirts5ii.webp",
          "/produts/men/t-shirts/tshirts5iii.webp",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/t-shirts/tshirts4.webp",
  },

  {
    id: 14,
    name: "Men Casual Polo T-shirt",
    brand: "Bewakoof",
    description: "Comfortable Polo designed for a relaxed casual look.",
    category: "men",
    subCategory: "t-shirt",

    price: 899,
    originalPrice: 1799,
    discount: 50,

    rating: 4.6,
    reviews: 118,

    material: "Cotton Fleece",

    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/t-shirts/polo-tshirts.jpg",
          "/produts/men/t-shirts/polo-tshirts1ii.jpg",
          "/produts/men/t-shirts/plo-tshirts1iii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/t-shirts/polotshirts1i.jpg",
          "/produts/men/t-shirts/plo-tshirts1iv.jpg",
          "/produts/men/t-shirts/plo-tshirts1iii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/men/t-shirts/polo-tshirts.jpg",
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
        name: "Blue",
        images: [
          "/produts/women/women-top/top5.jpg",
          "/produts/women/women-top/top5i.jpg",
          "/produts/women/women-top/top5ii.jpg",
          "/produts/women/women-top/top5iii.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top4.jpg",
          "/produts/women/women-top/top4ii.jpg",
          "/produts/women/women-top/top4iii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top5.jpg",
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
        name: "Blue",
        images: [
          "/produts/women/women-top/top6.jpg",
          "/produts/women/women-top/top6i.jpg",
          "/produts/women/women-top/top6ii.jpg",
          "/produts/women/women-top/top2iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top5.jpg",
          "/produts/women/women-top/top5i.jpg",
          "/produts/women/women-top/top5ii.jpg",
          "/produts/women/women-top/top5iii.jpg"
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-top/top6.jpg",
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
        name: "Blue",
        images: [
          "/produts/women/hoddies/hoddies1.jpg",
          "/produts/women/hoddies/hoddies1i.jpg",
          "/produts/women/hoddies/hoddies1ii.jpg",
          "/produts/women/hoddies/hoddies-all.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/hoddies/hoddies2.jpg",
          "/produts/women/hoddies/hoddies2i.jpg",
          "/produts/women/hoddies/hoddies2ii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/hoddies/hoddies1.jpg",
  },

 {
  id: 18,
  name: "Women Ribbed Casual Dresses",
  brand: "Bewakoof",
  description: "Stylish ribbed dresses with a comfortable everyday fit.",
  category: "women",
  subCategory: "dresses",

  price: 649,
  originalPrice: 1299,
  discount: 50,

  rating: 4.4,
  reviews: 84,

  material: "Cotton Blend",

 colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top7.webp",
          "/produts/women/women-top/top7i.webp",
          "/produts/women/women-top/top7ii.webp",
          "/produts/women/women-top/top7iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top6.jpg",
          "/produts/women/women-top/top6ii.jpg",
          "/produts/women/women-top/top6iii.jpg",
        ],
      },
    ],

  sizes: ["S", "M", "L", "XL"],

  image:
    "/produts/women/women-top/top7i.webp",
},

  // {
  //   id: 19,
  //   name: "Women Casual Denim Jacket",
  //   brand: "Bewakoof",
  //   description: "Classic denim jacket for a stylish layered look.",
  //   category: "women",
  //   subCategory: "jackets",

  //   price: 1299,
  //   originalPrice: 2599,
  //   discount: 50,

  //   rating: 4.7,
  //   reviews: 142,

  //   material: "Denim",

  //   colours: [
  //     {
  //       name: "Blue",
  //       images: [
  //         "/produts/women/women-top/top2.webp",
  //         "/produts/women/women-top/top2i.webp",
  //         "/produts/women/women-top/top2ii.webp",
  //       ],
  //     },
  //     {
  //       name: "White",
  //       images: [
  //         "/produts/women/women-top/top3.jpg",
  //         "/produts/women/women-top/top3ii.webp",
  //         "/produts/women/women-top/top3iii.webp",
  //       ],
  //     },
  //   ],

  //   sizes: ["S", "M", "L", "XL"],

  //   image:
  //     "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80",
  // },

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
        name: "Blue",
        images: [
          "/produts/women/women-sweettshirts/sweet-tshirt1.jpg",
          "/produts/women/women-sweettshirts/sweet-tshirt1i.jpg",
          "/produts/women/women-sweettshirts/sweet-tshirt1ii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-sweettshirts/sweet-tshirts2.jpg",
          "/produts/women/women-sweettshirts/sweet-shirts2i.jpg",
          "/produts/women/women-sweettshirts/sweet-shirts2ii.jpg",
        ],
      },
    ],

    sizes: ["S", "M", "L", "XL"],

    image:
      "/produts/women/women-sweettshirts/sweet-tshirt1.jpg",
  },


// =====================================================
// ADDITIONAL PRODUCTS FOR MEGA MENU CATEGORIES
// =====================================================


  // ==================== MEN ====================

  // Oversized T-Shirts
  {
    id: 21,
    name: "Men Oversized Streetwear T-Shirt",
    brand: "Bewakoof",
    description: "Trendy oversized streetwear t-shirt for a relaxed look.",
    category: "men",
    subCategory: "oversized-t-shirts",
    price: 699,
    originalPrice: 1499,
    discount: 53,
    rating: 4.5,
    reviews: 92,
    material: "100% Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/t-shirts/tshirts4.webp",
          "/produts/men/t-shirts/tshirts4ii.webp",
          "/produts/men/t-shirts/tshirts4iii.webp",
          "/produts/men/t-shirts/tshirts4iv.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/t-shirts/tshirts3i.jpg",
          "/produts/men/t-shirts/tshirts3ii.jpg",
          "/produts/men/t-shirts/tshirts3iii.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/t-shirts/tshirts4.webp",
  },

  {
    id: 22,
    name: "Men Oversized Cotton T-Shirt",
    brand: "Bewakoof",
    description: "Soft cotton oversized t-shirt with a modern casual fit.",
    category: "men",
    subCategory: "oversized-t-shirts",
    price: 749,
    originalPrice: 1599,
    discount: 53,
    rating: 4.6,
    reviews: 108,
    material: "100% Cotton",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/t-shirts/tshirts3i.jpg",
          "/produts/men/t-shirts/tshirts3ii.jpg",
          "/produts/men/t-shirts/tshirts3iii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/t-shirts/tshirts4.webp",
          "/produts/men/t-shirts/tshirts4ii.webp",
          "/produts/men/t-shirts/tshirts4iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/t-shirts/tshirts3.jpg",
  },

  // Shirts
  {
    id: 23,
    name: "Men Slim Fit Casual Shirt",
    brand: "Bewakoof",
    description: "Classic slim fit shirt for smart casual occasions.",
    category: "men",
    subCategory: "shirts",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.5,
    reviews: 86,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/shirts/shirts3ii.webp",
          "/produts/men/shirts/shirts3iii.webp",
          "/produts/men/shirts/shirts3iv.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/shirts/shirts2.webp",
          "/produts/men/shirts/shirts2iii.webp",
          "/produts/men/shirts/shirts2ii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/shirts/shirts3i.jpg",
  },

  {
    id: 24,
    name: "Men Checked Casual Shirt",
    brand: "Bewakoof",
    description: "Comfortable checked shirt for everyday casual styling.",
    category: "men",
    subCategory: "shirts",
    price: 949,
    originalPrice: 1899,
    discount: 50,
    rating: 4.4,
    reviews: 71,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
           "/produts/men/shirts/shirts2.webp",
           "/produts/men/shirts/shirts2.webp",
          "/produts/men/shirts/shirts2iii.webp",
          "/produts/men/shirts/shirts2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
         "/produts/men/shirts/shirts3ii.webp",
          "/produts/men/shirts/shirts3iii.webp",
          "/produts/men/shirts/shirts3iv.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/shirts/shirts2.webp",
  },

  // Hoodies
  {
    id: 25,
    name: "Men Printed Pullover Hoodie",
    brand: "Bewakoof",
    description: "Warm printed hoodie with a comfortable relaxed fit.",
    category: "men",
    subCategory: "hoodies",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.6,
    reviews: 118,
    material: "Cotton Fleece",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/hoddies/hoddies3.webp",
          "/produts/men/hoddies/hoddies3i.webp",
          "/produts/men/hoddies/hoddies3iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/hoddies/hoddies1.jpg",
          "/produts/men/hoddies/hoddies1i.jpg",
          "/produts/men/hoddies/hoddies1ii.jpg",
          "/produts/men/hoddies/hoddies1iii.jpg"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/hoddies/hoddies3.webp",
  },

  {
    id: 26,
    name: "Men Minimal Logo Hoodie",
    brand: "Bewakoof",
    description: "Minimal logo hoodie designed for everyday comfort.",
    category: "men",
    subCategory: "hoodies",
    price: 1149,
    originalPrice: 2299,
    discount: 50,
    rating: 4.7,
    reviews: 94,
    material: "Cotton Fleece",
    colours: [
      {
        name: "Blue",
        images: [
           "/produts/men/hoddies/hoddies1.jpg",
          "/produts/men/hoddies/hoddies1i.jpg",
          "/produts/men/hoddies/hoddies1ii.jpg",
          "/produts/men/hoddies/hoddies1iii.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/hoddies/hoddies3.webp",
          "/produts/men/hoddies/hoddies3i.webp",
          "/produts/men/hoddies/hoddies3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/hoddies/hoddies1.jpg",
  },

  // Sweatshirts
  {
    id: 27,
    name: "Men Basic Crewneck Sweatshirt",
    brand: "Bewakoof",
    description: "Soft crewneck sweatshirt with a clean everyday design.",
    category: "men",
    subCategory: "sweatshirts",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.5,
    reviews: 83,
    material: "Cotton Fleece",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/oversized-tshirts/oshirts1ii.jpg",
          "/produts/men/oversized-tshirts/otshirt1ii.webp",
          "/produts/men/oversized-tshirts/otshirts1i.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/oversized-tshirts/otshirt2.webp",
          "/produts/men/oversized-tshirts/otshirts2i.webp",
          "/produts/men/oversized-tshirts/otshirts2ii.webp",
          "/produts/men/oversized-tshirts/otshirts2iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/oversized-tshirts/oshirts1ii.jpg",
  },

  {
    id: 28,
    name: "Men Graphic Sweatshirt",
    brand: "Bewakoof",
    description: "Graphic sweatshirt with a relaxed modern fit.",
    category: "men",
    subCategory: "sweatshirts",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.6,
    reviews: 102,
    material: "Cotton Fleece",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/oversized-tshirts/otshirts3.webp",
          "/produts/men/oversized-tshirts/otshirts3i.webp",
          "/produts/men/oversized-tshirts/otshirts3ii.webp",
          "/produts/men/oversized-tshirts/otshirts3iii.webp"
        ],
      },
      {
        name: "White",
        images: [
         "/produts/men/oversized-tshirts/otshirt2.webp",
          "/produts/men/oversized-tshirts/otshirts2i.webp",
          "/produts/men/oversized-tshirts/otshirts2ii.webp",
          "/produts/men/oversized-tshirts/otshirts2iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/oversized-tshirts/otshirts3.webp",
  },

  // Jeans
  {
    id: 29,
    name: "Men Regular Fit Blue Jeans",
    brand: "Bewakoof",
    description: "Classic blue jeans with a comfortable regular fit.",
    category: "men",
    subCategory: "jeans",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.5,
    reviews: 76,
    material: "Denim",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/jeans/jeans1.jpg",
          "/produts/men/jeans/jeans1i.jpg",
          "/produts/men/jeans/jeans1ii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/jeans/jeans2.webp",
          "/produts/men/jeans/jeans2i.webp",
          "/produts/men/jeans/jeans2ii.webp",
          
        ],
      },
    ],
    sizes: ["30", "32", "34", "36"],
    image:
      "/produts/men/jeans/jeans1.jpg",
  },

  {
    id: 30,
    name: "Men Slim Fit Denim Jeans",
    brand: "Bewakoof",
    description: "Modern slim fit denim jeans for everyday styling.",
    category: "men",
    subCategory: "jeans",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.6,
    reviews: 91,
    material: "Denim",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/jeans/jean2iii.webp",
          "/produts/men/jeans/jeans3i.webp",
          "/produts/men/jeans/jeans3ii.webp",
          "/produts/men/jeans/jeans3iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/jeans/jeans4.webp",
          "/produts/men/jeans/jeans4iii.webp",
          "/produts/men/jeans/jeans4ii.webp",
          "/produts/men/jeans/jeans4i.webp"
        ],
      },
    ],
    sizes: ["30", "32", "34", "36"],
    image:
      "/produts/men/jeans/jean2iii.webp",
  },

  // Joggers
  {
    id: 31,
    name: "Men Cotton Joggers",
    brand: "Bewakoof",
    description: "Comfortable cotton joggers for casual everyday wear.",
    category: "men",
    subCategory: "joggers",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.5,
    reviews: 89,
    material: "Cotton",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/joggers/joggers1.jpg",
          "/produts/men/joggers/joggers1i.jpg",
          "/produts/men/joggers/joggers1ii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/joggers/joggers2.jpg",
          "/produts/men/joggers/joggers2i.jpg",
          "/produts/men/joggers/joggers2iii.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/joggers/joggers1.jpg",
  },

  {
    id: 32,
    name: "Men Relaxed Fit Joggers",
    brand: "Bewakoof",
    description: "Relaxed fit joggers made for comfort and daily use.",
    category: "men",
    subCategory: "joggers",
    price: 849,
    originalPrice: 1699,
    discount: 50,
    rating: 4.6,
    reviews: 97,
    material: "Cotton Blend",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/joggers/joggers2.jpg",
          "/produts/men/joggers/joggers2i.jpg",
          "/produts/men/joggers/joggers2iii.jpg",
        ],
      },
      {
        name: "White",
        images: [
         "/produts/men/joggers/joggers3.jpg",
          "/produts/men/joggers/joggers3ii.jpg",
          "/produts/men/joggers/joggers3iii.jpg",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/joggers/joggers2.jpg",
  },

  // Shorts
  {
    id: 33,
    name: "Men Casual Cotton Shorts",
    brand: "Bewakoof",
    description: "Lightweight cotton shorts for comfortable casual wear.",
    category: "men",
    subCategory: "shorts",
    price: 599,
    originalPrice: 1199,
    discount: 50,
    rating: 4.4,
    reviews: 62,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/men/shorts/shorts1.webp",
          "/produts/men/shorts/shorts1i.webp",
          "/produts/men/shorts/shorts1ii.webp",
          "/produts/men/shorts/shorts1iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/shorts/shorts2i.webp",
          "/produts/men/shorts/shorts2ii.webp",
          "/produts/men/shorts/shorts-all.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/shorts/shorts1.webp",
  },

  {
    id: 34,
    name: "Men Printed Casual Shorts",
    brand: "Bewakoof",
    description: "Trendy printed shorts for everyday summer outfits.",
    category: "men",
    subCategory: "shorts",
    price: 649,
    originalPrice: 1299,
    discount: 50,
    rating: 4.5,
    reviews: 73,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
         
          "/produts/men/shorts/shots3.webp",
          "/produts/men/shorts/shorts3i.webp",
          "/produts/men/shorts/shorts3ii.webp",
          "/produts/men/shorts/shorts3iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/shorts/shorts2.jpg",
          "/produts/men/shorts/shorts2i.webp",
          "/produts/men/shorts/shorts2iii.webp",
          "/produts/men/shorts/shorts-all1.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/men/shorts/shorts3i.webp",
  },

  // Trousers
  {
    id: 35,
    name: "Men Regular Fit Trousers",
    brand: "Bewakoof",
    description: "Smart regular fit trousers for everyday and office wear.",
    category: "men",
    subCategory: "trousers",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.4,
    reviews: 68,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
         

          "/produts/men/trousers/trouser4i.webp",
          "/produts/men/trousers/trouser4ii.webp",
          "/produts/men/trousers/trouser4ii.webp",
          "/produts/men/trousers/trouser4iii.webp",
          "/produts/men/trousers/trouser4iv.webp",
          "/produts/men/trousers/trouser4v.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/trousers/trouser4.jpg",
          "/produts/men/trousers/trouser2i.jpg",
          "/produts/men/trousers/trouser2ii.jpg",
          "/produts/men/trousers/trouser2iii.jpg",
          "/produts/men/trousers/trouser2iiii.jpg"
        ],
      },
    ],
    sizes: ["30", "32", "34", "36"],
    image:
      "/produts/men/trousers/trouser4i.webp",
  },

  {
    id: 36,
    name: "Men Slim Fit Formal Trousers",
    brand: "Bewakoof",
    description: "Clean slim fit trousers for a smart modern appearance.",
    category: "men",
    subCategory: "trousers",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.5,
    reviews: 81,
    material: "Poly Cotton",
   colours: [
      {
        name: "Blue",
        images: [
           "/produts/men/trousers/trouser1.webp",
          "/produts/men/trousers/trouser1i.webp",
          "/produts/men/trousers/trouser1ii.webp",
          "/produts/men/trousers/trouser1iii.webp"
          
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/trousers/trouser3.webp",
          "/produts/men/trousers/trouser3i.webp",
          "/produts/men/trousers/trouser3ii.webp",
          "/produts/men/trousers/trouser3iii.webp",
          "/produts/men/trousers/trouser3iv.webp"
        ],
      },
    ],
    sizes: ["30", "32", "34", "36"],
    image:
      "/produts/men/trousers/trouser1.webp",
  },

  // Sneakers
  {
    id: 37,
    name: "Men Casual Sneakers",
    brand: "Bewakoof",
    description: "Minimal casual sneakers for everyday outfits.",
    category: "men",
    subCategory: "sneakers",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.5,
    reviews: 104,
    material: "Synthetic",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 38,
    name: "Men Street Style Sneakers",
    brand: "Bewakoof",
    description: "Stylish streetwear sneakers with a modern design.",
    category: "men",
    subCategory: "sneakers",
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    rating: 4.6,
    reviews: 116,
    material: "Synthetic",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
  },

  // Casual Shoes
  {
    id: 39,
    name: "Men Everyday Casual Shoes",
    brand: "Bewakoof",
    description: "Comfortable casual shoes designed for everyday use.",
    category: "men",
    subCategory: "casual-shoes",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.4,
    reviews: 73,
    material: "Synthetic",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 40,
    name: "Men Smart Casual Shoes",
    brand: "Bewakoof",
    description: "Smart casual shoes for a clean sophisticated look.",
    category: "men",
    subCategory: "casual-shoes",
    price: 1399,
    originalPrice: 2799,
    discount: 50,
    rating: 4.5,
    reviews: 85,
    material: "Synthetic Leather",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=800&q=80",
  },

  // Slippers
  {
    id: 41,
    name: "Men Comfortable Everyday Slippers",
    brand: "Bewakoof",
    description: "Lightweight slippers designed for everyday comfort.",
    category: "men",
    subCategory: "slippers",
    price: 399,
    originalPrice: 799,
    discount: 50,
    rating: 4.3,
    reviews: 58,
    material: "Rubber",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 42,
    name: "Men Printed Casual Slippers",
    brand: "Bewakoof",
    description: "Casual printed slippers with a comfortable lightweight design.",
    category: "men",
    subCategory: "slippers",
    price: 449,
    originalPrice: 899,
    discount: 50,
    rating: 4.4,
    reviews: 64,
    material: "Rubber",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "https://images.unsplash.com/photo-1553808373-92b5b5e3f4b8?auto=format&fit=crop&w=800&q=80",
  },

  // ==================== WOMEN ====================

  // Shirts
  {
    id: 43,
    name: "Women Oversized Casual Shirt",
    brand: "Bewakoof",
    description: "Relaxed oversized shirt for a modern everyday look.",
    category: "women",
    subCategory: "shirts",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.6,
    reviews: 91,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 44,
    name: "Women Printed Casual Shirt",
    brand: "Bewakoof",
    description: "Stylish printed shirt for casual everyday outfits.",
    category: "women",
    subCategory: "shirts",
    price: 949,
    originalPrice: 1899,
    discount: 50,
    rating: 4.5,
    reviews: 77,
    material: "Cotton Blend",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/products/women/women-shirt/shirts1.jpg",
  },

  // Hoodies
  {
    id: 45,
    name: "Women Printed Hoodie",
    brand: "Bewakoof",
    description: "Comfortable printed hoodie with a relaxed fit.",
    category: "women",
    subCategory: "hoodies",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.6,
    reviews: 88,
    material: "Cotton Fleece",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 46,
    name: "Women Minimal Hoodie",
    brand: "Bewakoof",
    description: "Soft minimal hoodie designed for everyday comfort.",
    category: "women",
    subCategory: "hoodies",
    price: 1149,
    originalPrice: 2299,
    discount: 50,
    rating: 4.7,
    reviews: 96,
    material: "Cotton Fleece",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
  },

  // Jeans
  {
    id: 47,
    name: "Women Slim Fit Blue Jeans",
    brand: "Bewakoof",
    description: "Comfortable slim fit jeans for everyday styling.",
    category: "women",
    subCategory: "jeans",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.5,
    reviews: 83,
    material: "Denim",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 48,
    name: "Women Relaxed Fit Denim Jeans",
    brand: "Bewakoof",
    description: "Relaxed denim jeans for a comfortable casual outfit.",
    category: "women",
    subCategory: "jeans",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.6,
    reviews: 105,
    material: "Denim",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=800&q=80",
  },

  // Joggers
  {
    id: 49,
    name: "Women Cotton Joggers",
    brand: "Bewakoof",
    description: "Soft cotton joggers for comfortable everyday wear.",
    category: "women",
    subCategory: "joggers",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.5,
    reviews: 74,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.bewakoof.com/t1080/women-s-beige-oversized-plus-size-cargo-joggers-585694-1756986851-1.jpg",
  },
{
    id: 50,
    name: "Women Relaxed Fit Joggers",
    brand: "Bewakoof",
    description: "Relaxed joggers designed for casual comfort.",
    category: "women",
    subCategory: "joggers",
    price: 849,
    originalPrice: 1699,
    discount: 50,
    rating: 4.6,
    reviews: 82,
    material: "Cotton Blend",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.bewakoof.com/t1080/580425_2026-05-04t12-32-18_1.jpg",
  },

  // Trousers
  {
    id: 51,
    name: "Women Straight Fit Trousers",
    brand: "Bewakoof",
    description: "Elegant straight fit trousers for everyday styling.",
    category: "women",
    subCategory: "trousers",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.5,
    reviews: 69,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    images:[
      "https://images.bewakoof.com/t640/women-s-camel-brown-wide-leg-track-pants-654853-1754479994-1.jpg",
      "https://images.bewakoof.com/t1080/women-s-camel-brown-wide-leg-pants-654853-1736336895-2.jpg",
      "https://images.bewakoof.com/t1080/women-s-camel-brown-wide-leg-pants-654853-1736336900-4.jpg",
      "https://images.bewakoof.com/t1080/women-s-camel-brown-wide-leg-pants-654853-1736336908-6.jpg"
    ],
    },

  {
    id: 52,
    name: "Women Wide Leg Trousers",
    brand: "Bewakoof",
    description: "Comfortable wide-leg trousers with a modern silhouette.",
    category: "women",
    subCategory: "trousers",
    price: 1099,
    originalPrice: 2199,
    discount: 50,
    rating: 4.6,
    reviews: 91,
    material: "Poly Cotton",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80",
  },

  // Shorts
  {
    id: 53,
    name: "Women Casual Cotton Shorts",
    brand: "Bewakoof",
    description: "Lightweight cotton shorts for comfortable summer wear.",
    category: "women",
    subCategory: "shorts",
    price: 599,
    originalPrice: 1199,
    discount: 50,
    rating: 4.4,
    reviews: 57,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 54,
    name: "Women Printed Summer Shorts",
    brand: "Bewakoof",
    description: "Trendy printed shorts for casual summer outfits.",
    category: "women",
    subCategory: "shorts",
    price: 649,
    originalPrice: 1299,
    discount: 50,
    rating: 4.5,
    reviews: 66,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=800&q=80",
  },

  // Kurtas
  {
    id: 55,
    name: "Women Printed Casual Kurta",
    brand: "Bewakoof",
    description: "Comfortable printed kurta for a stylish ethnic look.",
    category: "women",
    subCategory: "kurtas",
    price: 899,
    originalPrice: 1799,
    discount: 50,
    rating: 4.6,
    reviews: 84,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQfdimlsK4-LKURqv1wiR4krSF8HiOVVg2jQQgg2TIT9da6Wgc241HYj99SUSkOYt2EHgNkn-g3ZuWfCuI43n07mpc3sKgmc8IdsILbg6UzV1f0fEpyZJQzkVo",
  },

  {
    id: 56,
    name: "Women Floral Cotton Kurta",
    brand: "Bewakoof",
    description: "Floral cotton kurta with a comfortable everyday fit.",
    category: "women",
    subCategory: "kurtas",
    price: 949,
    originalPrice: 1899,
    discount: 50,
    rating: 4.7,
    reviews: 92,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  },

  // Dresses
  {
    id: 57,
    name: "Women Floral Casual Dress",
    brand: "Bewakoof",
    description: "Lightweight floral dress for a fresh casual look.",
    category: "women",
    subCategory: "dresses",
    price: 999,
    originalPrice: 1999,
    discount: 50,
    rating: 4.7,
    reviews: 121,
    material: "Rayon",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 58,
    name: "Women Printed Summer Dress",
    brand: "Bewakoof",
    description: "Comfortable printed summer dress with a relaxed fit.",
    category: "women",
    subCategory: "dresses",
    price: 1049,
    originalPrice: 2099,
    discount: 50,
    rating: 4.6,
    reviews: 97,
    material: "Rayon",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  },

  // Co-ords
  {
    id: 59,
    name: "Women Casual Co-ord Set",
    brand: "Bewakoof",
    description: "Trendy casual co-ord set with a comfortable fit.",
    category: "women",
    subCategory: "co-ords",
    price: 1199,
    originalPrice: 2399,
    discount: 50,
    rating: 4.6,
    reviews: 88,
    material: "Cotton Blend",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 60,
    name: "Women Printed Co-ord Set",
    brand: "Bewakoof",
    description: "Stylish printed co-ord set for a modern casual look.",
    category: "women",
    subCategory: "co-ords",
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    rating: 4.7,
    reviews: 103,
    material: "Cotton Blend",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1496217590455-aa63a8350eea?auto=format&fit=crop&w=800&q=80",
  },

  // ==================== ACCESSORIES ====================

  // Caps
  {
    id: 61,
    name: "Classic Cotton Cap",
    brand: "Bewakoof",
    description: "Classic cotton cap for everyday casual styling.",
    category: "accessories",
    subCategory: "caps",
    price: 399,
    originalPrice: 799,
    discount: 50,
    rating: 4.4,
    reviews: 61,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
  },

 {
    id: 62,
    name: "Minimal Logo Cap",
    brand: "Bewakoof",
    description: "Minimal logo cap with a comfortable adjustable fit.",
    category: "accessories",
    subCategory: "caps",
    price: 449,
    originalPrice: 899,
    discount: 50,
    rating: 4.5,
    reviews: 72,
    material: "Cotton",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80",
  },

  // Bags
  {
    id: 63,
    name: "Everyday Casual Backpack",
    brand: "Bewakoof",
    description: "Spacious everyday backpack with a clean casual design.",
    category: "accessories",
    subCategory: "bags",
    price: 799,
    originalPrice: 1599,
    discount: 50,
    rating: 4.5,
    reviews: 84,
    material: "Polyester",
   colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 64,
    name: "Minimal Casual Sling Bag",
    brand: "Bewakoof",
    description: "Compact sling bag for everyday essentials.",
    category: "accessories",
    subCategory: "bags",
    price: 699,
    originalPrice: 1399,
    discount: 50,
    rating: 4.4,
    reviews: 67,
    material: "Polyester",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
       "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  },

  // Wallets
  {
    id: 65,
    name: "Men Classic Leather Wallet",
    brand: "Bewakoof",
    description: "Classic compact wallet with multiple card slots.",
    category: "accessories",
    subCategory: "wallets",
    price: 499,
    originalPrice: 999,
    discount: 50,
    rating: 4.5,
    reviews: 76,
    material: "Faux Leather",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 66,
    name: "Slim Minimal Wallet",
    brand: "Bewakoof",
    description: "Slim lightweight wallet for everyday use.",
    category: "accessories",
    subCategory: "wallets",
    price: 449,
    originalPrice: 899,
    discount: 50,
    rating: 4.4,
    reviews: 64,
    material: "Faux Leather",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
  },

  // Belts
  {
    id: 67,
    name: "Classic Black Casual Belt",
    brand: "Bewakoof",
    description: "Classic black belt with a minimal everyday design.",
    category: "accessories",
    subCategory: "belts",
    price: 499,
    originalPrice: 999,
    discount: 50,
    rating: 4.5,
    reviews: 58,
    material: "Faux Leather",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
  },

  {
    id: 68,
    name: "Brown Casual Leather Belt",
    brand: "Bewakoof",
    description: "Classic brown belt for smart casual outfits.",
    category: "accessories",
    subCategory: "belts",
    price: 549,
    originalPrice: 1099,
    discount: 50,
    rating: 4.6,
    reviews: 71,
    material: "Faux Leather",
    colours: [
      {
        name: "Blue",
        images: [
          "/produts/women/women-top/top2.webp",
          "/produts/women/women-top/top2i.webp",
          "/produts/women/women-top/top2ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-top/top3.jpg",
          "/produts/women/women-top/top3ii.webp",
          "/produts/women/women-top/top3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "",
  },
];
     




export default products;