import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import { Facebook, Instagram, GitHub } from "@mui/icons-material";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#21BF73",
        color: "#F9FCFB",
        textAlign: "center",
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 3,
        }}
      >
        <img
          alt=""
          srcSet={logo}
          style={{ display: "block" }}
          height={"60px"}
        />
        <Typography variant="h6">AlgeriDocs</Typography>
      </Box>

      <Grid container justifyContent="center" spacing={3}>
        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            وسائل التواصل الاجتماعي
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link
              href="https://web.facebook.com/profile.php?id=100084991429677"
              color="inherit"
              sx={{ mx: 1, textDecoration: "none" }}
              target="_blank" // Add target="_blank" to open in a new tab
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <Facebook />
              </IconButton>
            </Link>
            <Link
              href="https://www.instagram.com/oussama.pg/"
              color="inherit"
              sx={{ mx: 1, textDecoration: "none" }}
              target="_blank" // Add target="_blank" to open in a new tab
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <Instagram />
              </IconButton>
            </Link>
            <Link
              href="https://github.com/jeogooussama"
              color="inherit"
              sx={{ mx: 1, textDecoration: "none" }}
              target="_blank" // Add target="_blank" to open in a new tab
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <GitHub />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            روابط سريعة
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Link
              href={`/about-us`}
              color="inherit"
              sx={{ my: 1, textDecoration: "none" }}
            >
              عني{" "}
            </Link>
            <Link
              href={`/contact-us`}
              color="inherit"
              sx={{ my: 1, textDecoration: "none" }}
            >
              اتصال{" "}
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ marginTop: 3 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} jeogo كل الحقوق محفوظة.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
