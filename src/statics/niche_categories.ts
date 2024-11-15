interface niche_category_props {
    name: string;
    subcategories?: string[];
}

const niche_categories: niche_category_props[] = [
    {
        name: "niche.category.consumer_electronics",  // Translation key for category name
        subcategories: [
            "niche.subcategory.smartphones",  // Translation key for subcategory
            "niche.subcategory.computers",
            "niche.subcategory.tablets",
            "niche.subcategory.accessories"
        ]
    },
    {
        name: "niche.category.home_furniture_living",
        subcategories: [
            "niche.subcategory.appliances",
            "niche.subcategory.furniture",
            "niche.subcategory.home_decor",
            "niche.subcategory.kitchenware"
        ]
    },
    {
        name: "niche.category.beauty_wellness",
        subcategories: [
            "niche.subcategory.skincare",
            "niche.subcategory.makeup",
            "niche.subcategory.health_products",
            "niche.subcategory.wellness_devices"
        ]
    },
    {
        name: "niche.category.apparel_accessories",
        subcategories: [
            "niche.subcategory.clothing",
            "niche.subcategory.footwear",
            "niche.subcategory.jewelry",
            "niche.subcategory.accessories"
        ]
    },
    {
        name: "niche.category.diy_tools_outdoors",
        subcategories: [
            "niche.subcategory.tools",
            "niche.subcategory.garden_equipment",
            "niche.subcategory.outdoor_furniture"
        ]
    },
    {
        name: "niche.category.children_products",
        subcategories: [
            "niche.subcategory.toys",
            "niche.subcategory.baby_apparel",
            "niche.subcategory.childcare_essentials"
        ]
    },
    {
        name: "niche.category.automotive_motorcycle",
        subcategories: [
            "niche.subcategory.car_parts",
            "niche.subcategory.motorcycle_gear",
            "niche.subcategory.vehicle_care"
        ]
    },
    {
        name: "niche.category.pet_care_supplies",
        subcategories: [
            "niche.subcategory.pet_food",
            "niche.subcategory.pet_accessories",
            "niche.subcategory.animal_health"
        ]
    },
    {
        name: "niche.category.major_appliances",
        subcategories: [
            "niche.subcategory.refrigerators",
            "niche.subcategory.washers",
            "niche.subcategory.dryers",
            "niche.subcategory.ovens",
            "niche.subcategory.dishwashers"
        ]
    },
    {
        name: "niche.category.digital_products",
        subcategories: [
            "niche.subcategory.e_books",
            "niche.subcategory.e_commerce_training",
            "niche.subcategory.web_development",
            "niche.subcategory.marketing_courses"
        ]
    },
    {
        name: "niche.category.sports_fitness_kits",
        subcategories: [
            "niche.subcategory.exercise_gear",
            "niche.subcategory.sports_equipment",
            "niche.subcategory.outdoor_recreation"
        ]
    },
    {
        name: "niche.category.gift_cards_more",
        subcategories: [
            "niche.subcategory.gifts_for_moms",
            "niche.subcategory.baby_gifts",
            "niche.subcategory.general_gift_ideas"
        ]
    }
];

export default niche_categories;
