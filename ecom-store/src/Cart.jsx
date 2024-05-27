// Cart.jsx
import React from "react";
import { useCartContext } from "./CartContext";
import { Card, CardMedia, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Cart() {
  // Hook from CartContext.jsx to fetch and remove products
  const { products, removeProduct } = useCartContext();

  return (
    <Grid container justifyContent="center" spacing={4}>
      {products.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" component="div">
            Your cart is empty
          </Typography>
        </Grid>
      ) : (
        products.map((item) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 345,
              minWidth: 245,
              marginBottom: 2,
              margin: "auto",
              mt: 4,
            }}
          >
            <CardMedia
              sx={{
                height: 240,
              }}
              image={item.image.url}
              title={item.image.alt || item.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {item.discountedPrice}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
            </CardContent>
            <div style={{ padding: "0 16px 16px" }}>
              <Button
                variant="contained"
                onClick={() => removeProduct(item.id)}
              >
                Remove
              </Button>
            </div>
          </Card>
        ))
      )}
    </Grid>
  );
}

export default Cart;
