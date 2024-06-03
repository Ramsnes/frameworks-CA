// ProductInfo.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DiscountLogic from "./DiscountLogic";
import { Grid } from "@mui/material";
import { useCartContext } from "./CartContext";
import { Rating } from "@mui/material";

export function ProductInfo(props) {
  const { addProduct } = useCartContext();

  const data = props.product;

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card
          sx={{
            maxWidth: 600,
            margin: "auto",
            mt: 4,
            border: "1px solid black",
          }}
        >
          <CardMedia
            component="img"
            sx={{ height: 300 }}
            image={data.image.url}
            title={data.image.alt || data.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body1">{data.description}</Typography>
            {data.discountedPrice && (
              <DiscountLogic
                price={data.price}
                discountedPrice={data.discountedPrice}
              />
            )}

            {/* Add product btn */}
            <Button
              onClick={() => addProduct(data)}
              variant="contained"
              style={{ marginRight: 10, marginTop: 20 }}
            >
              Add to cart
            </Button>

            <Typography variant="h6" component="div" sx={{ mt: 3 }}>
              Recent reviews:
            </Typography>
            {/* conditional reviews */}
            {data.reviews && data.reviews.length > 0 ? (
              data.reviews.map((review, index) => (
                <Card key={index} sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle1">
                      User: {review.username}
                    </Typography>
                    <Typography variant="body2" color2 color="text.secondary">
                      User review: {review.description}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      component="legend"
                      style={{ marginTop: 5 }}
                    >
                      Users product rating: {review.rating}
                    </Typography>
                    <Rating name="read-only" value={review.rating} disabled />
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary">
                No reviews available.
              </Typography>
            )}

            {/* conditional rating */}
            {data.rating > 0 ? (
              <div>
                <Typography
                  style={{ display: "flex", flexDirection: "column" }}
                  variant="body2"
                  sx={{ mb: 2 }}
                >
                  Overall product rating: {data.rating}
                  <Rating name="read-only" value={data.rating} disabled />
                </Typography>
              </div>
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                No rating given
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
