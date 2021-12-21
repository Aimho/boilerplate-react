import { Container } from "@mui/material";
import React from "react";
import Header from "../Header";

const Layout: React.FC = ({ children }) => (
  <React.Fragment>
    <Header />
    <Container>{children}</Container>
  </React.Fragment>
);

export default Layout;
