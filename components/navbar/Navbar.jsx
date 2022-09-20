import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import ActiveLink from "../activeLink/ActiveLink";
import { useStyles } from "./styles";
import styles from "./navbar.module.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  // const classes = useStyles();

  return (
    <Box style={{ display: "flex" }}>
      <AppBar className={styles.navbar}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Marcela Pérez Méndez
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <ActiveLink href={item.href} text={item.name} key={item.href} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
