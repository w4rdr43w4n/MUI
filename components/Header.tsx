"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { headerTabs } from "../config/header";
import MUIButton from "./MUIButton";
import ThemeToggleButton from "./Theme/ThemeToggleButton";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar variant="HeaderToolBar">
        <Typography
          variant="HeaderTypography"
          sx={{ flexGrow: 1, whiteSpace: "nowrap" ,mr:'20px'}}
        >
          MUI Test
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {headerTabs.map((item, index) => (
                <MenuItem key={index} onClick={handleMenuClose}>
                  <MUIButton
                    variant="MenuButton"
                    href={item.href}
                    label={item.label}
                  />
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Grid wrap="nowrap" container gap="10px" spacing="2">
            {headerTabs.map((tab, index) => (
              <Grid key={index} xs={2}>
                <MUIButton
                  href={tab.href}
                  variant="HeaderButton"
                  label={tab.label}
                />
              </Grid>
            ))}
          </Grid>
        )}
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
