import { Box, Container, Typography, Grid, Button } from "@mui/material";
import photocopy from "../../../assets/organizing.svg";
import { Link } from "react-router-dom";

const imageUrl = photocopy; // Replace with your actual image URL

const HeroArea = () => {
  return (
    <Box
      className="heroArea"
      sx={{
        marginTop: "64px",
        padding: "20px",
        backgroundColor: "#F9FCFB", // Changed background color
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="div"
              className="ImageContainer"
              sx={{
                backgroundImage: `url('${imageUrl}')`, // Changed background image property
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
                padding: { xs: "20px", md: "40px" }, // Increased padding
                backgroundColor: "#ffffff", // Changed background color
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Added box shadow
              }}
            >
              <h1
                style={{
                  color: "#21BF73",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: 2,
                  textAlign: "center",
                  padding: "1rem",
                }}
              >
                Welcome to AlgeriDocs
              </h1>
              <Typography
                variant="h2"
                color="#21BF73"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  marginBottom: 2,
                  textAlign: "right",
                }}
              >
                اختصر وقتك معنا للحصول على كل الاوراق اللازمة لك{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2rem", md: "1.5rem" },
                  marginBottom: 3,
                  textAlign: "right",
                  color: "#000000", // Changed text color
                  lineHeight: "1.5",
                }}
              >
                احصل على واجهات بحث مختارة بشكل جيد بتنسيقي Word و PDF، مصممة
                لتعزيز رحلتك في البحث الجامعي
              </Typography>
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }} // Adjusted flex direction for responsiveness
                alignItems="center"
                mt={2}
              >
                <Button
                  variant="contained"
                  component={Link}
                  to={"/paper"}
                  sx={{
                    marginRight: { xs: 0, md: 2 },
                    marginBottom: { xs: 2, md: 0 },
                    borderRadius: "5px",
                    backgroundColor: "#21BF73", // Changed button color
                    color: "#FFFFFF", // Changed text color
                    "&:hover": {
                      backgroundColor: "#388E3C", // Changed hover color
                    },
                  }}
                >
                  اظغط هنا للحصول على اوراقك
                </Button>
                <Button
                  variant="outlined"
                  component={Link}
                  to={"/about-us"}
                  sx={{
                    borderRadius: "5px",
                    borderColor: "#f44336", // Changed border color
                    color: "#f44336", // Changed text color
                    "&:hover": {
                      borderColor: "#D32F2F", // Changed hover border color
                      backgroundColor: "#FEE9EB", // Changed hover background color
                    },
                  }}
                >
                  من نحن ؟
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default HeroArea;
