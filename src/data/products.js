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
    subCategory: "shirts",

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
    subCategory: "t-shirts",

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
    name: "Men Graphic Oversized T-shirt",
    brand: "Bewakoof",
    description: "Graphic Oversized T-shirt with a relaxed modern fit.",
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
           "/produts/men/oversized-tshirts/otshirt2.webp",
          "/produts/men/oversized-tshirts/oshirts2i.webp",
          "/produts/men/oversized-tshirts/oshirts2ii.webp",
          "/produts/men/oversized-tshirts/oshirts2iii.webp"
        
        ],
      },
      {
        name: "White",
        images: [
          "/produts/men/oversized-tshirts/oshirts3.webp",
          "/produts/men/oversized-tshirts/oshirts3i.webp",
          "/produts/men/oversized-tshirts/oshirts3ii.webp",
          "/produts/men/oversized-tshirts/oshirts3iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "produts/men/oversized-tshirts/otshirt2.webp",
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
          "/produts/accessories/sneakers/shoes1.jpg",
          "/produts/accessories/sneakers/shoes1i.jpg",
          "/produts/accessories/sneakers/shoes1ii.jpg",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/sneakers/shoes2.jpg",
          "/produts/accessories/sneakers/shoes2i.jpg",
          "/produts/accessories/sneakers/shoes2ii.jpg",
          "/produts/accessories/sneakers/shoes2iii.jpg"
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sneakers/shoes1.jpg",
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
         "/produts/accessories/sneakers/shoes2.jpg",
          "/produts/accessories/sneakers/shoes2i.jpg",
          "/produts/accessories/sneakers/shoes2ii.jpg",
          "/produts/accessories/sneakers/shoes2iii.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/sneakers/sneakers2.jpg",
          "/produts/accessories/sneakers/sneakers2ii.jpg",
          "/produts/accessories/sneakers/sneakers2iii.jpg",
          "/produts/accessories/sneakers/sneakers2iiii.jpg"
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sneakers/shoes2.jpg",
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
          "/produts/accessories/sneakers/sneakers2.jpg",
          "/produts/accessories/sneakers/sneakers2ii.jpg",
          "/produts/accessories/sneakers/sneakers2iii.jpg",
          "/produts/accessories/sneakers/sneakers2iiii.jpg"
        ],
      },
      {
        name: "White",
        images: [
           "/produts/accessories/sneakers/sneakers1.webp",
          "/produts/accessories/sneakers/sneakers1i.webp",
          "/produts/accessories/sneakers/sneakers1ii.webp",
         
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sneakers/sneakers2.jpg",
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
           "/produts/accessories/sneakers/sneakers1.webp",
          "/produts/accessories/sneakers/sneakers1i.webp",
          "/produts/accessories/sneakers/sneakers1ii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/sneakers/shoes1.jpg",
          "/produts/accessories/sneakers/shoes1i.jpg",
          "/produts/accessories/sneakers/shoes1ii.jpg",
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sneakers/sneakers1.webp",
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
          "/produts/accessories/sliders/sliders1.jpg",
          "/produts/accessories/sliders/sliders1ii.jpg",
          "/produts/accessories/sliders/sliders1iii.jpg",
        ],
      },
      {
        name: "White",
        images: [
           "/produts/accessories/sliders/sliders2.webp",
          "/produts/accessories/sliders/sliders2i.webp",
          "/produts/accessories/sliders/sliders2ii.webp",
          "/produts/accessories/sliders/sliders2iii.webp"
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sliders/sliders1ii.jpg",
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
          "/produts/accessories/sliders/sliders2.webp",
          "/produts/accessories/sliders/sliders2i.webp",
          "/produts/accessories/sliders/sliders2ii.webp",
          "/produts/accessories/sliders/sliders2iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/sliders/sliders3.jpg",
          "/produts/accessories/sliders/sliders3i.jpg",
          "/produts/accessories/sliders/sliders3ii.jpg",
          "/produts/accessories/sliders/sliders3iii.jpg"
        ],
      },
    ],
    sizes: ["7", "8", "9", "10"],
    image:
      "/produts/accessories/sliders/sliders2.webp",
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
          "/produts/women/women-shirt/shirts1.jpg",
          "/produts/women/women-shirt/shirts1ii.webp",
          "/produts/women/women-shirt/shirts1iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-shirt/shirts4.jpg",
          "/produts/women/women-shirt/shirts4i.jpg",
          "/produts/women/women-shirt/shirts4ii.jpg",
          "/produts/women/women-shirt/shirts4iii.jpg",
          "/produts/women/women-shirt/shirts4iv.jpg"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-shirt/shirts1.jpg",
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
            "/produts/women/women-shirt/shirts2.jpg",
          "/produts/women/women-shirt/shirts2i.jpg",
          "/produts/women/women-shirt/shirts2ii.jpg",
          "/produts/women/women-shirt/shirts2iii.jpg",
          "/produts/women/women-shirt/shirts2iv.jpg"
        ],
      },
      {
        name: "White",
        images: [
           "/produts/women/women-shirt/shirts3.jpg",
          "/produts/women/women-shirt/shirts3i.jpg",
          "/produts/women/women-shirt/shirts3ii.jpg",
         
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-shirt/shirts2.jpg",
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
          "/produts/women/hoddies/hoddies3.webp",
          "/produts/women/hoddies/hoddies3i.webp",
          "/produts/women/hoddies/hoddies3ii.webp",
          "/produts/women/hoddies/hoddies3iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/hoddies/hoddies4.jpg",
          "/produts/women/hoddies/hoddies4i.jpg",
          "/produts/women/hoddies/hoddies4ii.jpg",
          "/produts/women/hoddies/hoddies4iii.jpg",
          "/produts/women/hoddies/hoddies4iv.jpg"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/hoddies/hoddies3.webp",
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
          "/produts/women/hoddies/hoddies4.jpg",
          "/produts/women/hoddies/hoddies4i.jpg",
          "/produts/women/hoddies/hoddies4ii.jpg",
          "/produts/women/hoddies/hoddies4iii.jpg",
          "/produts/women/hoddies/hoddies4iv.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/hoddies/hoddies5.webp",
          "/produts/women/hoddies/hoddies5i.webp",
          "/produts/women/hoddies/hoddies5ii.webp",
          "/produts/women/hoddies/hoddies5iii.webp",
          "/produts/women/hoddies/hoddies5iv.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/hoddies/hoddies4.jpg",
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

          "/produts/women/women-jeans/jeans3.webp",
          "/produts/women/women-jeans/jeans3ii.webp",
          "/produts/women/women-jeans/jeans3iii.webp",
          "/produts/women/women-jeans/jeans3iv.webp"

         
        ],
      },
      {
        name: "White",
        images: [
           "/produts/women/women-jeans/jeans1.webp",
          "/produts/women/women-jeans/jeans1i.webp",
          "/produts/women/women-jeans/jeans1ii.webp",
          "/produts/women/women-jeans/jeans1iii.webp"
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "/produts/women/women-jeans/jeans3.webp",
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
           "/produts/women/women-jeans/jeans1.webp",
          "/produts/women/women-jeans/jeans1i.webp",
          "/produts/women/women-jeans/jeans1ii.webp",
          "/produts/women/women-jeans/jeans1iii.webp"
        ],
      },
      {
        name: "White",
        images: [
            "/produts/women/women-jeans/jeans2.webp",
          "/produts/women/women-jeans/jeans2i.webp",
          "/produts/women/women-jeans/jeans2ii.webp",
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "/produts/women/women-jeans/jeans1.webp",
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
            "/produts/women/women-jeans/joggers2.webp",
          "/produts/women/women-jeans/joggers2i.webp",
          "/produts/women/women-jeans/joggers2ii.webp",
          "/produts/women/women-jeans/joggers2iii.webp"
          
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-jeans/joggers1.webp",
          "/produts/women/women-jeans/joggers1i.webp",
          "/produts/women/women-jeans/joggers1i.webp",
          "/produts/women/women-jeans/joggers1iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-jeans/joggers2.webp",
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
          "/produts/women/women-jeans/joggers1.webp",
          "/produts/women/women-jeans/joggers1i.webp",
          "/produts/women/women-jeans/joggers1i.webp",
          "/produts/women/women-jeans/joggers1iii.webp"
        ],
      },
      {
        name: "White",
        images: [
           "/produts/women/women-joggers/joggers2.webp",
          "/produts/women/women-joggers/joggers2i.webp",
          "/produts/women/women-joggers/joggers2ii.webp",
          "/produts/women/women-joggers/joggers2iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-jeans/joggers1.webp",
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
          "/produts/women/women-trouser/trouser1.webp",
          "/produts/women/women-trouser/touser1i.webp",
          "/produts/women/women-trouser/rouser1ii.webp",
          "/produts/women/women-trouser/trouser1.webp",
          "/produts/women/women-trouser/trouser1i.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-trouser/trouser4.jpg",
          "/produts/women/women-trouser/trouser4i.jpg",
          "/produts/women/women-trouser/trouser4ii.jpg",
          "/produts/women/women-trouser/trouser4iii.jpg"
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
     "/produts/women/women-trouser/trouser1.webp"
    ,
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
            "/produts/women/women-trouser/rouser2.jpg",
          "/produts/women/women-trouser/rouser2ii.jpg",
          "/produts/women/women-trouser/trouser2i.jpg",
          "/produts/women/women-trouser/trouser2iii.jpg"
        ],
      },
      {
        name: "White",
        images: [
         "/produts/women/women-trouser/trouser3i.webp",
          "/produts/women/women-trouser/trouser3ii.webp",
          "/produts/women/women-trouser/trouser3iii.webp",
          "/produts/women/women-trouser/trouser3iv.webp"
        ],
      },
    ],
    sizes: ["28", "30", "32", "34"],
    image:
      "/produts/women/women-trouser/rouser2.jpg",
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
          "/produts/women/women-shorts/shorts3.webp",
          "/produts/women/women-shorts/shorts3i.webp",
          "/produts/women/women-shorts/shorts3ii.webp",
          
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-shorts/short2.jpg",
          "/produts/women/women-shorts/short2i.webp",
          "/produts/women/women-shorts/short2ii.webp",
          "/produts/women/women-shorts/shorts2ii.webp",
          
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-shorts/shorts3.webp",
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
          "/produts/women/women-shorts/short4.webp",
          "/produts/women/women-shorts/short4i.webp",
          "/produts/women/women-shorts/short4ii.webp",
          "/produts/women/women-shorts/short4iii.webp",
          "/produts/women/women-shorts/short4iv.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/women-shorts/short1i.webp",
          "/produts/women/women-shorts/women short.webp",
          "/produts/women/women-shorts/shorts1ii.webp",
          
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/women-shorts/short4.webp",
  },

  // Kurtas
  {
    id: 55,
    name: "Women Printed Casual Dress",
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
          "/produts/women/kurtas/kurta1.webp",
          "/produts/women/kurtas/kurta1i.webp",
          "/produts/women/kurtas/kurta1ii.webp",
          "/produts/women/kurtas/kurta1iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/kurtas/kurta2.webp",
          "/produts/women/kurtas/kurta2i.webp",
          "/produts/women/kurtas/kurta2ii.webp",
          "/produts/women/kurtas/kurta2ii.webp",
          "/produts/women/kurtas/kurta2iiii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/kurtas/kurta1.webp",
  },

  {
    id: 55,
    name: "Women Printed Casual Dress",
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

          "/produts/women/kurtas/kurta2.webp",
          "/produts/women/kurtas/kurta2i.webp",
          "/produts/women/kurtas/kurta2ii.webp",
          "/produts/women/kurtas/kurta2ii.webp",
          "/produts/women/kurtas/kurta2iiii.webp"
         
        ],
      },
      {
        name: "White",
        images: [
           "/produts/women/kurtas/kurta1.webp",
          "/produts/women/kurtas/kurta1i.webp",
          "/produts/women/kurtas/kurta1ii.webp",
          "/produts/women/kurtas/kurta1iii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/kurtas/kurta2.webp",
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
          "/produts/women/dress/dress1.webp",
          "/produts/women/dress/dress1i.webp",
          "/produts/women/dress/dress1ii.webp",
          "/produts/women/dress/dress1iii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/dress/dress2.webp",
          "/produts/women/dress/dress2i.webp",
          "/produts/women/dress/dress2ii.webp",
          "/produts/women/dress/dress2iii.webp",
          "/produts/women/dress/dress2iv.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/dress/dress1.webp",
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
          
          "/produts/women/dress/dress4i.webp",
          "/produts/women/dress/dress4ii.webp",
          "/produts/women/dress/dress4iii.webp",
          "/produts/women/dress/dress4iv.webp",
          "/produts/women/dress/dress4v.webp"
        ],
      },
      {
        name: "White",
        images: [
           "/produts/women/dress/dress3.webp",
          "/produts/women/dress/dress3i.webp",
          "/produts/women/dress/dress3ii.webp",
          "/produts/women/dress/dress3iii.webp",
          "/produts/women/dress/dress3iv.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/dress/dress4i.webp",
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
          "/produts/women/co-ord-set/co-ords1.jpg",
          "/produts/women/co-ord-set/co-ords1i.jpg",
          "/produts/women/co-ord-set/co-ords1ii.jpg",
          "/produts/women/co-ord-set/co-ords1iii.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/co-ord-set/co-ords2.webp",
          "/produts/women/co-ord-set/co-ords2i.webp",
          "/produts/women/co-ord-set/co-ords2ii.webp",
          "/produts/women/co-ord-set/co-ords2ii.webp"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/co-ord-set/co-ords1.jpg",
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
          "/produts/women/co-ord-set/co-ords2.webp",
          "/produts/women/co-ord-set/co-ords2i.webp",
          "/produts/women/co-ord-set/co-ords2ii.webp",
          "/produts/women/co-ord-set/co-ords2ii.webp"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/women/co-ord-set/co-ords1.jpg",
          "/produts/women/co-ord-set/co-ords1i.jpg",
          "/produts/women/co-ord-set/co-ords1ii.jpg",
          "/produts/women/co-ord-set/co-ords1iii.jpg"
        ],
      },
    ],
    sizes: ["S", "M", "L", "XL"],
    image:
      "/produts/women/co-ord-set/co-ords2.webp",
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
          "/produts/accessories/caps/caps4.jpg",
          "/produts/accessories/caps/caps4i.jpg",
          "/produts/accessories/caps/caps4ii.jpg",
          "/produts/accessories/caps/caps4iii.webp",
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/caps/caps3.webp",
          "/produts/accessories/caps/cap3i.webp",
          "/produts/accessories/caps/caps3ii.webp",
          "/produts/accessories/caps/caps3iii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "/produts/accessories/caps/caps4.jpg",
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
          "/produts/accessories/caps/caps1i.webp",
          "/produts/accessories/caps/caps1ii.webp",
          "/produts/accessories/caps/caps.webp",
        ],
      },
      {
        name: "White",
        images: [
         "/produts/accessories/caps/caps2.jpg",
          "/produts/accessories/caps/caps2i.jpg",
          "/produts/accessories/caps/caps2ii.jpg",
         
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "/produts/accessories/caps/caps.webp",
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
          "/produts/accessories/backpack/backpack2i.webp",
          "/produts/accessories/backpack/backpack2.webp",
          "/produts/accessories/backpack/backpack2ii.webp",
         
        ],
      },
      {
        name: "White",
        images: [
            "/produts/accessories/backpack/backpack1.webp",
          "/produts/accessories/backpack/backpack1i.jpg",
          "/produts/accessories/backpack/backpack1ii.jpg",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
      "/produts/accessories/backpack/backpack2i.webp",
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
           "/produts/accessories/backpack/backpack3.jpg",
          "/produts/accessories/backpack/backpack3ii.jpg",
          "/produts/accessories/backpack/backpack3iii.jpg",
          "/produts/accessories/backpack/backpack3iv.jpg"
        ],
      },
      {
        name: "White",
        images: [
          "/produts/accessories/backpack/backpack2.webp",
          "/produts/accessories/backpack/backpack2i.webp",
          "/produts/accessories/backpack/backpack2ii.webp",
        ],
      },
    ],
    sizes: ["Free Size"],
    image:
       "/produts/accessories/backpack/backpack3.jpg",
  },

  // clogs
 {
  id: 65,
  name: "Men Classic Casual Clogs",
  brand: "Bewakoof",
  description:
    "Comfortable classic clogs designed for everyday casual wear with a lightweight and relaxed fit.",
  category: "accessories",
  subCategory: "clogs",

  price: 799,
  originalPrice: 1599,
  discount: 50,

  rating: 4.5,
  reviews: 76,

  material: "EVA",

  colours: [
    {
      name: "Blue",
      images: [
        "/produts/accessories/clogs/clogs1.webp",
        "/produts/accessories/clogs/clogs1i.webp",
        "/produts/accessories/clogs/clogs1ii.webp",
        "/produts/accessories/clogs/clogs1iii.webp"
      ],
    },

    {
      name: "White",
      images: [
        "/produts/accessories/clogs/clogs2.jpg",
        "/produts/accessories/clogs/clogs2i.jpg",
        "/produts/accessories/clogs/clogs2ii.jpg",
        "/produts/accessories/clogs/clogs2iii.jpg"
      ],
    },
  ],

  sizes: ["6", "7", "8", "9", "10"],

  image:
    "/produts/accessories/clogs/clogs1.webp",
},

