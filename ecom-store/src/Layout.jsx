// Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, CssBaseline } from "@mui/material";

function Layout() {
  return (
    // minHeight 100vh takes up the whole page, flex 1 fills the entire flex(page)
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ mt: 8, mb: 2, flex: 1 }}>
        {/* Outlet = represents all children in between Header and Footer */}
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;
