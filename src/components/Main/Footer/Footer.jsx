// Footer.jsx
import { Box, Typography, Link, IconButton, Grid } from "@mui/material";
import {
  Email,
  Phone,
  Facebook,
  LinkedIn,
  Instagram,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#21BF73",
        color: "#F9FCFB",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <Grid container justifyContent="center" display={"felx"} spacing={3}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">اتصل بي</Typography>
          {/* Email */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <IconButton href="mailto:jeogodz@protonmail.com" color="inherit">
              <Email />
            </IconButton>
            <Typography variant="body1">jeogodz@protonmail.com</Typography>
          </Box>
          {/* Phone */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mt: 1,
            }}
          >
            <IconButton href="tel:+1234567890" color="inherit">
              <Phone />
            </IconButton>
            <Typography variant="body1">+123 456 7890</Typography>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6"> وسائل التواصل الاجتماعي</Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Link
              href="https://www.facebook.com/yourfacebook"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none", fontWeight: "bold" }}
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <Facebook />
              </IconButton>
            </Link>
            <Link
              href="https://twitter.com/yourtwitter"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none", fontWeight: "bold" }}
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <Instagram />
              </IconButton>
            </Link>
            <Link
              href="https://www.linkedin.com/in/yourlinkedin"
              color="inherit"
              sx={{ mx: 2, textDecoration: "none", fontWeight: "bold" }}
            >
              <IconButton sx={{ "&:hover, &:active": { color: "#FD5E53" } }}>
                <LinkedIn />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">روابط سريعة</Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Link
              href={`/about-us`}
              color="inherit"
              sx={{ my: 1, textDecoration: "none", fontWeight: "bold" }}
            >
              عني{" "}
            </Link>
            <Link
              href={`/contact-us`}
              color="inherit"
              sx={{ my: 1, textDecoration: "none", fontWeight: "bold" }}
            >
              اتصال{" "}
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" textAlign="center">
          &copy; {new Date().getFullYear()} jeogo كل الحقوق محفوظة.{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
