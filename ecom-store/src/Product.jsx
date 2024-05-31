// Product.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IsLoading from "./IsLoading";
import IsError from "./IsError";
import { ProductInfo } from "./ProductInfo";

export function Product() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        // Change state to incl data
        // .data because API docs starts with data.[rest of arrays]
        setData(json.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !data) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError />;
  }

  return <ProductInfo product={data} />;
}
