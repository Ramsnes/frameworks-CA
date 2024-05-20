// Product.jsx

import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  let params = useParams();
  // Log id of product
  console.log(params);

  return <div>Individual product page: {params.id}</div>;
}

export default Product;
