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
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Info, Mail, Menu, Close } from "@mui/icons-material";
import translations from "./NavbarTranslations"; // Import translations
import "./NavBar.css";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2e7d32", color: "#fff" }}>
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              onClick={toggleDrawer}
              sx={{ display: { xs: "block", md: "none" }, color: "#ff5252" }}
            >
              {isDrawerOpen ? <Close /> : <Menu />}
            </IconButton>
          </Grid>
          <Grid item sx={{ display: { xs: "block", md: "block" } }}>
            <Typography variant="h6">{translations[currentLanguage].appTitle}</Typography>
          </Grid>
          <Grid item sx={{ display: { xs: "block", md: "none" } }}>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
              <List>
                {/* Updated translation usage in the following lines */}
                <ListItem
                  button
                  component={Link}
                  to={`/${currentLanguage}/home`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Home sx={{ color: "#ff5252" }} />
                  <ListItemText primary={translations[currentLanguage].home} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/${currentLanguage}/interfaces`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Search sx={{ color: "#ff5252" }} />
                  <ListItemText primary={translations[currentLanguage].interfaces} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/${currentLanguage}/about-us`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Info sx={{ color: "#ff5252" }} />
                  <ListItemText primary={translations[currentLanguage].aboutUs} />
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to={`/${currentLanguage}/contact-us`}
                  onClick={toggleDrawer}
                  sx={{ gap: 1 }}
                >
                  <Mail sx={{ color: "#ff5252" }} />
                  <ListItemText primary={translations[currentLanguage].contactUs} />
                </ListItem>
              </List>
            </Drawer>
          </Grid>
          <Grid item sx={{ display: { xs: "none", md: "block" } }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item gap={1}>
                <IconButton
                  component={Link}
                  to={`/${currentLanguage}/home`}
                  className="Button"
                  sx={{ color: "#fff", gap: 1 }}
                >
                  <Home />
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {translations[currentLanguage].home}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/${currentLanguage}/interfaces`}
                  className="Button"
                  sx={{ color: "#fff", gap: 1 }}
                >
                  <Search />
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {translations[currentLanguage].interfaces}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/${currentLanguage}/about-us`}
                  className="Button"
                  sx={{ color: "#fff", gap: 1 }}
                >
                  <Info />
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {translations[currentLanguage].aboutUs}
                  </Typography>
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  component={Link}
                  to={`/${currentLanguage}/contact-us`}
                  className="Button"
                  sx={{ color: "#fff", gap: 1 }}
                >
                  <Mail />
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {translations[currentLanguage].contactUs}
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
