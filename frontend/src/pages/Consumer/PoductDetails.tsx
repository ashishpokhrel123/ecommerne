import React from "react";
import ProductDetail from "../../components/Consumer/ProductDetails/ProductDetail";
import { useParams } from "react-router-dom";

function PoductDetails() {
  const { id } = useParams();

  return (
    <div>
      <ProductDetail productId={id || ""} />
    </div>
  );
}

export default PoductDetails;
