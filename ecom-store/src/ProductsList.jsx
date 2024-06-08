// ProductList.jsx.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Rating } from "@mui/material";
import DiscountLogic from "./DiscountLogic";
import { Helmet, HelmetProvider } from "react-helmet-async";

function filterProducts(product, search) {
  const query = search.toLowerCase();
  // Check if the query matches the title or description
  if (
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  ) {
    return true;
  }

  // Checks if the query matches any tag
  if (product.tags.some((tag) => tag.toLowerCase().includes(query))) {
    return true;
  }

  // Checks if the query matches any review description
  if (
    product.reviews.some((review) =>
      review.description.toLowerCase().includes(query)
    )
  ) {
    return true;
  }

  return false;
}

export function ProductsList(props) {
  const [search, setSearch] = useState("");

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            {search ? `Search results for "${search}"` : "Product List"}
          </title>
        </Helmet>
      </HelmetProvider>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <TextField
          placeholder="Search product, tag or review description"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <Grid container spacing={6} justifyContent="center">
          {props.products
            .filter((product) => filterProducts(product, search))
            .map((product) => (
              <Grid
                key={product.id}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link
                  to={`./Product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    key={product.id}
                    sx={{
                      maxWidth: 345,
                      minWidth: 290,
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        sx={{ height: 240 }}
                        image={product.image.url}
                        title={product.image.alt || product.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>

                        {/* Price and discount percentage  */}
                        <DiscountLogic
                          price={product.price}
                          discountedPrice={product.discountedPrice}
                        />

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
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
}
