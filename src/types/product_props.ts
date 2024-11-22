interface product_props {
    id: string | number;
    name: string;
    rating: number;
    image_url: string;
    price: number;
    brand?: string;
    description?: string;
}

export default product_props;