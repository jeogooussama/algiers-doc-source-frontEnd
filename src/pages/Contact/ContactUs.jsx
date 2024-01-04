// ContactUs.jsx
import { Container, Typography, Grid, Paper, Box, TextField, Button } from "@mui/material";
import { Footer, Navbar } from "../../components/";
import { useLocation } from "react-router-dom";
import translations from "./ContactUsTranslations"; // Import translations

const ContactUs = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  return (
    <div>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" color="#2e7d32" gutterBottom>
          {translations[currentLanguage].contactUs}
        </Typography>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: "1rem", md: "2rem" },
            background: "#f5f5f5",
            borderRadius: 16,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="#2e7d32" gutterBottom>
                {translations[currentLanguage].getInTouch}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
                {translations[currentLanguage].questionFeedback}
              </Typography>

              {/* Contact Form */}
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label={translations[currentLanguage].yourName}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      required
                      fullWidth
                      label={translations[currentLanguage].yourEmail}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label={translations[currentLanguage].yourMessage}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{ backgroundColor: "#2e7d32", color: "#fff" }}
                      size="large"
                    >
                      {translations[currentLanguage].sendMessage}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="#2e7d32" gutterBottom>
                {translations[currentLanguage].workFromHome}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
                {translations[currentLanguage].workFromHomeMessage}
              </Typography>

              {/* Image or Icon for Work from Home */}
              <Box
                component="img"
                src="path/to/home-icon.png"
                alt="Home Icon"
                sx={{ width: "100%", height: "auto", marginTop: 2 }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Footer />
    </div>
  );
};

export default ContactUs;
