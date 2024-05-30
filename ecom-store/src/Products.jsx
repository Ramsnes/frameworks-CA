// Products.jsx
import { ProductsList } from "./ProductsList";
import React, { useEffect, useState } from "react";
import IsLoading from "./IsLoading";
import IsError from "./IsError";

const url = "https://v2.api.noroff.dev/online-shop";

export function Products() {
  const [products, setProducts] = useState([]);

  // State for holding loading/error state
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        // Fetch data
        const response = await fetch(url);
        const json = await response.json();

        // Change state to incl data
        // .data because API docs starts with data.[rest of arrays]
        setProducts(json.data);

        //Clear loading
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return <ProductsList products={products} />;
}
