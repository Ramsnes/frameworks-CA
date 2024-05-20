import React, { useEffect, useState } from "react";
import IsLoading from "./IsLoading";
import IsError from "./IsError";

const url = "https://v2.api.noroff.dev/online-shop";

function FetchAll() {
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
        console.log(json);

        // Change state to incl data
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

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FetchAll;
