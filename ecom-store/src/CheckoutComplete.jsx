// CheckoutComplete.jsx
import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function CheckoutComplete() {
  return (
    <Grid container justifyContent="center" style={{ marginTop: "10vh" }}>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Thank you for your purchase!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your order has been successfully placed.
        </Typography>
        <Link to={`/`}>Back to list of products</Link>
      </Grid>
    </Grid>
  );
}

export default CheckoutComplete;
