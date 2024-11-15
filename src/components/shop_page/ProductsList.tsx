import { FC } from "react";
import ProductBar from "../cards/ProductBar";
import product_props from "../../types/product_props";

interface ProductsListProps {
  products: product_props[] | undefined;
}

const ProductsList: FC<ProductsListProps> = ({ products = [] }) => (
  <div className="w-full">
    <div className="py-3.5 flex flex-col gap-3.5">
      {(products?.length ?? 0) > 0 ? (
        products.map((product, i) => <ProductBar key={i} product={product} />)
      ) : (
        <p className="text-center text-gray-500">No products found for this category.</p>
      )}
    </div>
  </div>
);

export default ProductsList;
