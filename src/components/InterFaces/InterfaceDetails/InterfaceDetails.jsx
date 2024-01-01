/* eslint-disable react/prop-types */
import { Container, Typography, Paper, Box, Grid } from "@mui/material";
import DownloadButton from "./DownloadButton";

const InterfaceDetails = ({ title, description, language }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
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
          {/* Image Preview Placeholder on the left */}
          <Grid item xs={12} md={3}>
            <img
              src={`https://via.placeholder.com/200x400?text=${title}`}
              alt={title}
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />
          </Grid>

          {/* Title, Language, and Description on the right */}
          <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h3" sx={{ marginBottom: 2, color: "#2e7d32" }}>
              {title}
            </Typography>

            <Typography variant="subtitle1" sx={{ marginBottom: 2, color: "#2e7d32" }}>
              Language: {language}
            </Typography>

            <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
              {description}
            </Typography>

            {/* DownloadButton at the bottom right */}
            <Box mt="auto" sx={{ textAlign: { xs: "center", md: "right" } }}>
              <DownloadButton fileName={title} color="success" size="large" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InterfaceDetails;
