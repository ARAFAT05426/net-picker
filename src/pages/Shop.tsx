import { useState } from "react";
import axios_common from "../utils/axios_common";
import { useQuery } from "@tanstack/react-query";
import product_props from "../types/product_props";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../components/common/PageTitle";
import BarLoader from "../components/common/BarLoader";
import FilterWidget from "../components/shop_page/FilterWidget";
import ProductsGrid from "../components/shop_page/ProductsGrid";
import ProductsList from "../components/shop_page/ProductsList";
import ProductsSortOptions from "../components/shop_page/ProductsSortOptions";

const Shop = () => {
    const [isGridView, setIsGridView] = useState(true);
    const toggleView = () => setIsGridView((prev) => !prev);

    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("search") || "";

    // Fetch products data in the parent component
    const { data: products, isLoading, error } = useQuery<product_props[]>({
        queryKey: ["products", searchTerm],
        queryFn: async () => {
            const response = await axios_common.get(`/products?search=${searchTerm}&limit=6`);
            return response.data.products;
        },
    });

    return (
        <>
            <PageTitle title="Shop" />
            <section className="container flex flex-col md:flex-row gap-x-2.5">
                <FilterWidget />
                <div className="w-full">
                    <ProductsSortOptions toggleView={toggleView} isGridView={isGridView} />
                    {isLoading ? (
                        <div className="min-h-80 w-full flex items-center justify-center"><BarLoader /></div>
                    ) : error ? (
                        <div className="text-center text-red-500">Failed to load products.</div>
                    ) : isGridView ? (
                        <ProductsGrid products={products} />
                    ) : (
                        <ProductsList products={products} />
                    )}
                </div>
            </section>
        </>
    );
};

export default Shop;
