// Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">eCom store @Copyright</Typography>
    </Box>
  );
}

export default Footer;
