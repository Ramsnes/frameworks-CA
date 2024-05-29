// Cart.jsx
import React from "react";
import { useCartContext } from "./CartContext";
import { Card, CardMedia, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  // Hook from CartContext.jsx to fetch and remove products
  const { products, removeProduct } = useCartContext();
  // Calculate total sum
  const totalSum = products.reduce(
    (acc, item) => acc + item.discountedPrice,
    0
  );
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout-complete");
  };

  return (
    <Grid container justifyContent="center" spacing={4}>
      {products.length === 0 ? (
        <Grid item xs={12}>
          <div
            style={{
              marginTop: "10vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              style={{ marginBottom: 20 }}
            >
              Your cart is empty
            </Typography>
            <Link to={`/`}>Back to list of products</Link>
          </div>
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
            <div
              style={{
                padding: "0 16px 16px",
              }}
            >
              <Button
                variant="contained"
                onClick={() => removeProduct(item.id)}
                style={{ marginBottom: 10 }}
              >
                Remove
              </Button>
            </div>
          </Card>
        ))
      )}
      <Grid item justifyContent="center" xs={12}>
        <div
          style={{
            padding: "0 16px 16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h6" component="div">
            {/* formats to digits after decimal point */}
            Total: ${totalSum.toFixed(2)}
          </Typography>
        </div>{" "}
      </Grid>
    </Grid>
  );
}

export default Cart;

{
  /* <div>
  <Button
    variant="contained"
    sx={{ mt: 2, width: "auto" }}
    onClick={handleCheckout}
  >
    Checkout
  </Button>
</div>; */
}
