interface NicheCategoryProps {
    name: string;
    subcategories: string[];
}

const niche_categories: NicheCategoryProps[] = [
    {
        name: "Consumer Electronics",
        subcategories: ["Smartphones", "Computers", "Tablets", "Accessories"]
    },
    {
        name: "Home ,Furniture & Living",
        subcategories: ["Appliances", "Furniture", "Home Decor", "Kitchenware"]
    },
    {
        name: "Beauty & Wellness",
        subcategories: ["Skincare", "Makeup", "Health Products", "Wellness Devices"]
    },
    {
        name: "Apparel & Accessories",
        subcategories: ["Clothing", "Footwear", "Jewelry", "Accessories"]
    },
    {
        name: "DIY ,Tool & Outdoors",
        subcategories: ["Tools", "Garden Equipment", "Outdoor Furniture"]
    },
    {
        name: "Children's Products",
        subcategories: ["Toys", "Baby Apparel", "Childcare Essentials"]
    },
    {
        name: "Automotive & Motorcycle",
        subcategories: ["Car Parts", "Motorcycle Gear", "Vehicle Care"]
    },
    {
        name: "Pet Care & Supplies",
        subcategories: ["Pet Food", "Pet Accessories", "Animal Health"]
    },
    {
        name: "Major Appliances",
        subcategories: ["Refrigerators", "Washers", "Dryers", "Ovens", "Dishwashers"]
    },
    {
        name: "Digital Products",
        subcategories: ["E-books", "E-commerce Training", "Web Development", "Marketing Courses"]
    },
    {
        name: "Sports & Fitness Kits",
        subcategories: ["Exercise Gear", "Sports Equipment", "Outdoor Recreation"]
    },
    {
        name: "Gift Cards & More",
        subcategories: ["Gifts for Moms", "Baby Gifts", "General Gift Ideas"]
    }
];

export default niche_categories;
