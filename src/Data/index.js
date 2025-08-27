import img01 from "../Assets/Products/img01.png";
import img02 from "../Assets/Products/img02.png";
import img03 from "../Assets/Products/img03.png";
import img04 from "../Assets/Products/img04.png";
import img05 from "../Assets/Products/img05.png";
import img06 from "../Assets/Products/img06.png";
import img07 from "../Assets/Products/img07.png";
import img08 from "../Assets/Products/img08.png";
import img09 from "../Assets/Products/img09.png";
import img10 from "../Assets/Products/img10.png";
import img11 from "../Assets/Products/img11.png";
import img12 from "../Assets/Products/img12.png";
import img13 from "../Assets/Products/img13.png";
import img14 from "../Assets/Products/img14.png";
import img15 from "../Assets/Products/img15.png";
import img16 from "../Assets/Products/img16.png";
import img17 from "../Assets/Products/img17.png";
import img18 from "../Assets/Products/img18.png";
import img19 from "../Assets/Products/img19.png";
import img20 from "../Assets/Products/img20.png";
import img21 from "../Assets/Products/img21.png";
import img22 from "../Assets/Products/img22.png";
import img23 from "../Assets/Products/img23.png";
import img24 from "../Assets/Products/img24.png";

import ins01 from "../Assets/Ins/ins01.png";
import ins02 from "../Assets/Ins/ins01.png";
import ins03 from "../Assets/Ins/ins01.png";
import ins04 from "../Assets/Ins/ins01.png";
import ins05 from "../Assets/Ins/ins01.png";
import ins06 from "../Assets/Ins/ins01.png";
import ins07 from "../Assets/Ins/ins01.png";
import ins08 from "../Assets/Ins/ins01.png";
import ins09 from "../Assets/Ins/ins01.png";
import ins10 from "../Assets/Ins/ins01.png";
import ins11 from "../Assets/Ins/ins01.png";
import ins12 from "../Assets/Ins/ins01.png";
import ins13 from "../Assets/Ins/ins01.png";
import ins14 from "../Assets/Ins/ins01.png";
import ins15 from "../Assets/Ins/ins01.png";
import ins16 from "../Assets/Ins/ins01.png";
import ins17 from "../Assets/Ins/ins01.png";
import ins18 from "../Assets/Ins/ins01.png";
import ins19 from "../Assets/Ins/ins01.png";
import ins20 from "../Assets/Ins/ins01.png";
import ins21 from "../Assets/Ins/ins01.png";
import ins22 from "../Assets/Ins/ins01.png";
import ins23 from "../Assets/Ins/ins01.png";
import ins24 from "../Assets/Ins/ins01.png";

