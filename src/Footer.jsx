// Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">© 2024 eCom store</Typography>
    </Box>
  );
}

export default Footer;