{
  id: 66,
  name: "Men Everyday Comfort Clogs",
  brand: "Bewakoof",
  description:
    "Lightweight everyday clogs with a comfortable design, perfect for casual outings and daily wear.",
  category: "accessories",
  subCategory: "clogs",

  price: 749,
  originalPrice: 1499,
  discount: 50,

  rating: 4.4,
  reviews: 64,

  material: "EVA",

  colours: [
    {
      name: "Black",
      images: [
        "/produts/accessories/clogs/clogs4.jpg",
        "/produts/accessories/clogs/clogs4i.jpg",
        "/produts/accessories/clogs/clogs4ii.jpg",
        "/produts/accessories/clogs/clogs4iii.jpg",
        "/produts/accessories/clogs/clogs4iv.jpg"
        
      ],
    },

    {
      name: "Grey",
      images: [
        "/produts/accessories/clogs/clogs3.jpg",
        "/produts/accessories/clogs/clogs3i.jpg",
        "/produts/accessories/clogs/clogs3ii.jpg",
        "/produts/accessories/clogs/clogs3iii.jpg",
        "/produts/accessories/clogs/clogs3iv.jpg"
      ],
    },
  ],

  sizes: ["6", "7", "8", "9", "10"],

  image:
    "/produts/accessories/clogs/clogs4.jpg",
},

 
];
     




export default products;