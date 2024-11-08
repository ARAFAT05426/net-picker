interface niche_categoriesProps {
    name: string;
    subcategories: string[];
}

const niche_categories: niche_categoriesProps[] = [
    {
        name: "Electronics",
        subcategories: ["Smartphones", "Computers", "Tablets", "Electronic Accessories"]
    },
    {
        name: "Home & Kitchen",
        subcategories: ["Small Appliances", "Large Appliances", "Decor", "Furniture", "Kitchen Utensils"]
    },
    {
        name: "Health & Beauty",
        subcategories: ["Skincare", "Makeup", "Wellness Products", "Health Equipment"]
    },
    {
        name: "Fashion & Accessories",
        subcategories: ["Clothing", "Shoes", "Jewelry", "Fashion Accessories"]
    },
    {
        name: "DIY & Gardening",
        subcategories: ["Tools", "Gardening Equipment", "Outdoor Furniture"]
    },
    {
        name: "Baby & Kids",
        subcategories: ["Toys", "Baby Clothing", "Childcare Products"]
    },
    {
        name: "Auto-Moto",
        subcategories: ["Auto Parts", "Motorcycle Accessories", "Car Care"]
    },
    {
        name: "Pet Supplies",
        subcategories: ["Pet Food", "Accessories", "Animal Care"]
    },
    {
        name: "Large Appliances",
        subcategories: ["Refrigerators", "Washing Machines", "Dryers", "Ovens", "Dishwashers"]
    },
    {
        name: "Digital Products & Training",
        subcategories: ["E-books", "E-commerce Training", "WordPress Development", "Digital Marketing"]
    },
    {
        name: "Sports & Leisure",
        subcategories: ["Sports Equipment", "Fitness Products", "Outdoor Activities"]
    },
    {
        name: "Mom & Gift Ideas",
        subcategories: ["Gifts for Moms", "Baby Items", "General Gift Ideas"]
    },
    {
        name: "Promotional Offers",
        subcategories: ["Selection of Discounts"]
    }
];

export default niche_categories;
