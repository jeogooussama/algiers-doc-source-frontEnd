// Footer.jsx
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import { Email, Phone, Facebook, LinkedIn, Instagram } from '@mui/icons-material';
import { useLocation } from "react-router-dom";
import translations from "./FooterTranslations"; // Import translations

const Footer = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  return (
    <Box sx={{ bgcolor: '#2e7d32', color: '#fff', padding: '40px 0', textAlign: 'center' }}>
      <Grid container justifyContent="center" display={"felx"} spacing={3}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">{translations[currentLanguage].contactMe}</Typography>
          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: 2, mt: 2 }}>
            <IconButton href="mailto:your.email@example.com" color="inherit">
              <Email />
            </IconButton>
            <Typography variant="body1">your.email@example.com</Typography>
          </Box>
          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: 2, mt: 1 }}>
            <IconButton href="tel:+1234567890" color="inherit">
              <Phone />
            </IconButton>
            <Typography variant="body1">+123 456 7890</Typography>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">{translations[currentLanguage].socialMedia}</Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <Link href="https://www.facebook.com/yourfacebook" color="inherit" sx={{ mx: 2, textDecoration: 'none', fontWeight: 'bold' }}>
              <IconButton sx={{ '&:hover, &:active': { color: 'red' } }}>
                <Facebook />
              </IconButton>
            </Link>
            <Link href="https://twitter.com/yourtwitter" color="inherit" sx={{ mx: 2, textDecoration: 'none', fontWeight: 'bold' }}>
              <IconButton sx={{ '&:hover, &:active': { color: 'red' } }}>
                <Instagram />
              </IconButton>
            </Link>
            <Link href="https://www.linkedin.com/in/yourlinkedin" color="inherit" sx={{ mx: 2, textDecoration: 'none', fontWeight: 'bold' }}>
              <IconButton sx={{ '&:hover, &:active': { color: 'red' } }}>
                <LinkedIn />
              </IconButton>
            </Link>
          </Box>
        </Grid>

        {/* Navigation Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">{translations[currentLanguage].quickLinks}</Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Link href="/about-us" color="inherit" sx={{ my: 1, textDecoration: 'none', fontWeight: 'bold' }}>
              {translations[currentLanguage].aboutMe}
            </Link>
            <Link href="/contact-us" color="inherit" sx={{ my: 1, textDecoration: 'none', fontWeight: 'bold' }}>
              {translations[currentLanguage].contact}
            </Link>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" textAlign="center">
          &copy; {new Date().getFullYear()} {translations[currentLanguage].fullName}. {translations[currentLanguage].allRightsReserved}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
