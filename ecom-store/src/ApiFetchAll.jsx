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
import Grid from "@mui/material/Grid";

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
            <Card
              key={product.id}
              sx={{
                maxWidth: 345,
                minWidth: 245,
                marginBottom: 2,
              }}
            >
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
                      Price: {product.discountedPrice}
                      {/* {product.description} */}
                      {/* Rating: {product.rating} */}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FetchAll;
