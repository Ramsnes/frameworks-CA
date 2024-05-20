// ApiFetchAll.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";
import IsError from "./IsError";
// Card imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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

  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} sx={{ maxWidth: 345, marginBottom: 2 }}>
          <CardActionArea>
            <Link
              to={`./Product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={product.image.url}
                title={product.image.alt || product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* {product.description} */}
                  {/* Rating: {product.rating} */}
                </Typography>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default FetchAll;