export const products = [
  // 🌸 Flowers
  {
    id: "f-01",
    category: "Flowers",
    type: "Indoor",
    name: "Peace Lilly",
    image: img01,
    size: {
      small: { price: 10, label: "Small" },
      medium: { price: 18, label: "Medium" },
      large: { price: 25, label: "Large" },
    },
    description:
      "The Peace Lily is an elegant indoor plant with dark green leaves and stunning white flowers. It helps purify the air and adds freshness to your home.",
    careInstruction:
      "Keep the soil consistently moist but not soggy. Place in medium to low indirect light. Wipe leaves occasionally to prevent dust buildup.",
    instructionImage: ins01,
    stock: true,
    newArrival: true,
  },

  {
    id: "f-02",
    category: "Flowers",
    type: "Outdoor",
    name: "Rose",
    image: img02,
    size: {
      small: { price: 15, label: "Small" },
      medium: { price: 30, label: "Medium" },
      large: { price: 45, label: "Large" },
    },
    description:
      "Classic rose plant with colorful blooms and a sweet fragrance.",
    careInstruction:
      "Plant in sunny spots, water deeply, and prune regularly for healthy growth.",
    instructionImage: ins02,
    stock: true,
  },

  {
    id: "f-03",
    category: "Flowers",
    type: "Indoor",
    name: "Orchid",
    image: img03,
    size: {
      small: { price: 20, label: "Small" },
      medium: { price: 35, label: "Medium" },
      large: { price: 50, label: "Large" },
    },
    description: "Delicate orchids bring elegance with long-lasting flowers.",
    careInstruction:
      "Water once a week, keep in bright indirect light, avoid direct sunlight.",
    instructionImage: ins03,
    stock: true,
    newArrival: true,
  },

  {
    id: "f-04",
    category: "Flowers",
    type: "Outdoor",
    name: "Tulip",
    image: img04,
    size: {
      small: { price: 12, label: "Small" },
      medium: { price: 22, label: "Medium" },
      large: { price: 32, label: "Large" },
    },
    description: "Tulips are cheerful, seasonal flowers perfect for gardens.",
    careInstruction:
      "Plant bulbs in fall, provide well-drained soil and full sun.",
    instructionImage: ins04,
    stock: true,
  },

  {
    id: "f-05",
    category: "Flowers",
    type: "Indoor",
    name: "Jasmine",
    image: img05,
    size: {
      small: { price: 14, label: "Small" },
      medium: { price: 24, label: "Medium" },
      large: { price: 34, label: "Large" },
    },
    description:
      "Jasmine plants produce fragrant white flowers and climb beautifully.",
    careInstruction:
      "Needs bright light and regular watering. Support climbing stems.",
    instructionImage: ins05,
    stock: false,
  },

  {
    id: "f-06",
    category: "Flowers",
    type: "Outdoor",
    name: "Sunflower",
    image: img06,
    size: {
      small: { price: 8, label: "Small" },
      medium: { price: 15, label: "Medium" },
      large: { price: 22, label: "Large" },
    },
    description:
      "Tall outdoor flowers with bright yellow petals that follow the sun.",
    careInstruction:
      "Plant in direct sunlight, water regularly, and provide support for tall stems.",
    instructionImage: ins06,
    stock: false,
  },

  {
    id: "f-07",
    category: "Flowers",
    type: "Indoor",
    name: "Mari Gold",
    image: img07,
    size: {
      small: { price: 7, label: "Small" },
      medium: { price: 14, label: "Medium" },
      large: { price: 20, label: "Large" },
    },
    description:
      "Marigolds are vibrant, easy-to-grow plants with golden blooms.",
    careInstruction:
      "Provide full sun and moderate watering. Deadhead flowers to encourage more blooms.",
    instructionImage: ins07,
    stock: true,
  },

  {
    id: "f-08",
    category: "Flowers",
    type: "Outdoor",
    name: "Daisy",
    image: img08,
    size: {
      small: { price: 6, label: "Small" },
      medium: { price: 12, label: "Medium" },
      large: { price: 18, label: "Large" },
    },
    description: "Daisies are simple, cheerful flowers loved worldwide.",
    careInstruction:
      "Thrives in full sun with moderate watering. Trim old flowers to encourage growth.",
    instructionImage: ins08,
    stock: true,
  },

  // 🌱 Plants
  {
    id: "p-01",
    category: "Plants",
    type: "Indoor",
    name: "Snake Plant",
    image: img09,
    size: {
      small: { price: 12, label: "Small" },
      medium: { price: 20, label: "Medium" },
      large: { price: 35, label: "Large" },
    },
    description: "Low-maintenance indoor plant with air-purifying qualities.",
    careInstruction:
      "Let soil dry between watering. Place in indirect sunlight.",
    instructionImage: ins09,
    stock: true,
  },

  {
    id: "p-02",
    category: "Plants",
    type: "Outdoor",
    name: "Aloe Vera",
    image: img10,
    size: {
      small: { price: 10, label: "Small" },
      medium: { price: 18, label: "Medium" },
      large: { price: 28, label: "Large" },
    },
    description:
      "Succulent plant known for its medicinal gel used to soothe skin.",
    careInstruction:
      "Needs bright sunlight. Water sparingly, let soil dry out completely.",
    instructionImage: ins10,
    stock: true,
  },

  {
    id: "p-03",
    category: "Plants",
    type: "Indoor",
    name: "Money Plant",
    image: img11,
    size: {
      small: { price: 8, label: "Small" },
      medium: { price: 14, label: "Medium" },
      large: { price: 20, label: "Large" },
    },
    description: "Popular plant believed to bring luck and prosperity.",
    careInstruction:
      "Keep soil slightly moist. Thrives in indirect sunlight indoors.",
    instructionImage: ins11,
    stock: true,
  },

  {
    id: "p-04",
    category: "Plants",
    type: "Outdoor",
    name: "Areca Palm",
    image: img12,
    size: {
      small: { price: 20, label: "Small" },
      medium: { price: 40, label: "Medium" },
      large: { price: 60, label: "Large" },
    },
    description:
      "Tall palm with feathery leaves, perfect for indoors and outdoors.",
    careInstruction:
      "Water regularly but don’t let roots sit in water. Needs bright indirect light..",
    instructionImage: ins12,
    stock: true,
  },

  {
    id: "p-05",
    category: "Plants",
    type: "Indoor",
    name: "Pothos",
    image: img13,
    size: {
      small: { price: 9, label: "Small" },
      medium: { price: 16, label: "Medium" },
      large: { price: 25, label: "Large" },
    },
    description:
      "Trailing indoor plant, very easy to grow and propagate in water or soil.",
    careInstruction: "Water when top soil feels dry. Tolerates low light.",
    instructionImage: ins13,
    stock: false,
    newArrival: true,
  },

  {
    id: "p-06",
    category: "Plants",
    type: "Outdoor",
    name: "Bamboo Palm",
    image: img14,
    size: {
      small: { price: 18, label: "Small" },
      medium: { price: 30, label: "Medium" },
      large: { price: 50, label: "Large" },
    },
    description:
      "Lush outdoor palm that can also adapt indoors with indirect sunlight.",
    careInstruction:
      "Water regularly and provide filtered sunlight. Mist leaves for humidity.",
    instructionImage: ins14,
    stock: false,
  },

  {
    id: "p-07",
    category: "Plants",
    type: "Indoor",
    name: "ZZ Plant",
    image: img15,
    size: {
      small: { price: 15, label: "Small" },
      medium: { price: 28, label: "Medium" },
      large: { price: 25, label: "Large" },
    },
    description:
      "ZZ plant is nearly indestructible and thrives in neglect conditions.",
    careInstruction:
      "Water lightly and occasionally. Keep in indirect sunlight.",
    instructionImage: ins15,
    stock: true,
  },

  {
    id: "p-08",
    category: "Plants",
    type: "Outdoor",
    name: "Ficus",
    image: img16,
    size: {
      small: { price: 22, label: "Small" },
      medium: { price: 38, label: "Medium" },
      large: { price: 55, label: "Large" },
    },
    description:
      "Ficus trees are ornamental and perfect for outdoor landscaping.",
    careInstruction:
      "Provide bright light and regular watering. Prune to maintain shape.",
    instructionImage: ins16,
    stock: true,
    newArrival: true,
  },

  // 🌿 Fertilizers

  {
    id: "fer-01",
    category: "Fertilizer",
    type: "Indoor",
    name: "Organic Compost",
    image: img17,
    size: {
      small: { price: 8, label: "1 KG" },
      medium: { price: 15, label: "2 KG" },
      large: { price: 25, label: "3 KG" },
    },
    description:
      "Rich organic compost to improve soil fertility and plant health.",
    careInstruction:
      "Mix into soil or spread as top layer mulch. Water after application.",
    instructionImage: ins17,
    stock: true,
  },

  {
    id: "fer-02",
    category: "Fertilizer",
    type: "Outdoor",
    name: "Bone Meal",
    image: img18,
    size: {
      small: { price: 6, label: "1 KG" },
      medium: { price: 12, label: "2 KG" },
      large: { price: 20, label: "3 KG" },
    },
    description: "Phosphorus-rich fertilizer for root and flower development.",
    careInstruction:
      "Add to planting holes or top-dress around plants, mix into soil.",
    instructionImage: ins18,
    stock: true,
  },

  {
    id: "fer-03",
    category: "Fertilizer",
    type: "Indoor",
    name: "Seaweed Extract",
    image: img19,
    size: {
      small: { price: 9, label: "1 KG" },
      medium: { price: 16, label: "2 KG" },
      large: { price: 28, label: "3 KG" },
    },
    description:
      "Liquid seaweed extract boosts plant immunity and root growth.",
    careInstruction: "Dilute with water and apply weekly to roots or foliage.",
    instructionImage: ins19,
    stock: true,
  },

  {
    id: "fer-04",
    category: "Fertilizer",
    type: "Outdoor",
    name: "NPK Granules",
    image: img20,
    size: {
      small: { price: 5, label: "1 KG" },
      medium: { price: 10, label: "2 KG" },
      large: { price: 18, label: "3 KG" },
    },
    description:
      "Balanced fertilizer with nitrogen, phosphorus, and potassium.",
    careInstruction:
      "Sprinkle around roots, water immediately to release nutrients.",
    instructionImage: ins20,
    stock: true,
  },

  {
    id: "fer-05",
    category: "Fertilizer",
    type: "Indoor",
    name: "Liquid Plant Food",
    image: img21,
    size: {
      small: { price: 7, label: "1 KG" },
      medium: { price: 13, label: "2 KG" },
      large: { price: 22, label: "3 KG" },
    },
    description: "Easy-to-use liquid fertilizer for quick nutrient absorption.",
    careInstruction:
      "Mix with water and apply every 2 weeks during growing season.",
    instructionImage: ins21,
    stock: false,
  },

  {
    id: "fer-06",
    category: "Fertilizer",
    type: "Outdoor",
    name: "Vermi Compost",
    image: img22,
    size: {
      small: { price: 4, label: "1 KG" },
      medium: { price: 9, label: "2 KG" },
      large: { price: 15, label: "3 KG" },
    },
    description: "Nutrient-rich organic compost made with earthworms.",
    careInstruction: "Use as top dressing or mix into potting soil.",
    instructionImage: ins22,
    stock: false,
  },

  {
    id: "fer-07",
    category: "Fertilizer",
    type: "Indoor",
    name: "Cocopeat",
    image: img23,
    size: {
      small: { price: 3, label: "1 KG" },
      medium: { price: 7, label: "2 KG" },
      large: { price: 12, label: "3 KG" },
    },
    description: "Soil conditioner made from coconut husks, improves aeration.",
    careInstruction:
      "Mix with soil before planting to retain moisture and nutrients.",
    instructionImage: ins23,
    stock: true,
  },

  {
    id: "fer-08",
    category: "Fertilizer",
    type: "Outdoor",
    name: "Urea",
    image: img24,
    size: {
      small: { price: 6, label: "1 KG" },
      medium: { price: 11, label: "2 KG" },
      large: { price: 19, label: "3 KG" },
    },
    description: "High-nitrogen fertilizer for fast vegetative growth.",
    careInstruction:
      "Apply in small doses and water immediately to avoid burns.",
    instructionImage: ins24,
    stock: true,
  },
];
