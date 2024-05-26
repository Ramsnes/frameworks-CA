// Cart.jsx
import React from "react";
import { useCartContext } from "./CartContext";
import { Card, CardMedia, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Cart() {
  // Hook from CartContext.jsx to fetch and remove products
  const { products, removeProduct } = useCartContext();

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
          <CardMedia
            component="img"
            sx={{ height: 300 }}
            image={products.image.url}
            title={products.image.alt || products.title}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {products.title}
            </Typography>
            <Typography variant="body1">{products.description}</Typography>
          </CardContent>
          <div>
            <h2>My cart</h2>
            <p>List of added products:</p>
            {products.map((item) => (
              <div>
                <div key={item.id}>
                  <ul>
                    <li>{JSON.stringify(item)}</li>
                  </ul>
                </div>
                <button onClick={() => removeProduct(item.id)}>Remove</button>
              </div>
            ))}
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Cart;
