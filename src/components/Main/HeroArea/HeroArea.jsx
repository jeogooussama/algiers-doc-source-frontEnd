// HeroArea.jsx
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import translations from "./HeroAreaTranslations"; // Import translations
import photocopy from "../../../assets/organizing.svg"
const mainHeadingKey = "mainHeading";
const subHeadingKey = "subHeading";
const exploreButtonLabelKey = "exploreButtonLabel";
const learnMoreButtonLabelKey = "learnMoreButtonLabel";
const imageUrl = photocopy; // Replace with your actual image URL

const HeroArea = () => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  return (
    <div
      className="heroArea"
      style={{
        marginTop: "64px",
        padding: "20px",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
          className="container-items"
          textAlign="left"
        >
          <Grid item xs={12} md={6} className="text-and-buttons-items">
            <Box
              sx={{
                borderRadius: "10px",
                padding: { xs: "10px", md: "20px" }, // Added responsive padding
              }}
            >
              <Typography
                variant="h2"
                color="#2e7d32"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                {translations[currentLanguage][mainHeadingKey]}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  marginBottom: 3,
                }}
              >
                {translations[currentLanguage][subHeadingKey]}
              </Typography>
              <Button
                variant="contained"
                color="success"
                sx={{ marginRight: { xs: 0, md: 2 }, margin: 1 }}
              >
                {translations[currentLanguage][exploreButtonLabelKey]}
              </Button>
              <Button
                variant="outlined"
                color="error"
                sx={{ marginRight: { xs: 0, md: 2 }, margin: 1 }}
              >
                {translations[currentLanguage][learnMoreButtonLabelKey]}
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="div"
              className="ImageContainer"
              sx={{
                background: `url('${imageUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "200px", md: "400px" },
                borderRadius: "10px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
