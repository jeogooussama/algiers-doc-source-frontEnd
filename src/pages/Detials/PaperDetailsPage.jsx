import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { PaperDetails, Navbar, Footer } from "../../components";
import axios from "axios";
import {
  CircularProgress,
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";

const PaperDetailsPage = () => {
  const { id } = useParams();
  const [paperData, setPaperData] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interfaceResponse = await axios.get(
          `https://algeridoc.adaptable.app/interfaces/${id}`
        );

        // Check if interfaceResponse returns 404 or no data
        if (interfaceResponse.status === 404 || !interfaceResponse.data) {
          // If not found, try fetching from linedPapers API
          throw new Error("Data not found in interfaces API");
        } else {
          // If data found in interfaces API, set the data
          setPaperData(interfaceResponse.data);
        }
      } catch (error) {
        // If error, try fetching from linedPapers API silently
        try {
          const linedPaperResponse = await axios.get(
            `https://algeridoc.adaptable.app/linedPapers/${id}`
          );
          if (linedPaperResponse.status === 200) {
            // If data found in linedPapers API, set the data
            setPaperData(linedPaperResponse.data);
          } else {
            // If data not found in both APIs, set paperData to null
            setPaperData(null);
          }
        } catch (error) {
          // Handle errors silently
          console.error("Error fetching paper data:", error);
          setPaperData(null);
        }
      } finally {
        // Set loading state to false after fetching is completed
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#F9FCFB", py: 4 }}>
        <Container maxWidth="lg">
          {isLoading ? (
            // Render loading indicator if data is still loading
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Box p={2}>
                  {paperData ? (
                    <PaperDetails {...paperData} />
                  ) : (
                    <Typography variant="h5" align="center">
                      Data not found.
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </div>
  );
};

export default PaperDetailsPage;
