import { FC, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios_common from "../../utils/axios_common";
import Product from "../cards/Product";
import BarLoader from "../common/BarLoader";
import product_props from "../../types/product_props";
import niche_categories from "../../statics/niche_categories";
import { useTranslation } from "react-i18next";
const fetchCategoryProducts = async (category: string) => {
    const response = await axios_common.get<{ products: product_props[] }>(`/products?category=${category}&limit=8`);
    return response.data.data;
};

const PopularCategories: FC = () => {

    const { t } = useTranslation()

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const { data: products = [], isLoading: productLoading, isError: productError, error: productErrorMsg, refetch } = useQuery({
        queryKey: ["popular-categories", selectedCategory],
        queryFn: () => fetchCategoryProducts(selectedCategory)
    });

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    useEffect(() => {
        if (selectedCategory) {
            refetch();
        }
    }, [selectedCategory, refetch]);

    return (
        <section className="container py-14">
            <h2 className="text-2xl font-bold mb-5">Popular Categories</h2>
            <div className="flex items-center gap-x-3.5 mb-5">
                {niche_categories?.slice(0, 5).map((niche_categorie, i) => (
                    <button
                        key={i}
                        onClick={() => handleCategoryClick(t(niche_categorie.name))}
                        className={`relative uppercase text-sm tracking-widest font-semibold rounded transition-all
                                ${selectedCategory === t(niche_categorie.name) ? "underline" : ""}`}
                    >
                        {t(niche_categorie.name)}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {productLoading ? (
                    <div className="col-span-full text-center">
                        <BarLoader className="mx-auto" />
                    </div>
                ) : productError ? (
                    <div className="col-span-full text-center text-red-500">
                        {productErrorMsg instanceof Error ? productErrorMsg.message : 'Failed to fetch products for this category.'}
                    </div>
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
