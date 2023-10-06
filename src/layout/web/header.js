import { comman, primary, secondary } from "@/theme/palette";
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavButton } from "@/utils/styleCss";
import { shape } from "@/theme/borderRadius";
import { navItems } from "@/utils/constant";
import { MuiDrawer } from "@/components/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const drawer = (
    <>
      {navItems.map((item, id) => (
        <List key={id}>
          <ListItem disablePadding>
            <ListItemButton component={Link} href={item.href}>
              <ListItem sx={{ color: primary.main }}>{item.navIcon}</ListItem>
              <ListItemText
                sx={{ color: comman.main, marginRight: "25rem" }}
                primary={item.navText}
              />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
    </>
  );
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: secondary.main,
          width: "95%",
          marginLeft: "2.5%",
          marginRight: "2.5%",
          marginTop: "2%",
          borderRadius: shape.borderRadius,
          position: "fixed",
          height: { xs: "45px", sm: "55px" },
        }}
      >
        <Toolbar
          component={Stack}
          alignItems={"center"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          <Typography
            variant="h5"
            sx={{
              cursor: "pointer",
              color: primary.main,
              fontWeight: "600",
            }}
          >
            Trippy
          </Typography>
          <Box
            direction={"row"}
            spacing={4}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
              color: primary.main,
              fontWeight: "600",
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <NavButton key={item.id}>
                <Stack
                  component={Link}
                  href={item.href}
                  direction={"row"}
                  spacing={2}
                  sx={{
                    textDecoration: "none",
                    color: primary.main,
                  }}
                >
                  <Box>{item.navText}</Box>
                </Stack>
              </NavButton>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="end"
            aria-label="logo"
            sx={{ color: comman.black, display: { xs: "block", sm: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <MuiDrawer
            openDrawer={openDrawer}
            toogleDrawer={toggleDrawer}
            anchor={"bottom"}
            drawer={drawer}
          />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;