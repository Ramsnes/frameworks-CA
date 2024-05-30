import React from "react";
import Nav from "./Nav";
import { Box, Typography } from "@mui/material";

function Header() {
  return (
    <header>
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          textAlign: "center",
          backgroundColor: "#000",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1, color: "white" }}
        >
          eCom store
        </Typography>
      </Box>
      <Nav />
    </header>
  );
}

export default Header;
