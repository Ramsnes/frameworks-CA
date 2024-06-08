// Cart.jsx
import React from "react";
import { useCartContext } from "./CartContext";
import { Card, CardMedia, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import DiscountLogic from "./DiscountLogic";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Cart() {
  // Hook from CartContext.jsx to fetch, reset and remove products
  const { products, removeProduct, resetCart } = useCartContext();

  const totalSum = products.reduce(
    (acc, product) => acc + product.discountedPrice * product.quantity,
    0
  );

  const navigate = useNavigate();
  const handleCheckout = () => {
    resetCart();
    navigate("/checkout-complete");
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{`Your Cart - ${products.length} items`}</title>
        </Helmet>
      </HelmetProvider>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        style={{ margin: 0, width: "100%" }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          {" "}
          <Typography variant="h5">Your cart</Typography>
        </Grid>
        {/* If the cart is empty:  */}
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
          // If the cart is *not* empty:
          products.map((product) => (
            <Card
              key={product.id}
              sx={{
                maxWidth: 345,
                minWidth: 245,
                minHeight: 420,
                marginBottom: 2,
                margin: "auto",
                mt: 4,
              }}
            >
              <CardMedia
                sx={{
                  height: 240,
                }}
                image={product.image.url}
                title={product.image.alt || product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <DiscountLogic
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
              </CardContent>
              <div
                style={{
                  padding: "0 16px 16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Quantity: {product.quantity}
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => removeProduct(product.id)}
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))
        )}
        {/* if product > 0, remove checkout-btn & total sum. 
            if not, don't render */}
        {products.length > 0 && (
          <>
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
                <Button
                  variant="contained"
                  sx={{ mt: 2, width: "auto" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
}

export default Cart;
