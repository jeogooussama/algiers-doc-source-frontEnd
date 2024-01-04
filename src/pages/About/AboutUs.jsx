// AboutUs.jsx
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import translations from "./AboutUsTranslations"; // Import translations
import { Navbar,Footer } from "../../components/";
import image from "./engineering_team.svg"
const AboutUs = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  return (
    <div>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
        <Typography variant="h4" color="#2e7d32" gutterBottom>
          {translations[currentLanguage].aboutUs}
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
              <img
                src={image}
                alt="Team"
                style={{ width: "100%", height: "auto", borderRadius: 16, display:"block" }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" color="#2e7d32" gutterBottom>
                {translations[currentLanguage].ourTeam}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
                {translations[currentLanguage].welcomeMessage}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
                {translations[currentLanguage].missionStatement}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
                {translations[currentLanguage].exploreMessage}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Box mt={4}>
          <Typography variant="h5" color="#2e7d32" gutterBottom>
            {translations[currentLanguage].ourValues}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            - {translations[currentLanguage].excellence}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            - {translations[currentLanguage].accessibility}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
            - {translations[currentLanguage].innovation}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </div>
  );
};

export default AboutUs;
