import { FC } from "react";
import Product from "../cards/Product";
import product_props from "../../types/product_props";

interface ProductsGridProps {
  products: product_props[] | undefined;
}

const ProductsGrid: FC<ProductsGridProps> = ({ products = [] }) => (
  <div className="w-full">
    <div className="px-1.5 py-3.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {(products?.length ?? 0) > 0 ? (
        products.map((product, i) => <Product key={i} product={product} />)
      ) : (
        <p className="text-center col-span-full text-gray-500">
          No products found for this category.
        </p>
      )}
    </div>
  </div>
);

export default ProductsGrid;
