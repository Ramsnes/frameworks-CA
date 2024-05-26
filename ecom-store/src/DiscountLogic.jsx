// DiscountLogic.jsx
import React from "react";
import { Typography } from "@mui/material";

const DiscountLogic = ({ price, discountedPrice }) => {
  const discountPercentage =
    price && discountedPrice ? ((price - discountedPrice) / price) * 100 : 0;

  return (
    <div>
      <Typography variant="body1" color="text.secondary">
        Price: {discountedPrice}
      </Typography>

      {discountPercentage > 0 && (
        <Typography variant="body2" color="secondary">
          Discount: {discountPercentage.toFixed(1)}%
        </Typography>
      )}
    </div>
  );
};

export default DiscountLogic;
