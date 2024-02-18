// Navbar.jsx
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material/";
import { Link } from "react-router-dom";
import { Home, Search, Info, Mail, Menu, Close } from "@mui/icons-material";
import "./NavBar.css";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#21BF73", color: "#F9FCFB" }}
    >
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", md: "none" }, color: "#FD5E53" }}
            >
              {isDrawerOpen ? <Close /> : <Menu />}
            </IconButton>
          </Grid>
          <Grid item sx={{ display: { xs: "block", md: "block" } }}>
            <Typography variant="h6">AlgeriDocs</Typography>
          </Grid>
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <List>
                {/* Updated translation usage in the following lines */}
                <ListItem
                  button
                  component={Link}
                  to={`/home`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Home sx={{ color: "#FD5E53" }} />
                  الرئيسية{" "}
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/interfaces`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Search sx={{ color: "#FD5E53" }} />
                  <ListItemText primary={"واجهات"} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/about-us`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Info sx={{ color: "#FD5E53" }} />
                  <ListItemText primary={"معلومات عنا"} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/contact-us`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Mail sx={{ color: "#FD5E53" }} />
                  <ListItemText primary={"اتصل بنا"} />
                </ListItem>
              </List>
            </Drawer>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item gap={1}>
                <IconButton
                  component={Link}
                  to={`/home`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1, fontSize: "1.2rem" }}
                >
                  <Home />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    الرئيسية
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/interfaces`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1, fontSize: "1.2rem" }}
                >
                  <Search />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    واجهات{" "}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/about-us`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1, fontSize: "1.2rem" }}
                >
                  <Info />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    معلومات عنا{" "}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/contact-us`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1, fontSize: "1.2rem" }}
                >
                  <Mail />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    اتصل بنا{" "}
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
