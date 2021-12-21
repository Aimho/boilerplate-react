import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

const routes = [
  { path: "/", label: "home" },
  { path: "/about", label: "about" },
];

const Header = () => {
  const navigate = useNavigate();

  const handleMovePage = (event) => {
    navigate(`${event.currentTarget.dataset.path}`);
  };

  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            LOGO
          </Typography>
          {routes.map((route) => (
            <Button
              key={route.label}
              data-path={route.path}
              onClick={handleMovePage}
              color="inherit"
            >
              {route.label}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
