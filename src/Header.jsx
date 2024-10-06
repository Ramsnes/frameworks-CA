import React from "react";
import Nav from "./Nav";
import { Box } from "@mui/material";

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
        </div>
      </Box>
    </header>
  );
}

export default Header;
