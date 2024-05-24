// Products.jsx
import React from "react";
import FetchAll from "./ApiFetchAll";
import { Grid } from "@mui/material";

function Products() {
  return (
    <Grid container spacing={2}>
      <FetchAll />
    </Grid>
  );
}

export default Products;
