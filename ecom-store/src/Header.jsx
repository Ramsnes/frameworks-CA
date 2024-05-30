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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Nav />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "white", textAlign: "end" }}
          >
            eCom store
          </Typography>
        </div>
      </Box>
    </header>
  );
}

export default Header;
