import React from "react";
import RecommendedProductCard from "./RecommendedProductCard"; // adjust path if needed

const ProductGrid = ({ products }) => (
  <div className="row g-12">
    {products.map((prod, idx) => (
      <RecommendedProductCard prod={prod} key={idx} />
    ))}
  </div>
);

export default ProductGrid;
