import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ClassIcon from "@mui/icons-material/Class";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Link } from "react-router-dom";
//all elements
import ELements from "./Elements";
import MainHome from "./Pages/Entry/MainHome";
import About from "./Pages/About/About";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  NavLink,
} from "react-router-dom";

//css
import "./App.css";

import Home from "./Pages/Home";
import Fulldetails from "./Pages/Fulldetails/Fulldetails";

const drawerWidth = 200;

//let navItems = ["S-BLOCK", "P-BLOCK", "D-BLOCK", "F-BLOCK", "CONTACT"];

let navItems = [
  { category: "HOME", link: "/" },
  { category: "ELEMENTS", link: "/elements" },
  // { category: "P-BLOCK", link: "#" },
  // { category: "D-BLOCK", link: "#" },
  // { category: "F-BLOCK", link: "#" },
];

let navItemsTwo = [{ category: "ABOUT", link: "/about" }];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const App = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Layout = () => {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ELEMENTS
            </Typography>{" "}
            {/* <Button color="inherit" style={{ color: "white" }}>
              Welcome to Elements App
            </Button> */}
            <Link to="/about">
              <div className="profile-container-top">
                <div className="profile-pic"></div>
              </div>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {navItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeIcon /> : <ClassIcon />}
                  </ListItemIcon>
                  <NavLink
                    style={{
                      listStyle: "none",
                      textDecoration: "none",
                      color: "purple",
                    }}
                    to={text.link}
                  >
                    <ListItemText primary={text.category} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {navItemsTwo.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{<AccountCircleIcon />}</ListItemIcon>
                  <NavLink
                    style={{
                      listStyle: "none",
                      textDecoration: "none",
                      color: "orange",
                    }}
                    to={text.link}
                  >
                    <ListItemText primary={text.category} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
          <Outlet />
        </Main>
      </Box>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainHome />,
        },
        {
          path: "/elements",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },

        {
          path: `/elements/:id/:name`,
          element: <Fulldetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
