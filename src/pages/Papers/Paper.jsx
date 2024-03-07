import { useState, useEffect } from "react";
import { CircularProgress, Container, Box, Typography } from "@mui/material";
import { Footer, PaperContainer, Navbar } from "../../components";
import axios from "axios";

const Paper = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Add a state for error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const interfacesPromise = axios.get(
          "https://algeridoc.adaptable.app/interfaces"
        );
        const linedPaperPromise = axios.get(
          "https://algeridoc.adaptable.app/linedPapers"
        );

        const [interfacesResponse, linedPaperResponse] = await Promise.all([
          interfacesPromise,
          linedPaperPromise,
        ]);

        const interfacesData = interfacesResponse.data.map((item) => ({
          ...item,
          type: "interface",
        }));

        const linedPaperData = linedPaperResponse.data.map((item) => ({
          ...item,
          type: "linedPaper",
        }));

        const combinedData = [...interfacesData, ...linedPaperData];

        setData(combinedData);
        setIsLoading(false);
        setError(null); // Reset the error state if the data fetching is successful
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError(error.message); // Set the error message in the state
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Box bgcolor="#F9FCFB">
        <Container maxWidth="xl" sx={{ minHeight: "60vh", pt: 10 }}>
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress />
            </Box>
          ) : error ? ( // Render an error message if there's an error
            <Box>
              <Typography variant="h5" color="error">
                Error: {error}
              </Typography>
            </Box>
          ) : data.length === 0 ? (
            <Box>
              <Typography variant="h5">No data available</Typography>
            </Box>
          ) : (
            <PaperContainer data={data} />
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Paper;