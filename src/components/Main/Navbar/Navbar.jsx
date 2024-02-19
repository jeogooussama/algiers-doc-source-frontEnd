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
import logo from "../../../assets/logo.png";

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
        <Grid container alignItems="center">
          <Grid item xs={4} md={2}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", md: "none" }, color: "#FD5E53" }}
            >
              {isDrawerOpen ? <Close /> : <Menu />}
            </IconButton>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", md: "flex" } }}
              alignItems={"center"}
            >
              <img
                alt=""
                srcSet={logo}
                height={"60px"}
                style={{ marginRight: "10px" }}
              />
              AlgeriDocs
            </Typography>
          </Grid>
          <Grid item xs={4} md={2} sx={{ display: { xs: "flex", md: "none" } }}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "flex", md: "none" } }}
              alignItems={"center"}
            >
              <img
                alt=""
                srcSet={logo}
                style={{ display: "block" }}
                height={"60px"}
              />
              AlgeriDocs
            </Typography>
          </Grid>

          <Grid item xs={8} md={10}>
            <Grid
              container
              justifyContent="flex-end"
              spacing={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1 }}
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
                  sx={{ color: "#F9FCFB", gap: 1 }}
                >
                  <Search />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    واجهات
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/about-us`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1 }}
                >
                  <Info />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    معلومات عنا
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/contact-us`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1 }}
                >
                  <Mail />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    اتصل بنا
                  </Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem
              button
              component={Link}
              to={`/`}
              onClick={toggleDrawer}
              sx={{ gap: 1 }}
            >
              <Home sx={{ color: "#FD5E53" }} />
              <ListItemText primary={"الرئيسية"} />
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
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
