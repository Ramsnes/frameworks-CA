// ApiProducts.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";
import IsError from "./IsError";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Rating } from "@mui/material";

const url = "https://v2.api.noroff.dev/online-shop";

function Products() {
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
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid
          key={product.id}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <CardActionArea>
            <Link
              to={`./Product/${product.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={product.id}
                sx={{
                  maxWidth: 345,
                  minWidth: 290,
                  marginBottom: 2,
                }}
              >
                <CardMedia
                  sx={{ height: 240 }}
                  image={product.image.url}
                  title={product.image.alt || product.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.discountedPrice}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="read-only"
                      value={product.rating}
                      disabled
                      style={{ marginTop: 5 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
