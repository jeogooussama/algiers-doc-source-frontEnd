import { Box, Container, Typography, Grid } from "@mui/material";
import photocopy from "../../../assets/organizing.svg";
import { Link } from "react-router-dom";

const imageUrl = photocopy; // Replace with your actual image URL

const HeroArea = () => {
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
          textAlign="right"
        >
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
                  textAlign: "left",
                }}
              >
                رفع دراستك مع واجهات البحث المجانية{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  marginBottom: 3,
                  textAlign: "left",
                  lineHeight: "1.5",
                }}
              >
                احصل على واجهات بحث مختارة بشكل جيد بتنسيقي Word و PDF، مصممة
                لتعزيز رحلتك في البحث الجامعي
              </Typography>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                mt={2}
              >
                <Box
                  component="div"
                  sx={{
                    marginRight: { xs: 0, md: 2 },
                    padding: "10px",
                    borderRadius: "5px",
                    backgroundColor: "#4CAF50",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#388E3C",
                    },
                  }}
                >
                  <Link to={"/ar/interfaces"} style={{ textDecoration: 'none' }}>
                    <Typography variant="button" color="white">
                      استكشاف التنزيلات مجانًا
                    </Typography>
                  </Link>
                </Box>
                <Box
                  component="div"
                  sx={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "2px solid #f44336",
                    cursor: "pointer",
                    transition: "border-color 0.3s",
                    "&:hover": {
                      borderColor: "#D32F2F",
                    },
                  }}
                >
                  <Link to={"/ar/about-us"} style={{ textDecoration: 'none' }}>
                    <Typography variant="button" color="#f44336">
                      من نحن ؟
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
