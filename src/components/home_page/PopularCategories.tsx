import { useEffect, useState } from "react";
import axios_common from "../../utils/axios_common";
import Product from "../cards/Product";
import BarLoader from "../common/BarLoader";
import product_props from "../../types/product_props";

const PopularCategories = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [categoryLoading, setCategoryLoading] = useState<boolean>(true);
    const [productLoading, setProductLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<product_props[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("groceries");

    // Fetches the list of categories
    const fetchCategories = async () => {
        setCategoryLoading(true);
        try {
            const response = await axios_common.get<string[]>('/category-list');
            setCategories(response.data || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching categories:", err);
            setError("Failed to fetch categories. Please try again.");
        } finally {
            setCategoryLoading(false);
        }
    };

    // Fetches products for the selected category
    const fetchCategoryProducts = async (category: string) => {
        setProductLoading(true);
        try {
            const response = await axios_common.get<{ products: product_props[] }>(`/category/${category}?limit=8`);
            setProducts(response.data.products || []);
            setError(null);
        } catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to fetch products for this category. Please try again.");
        } finally {
            setProductLoading(false);
        }
    };

    // Handles the category button click
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        fetchCategoryProducts(category);
    };

    useEffect(() => {
        fetchCategories();
        fetchCategoryProducts(selectedCategory);
    }, [selectedCategory]);

    return (
        <section className="container py-14">
            <h2 className="text-2xl font-bold mb-5">Popular Categories</h2>

            {categoryLoading ? (
                <div className="text-center"><BarLoader /></div>
            ) : error ? (
                <div className="text-center text-red-500">{error}</div>
            ) : (
                <div className="flex items-center gap-x-3.5 mb-5">
                    {categories.slice(0, 10).map((category, i) => (
                        <button
                            key={i}
                            onClick={() => handleCategoryClick(category)}
                            className={`uppercase text-sm tracking-widest font-semibold  rounded transition-all
                                ${selectedCategory === category ? "underline" : ""}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {productLoading ? (
                    <div className="col-span-full text-center"><BarLoader className="mx-auto" /></div>
                ) : products.length > 0 ? (
                    products.map((product, i) => (
                        <Product key={i} product={product} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        No products found for this category.
                    </p>
                )}
            </div>
        </section>
    );
};

export default PopularCategories;
