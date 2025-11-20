export interface Category {
  name: string;
  subCategories: string[];
  icon: string;
}

// Categories and subcategories from your flyer
export const categories: Category[] = [
  {
    name: "Token of Love",
    subCategories: [
      "Wooden/MDF",
      "Acrylic",
      "Customized",
      "UV Print/Laser Engrave Plaque",
    ],
    icon: "💝",
  },
  {
    name: "2D/3D Board",
    subCategories: [
      "CNC Cutout ACP 2D Board",
      "Acrylic 3D Letter",
      "SS (Golden/Silver) Mirror Letter",
      "PVC Profile Letter",
    ],
    icon: "🖼️",
  },
  {
    name: "Image",
    subCategories: [
      "Neon Light",
      "Light Photo Frame",
      "Product Display Frame",
      "Interior/Exterior Sinage",
    ],
    icon: "🖼️",
  },
  {
    name: "Promotional/Presents",
    subCategories: [
      "Corporate Promotionals",
      "Festival Gifts",
      "Occasionals Gifts",
      "UV Print/Laser Engrave Plaque",
    ],
    icon: "🎁",
  },
  {
    name: "Crafting/Carving",
    subCategories: [
      "Wooden",
      "Granite/Marble/Shilalekh/Tamapatra",
      "Aankhi Jhyal/Jali Butta",
      "Cylinder Carving",
    ],
    icon: "⚒️",
  },
  {
    name: "Printing & Many More...",
    subCategories: [
      "UV Printing",
      "Laser Printing/Marking",
      "Febric/Fiber Print",
      "Digital/offset Print",
    ],
    icon: "🖨️",
  },
];