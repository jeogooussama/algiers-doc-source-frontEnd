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
import { Home, FileCopy, Info, Mail, Menu, Close, } from "@mui/icons-material";
import "./NavBar.css";
import logo from "../../../assets/logo.png";
import freePalsetine from "../../../../assets/freePalsetine.png"; // Import the Free Palestine image

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
        {/* Free Palestine Image */}

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
              <img
                src={freePalsetine}
                alt="Free Palestine"
                style={{ marginRight: "auto" }}
                width={60}
              />
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
              <img
                src={freePalsetine}
                alt="Free Palestine"
                style={{ marginRight: "auto", display: "block" }}
                width={60}
              />
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
                  to={`/paper`}
                  className="Button"
                  sx={{ color: "#F9FCFB", gap: 1 }}
                >
                  <FileCopy />
                  <Typography variant="caption" sx={{ color: "#F9FCFB" }}>
                    اوراق
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
              to={`/paper`}
              onClick={toggleDrawer}
              sx={{ gap: 1 }}
            >
<<<<<<< HEAD
              <Search sx={{ color: "#FD5E53" }} />
              <ListItemText primary={"اوراق"} />
=======
              <FileCopy sx={{ color: "#FD5E53" }} />
              <ListItemText primary={"واجهات"} />
>>>>>>> 05709aaf045735c3d08df5c0a5e1ed8a62a87588
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
