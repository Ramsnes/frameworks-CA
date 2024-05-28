// Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

function Layout() {
  return (
    <div>
      <CssBaseline />

      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
