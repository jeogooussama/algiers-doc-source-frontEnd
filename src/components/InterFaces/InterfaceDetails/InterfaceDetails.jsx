import { Container, Typography, Paper, Box, Grid, Button } from "@mui/material";

const InterfaceDetails = ({ title, description, language, downloadLinks, image }) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 10 }}>
      <Paper
        elevation={3}
        sx={{
          padding: { xs: "2rem", md: "3rem" },
          background: "#F9FCFB",
          borderRadius: 16,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "auto", borderRadius: 16, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",display:"block" }}
            />
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h4" sx={{ marginBottom: 2, color: "#21BF73" }}>
              {title}
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: 2, color: "#21BF73" }}>
              اللغة: {language}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2, color: "#333" }}>
              {description}
            </Typography>
            <Box mt="auto" sx={{ textAlign: "right" }}>
              <a href={downloadLinks.word} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="primary">
                  تحميل word
                </Button>
              </a>
              <a href={downloadLinks.pdf} target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="error">
                  تحميل PDF
                </Button>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default InterfaceDetails;
