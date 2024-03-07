import React, { useState, useEffect } from "react";
import { CircularProgress, Container, Box } from "@mui/material";
import { Footer, PaperContainer, Navbar } from "../../components";
import axios from "axios";

const Paper = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
          type: "interface", // Add type field to distinguish between interface and lined paper
        }));
        const linedPaperData = linedPaperResponse.data.map((item) => ({
          ...item,
          type: "linedPaper",
        }));

        const combinedData = [...interfacesData, ...linedPaperData];
        setData(combinedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Box bgcolor="#F9FCFB">
        <Container maxWidth="xl" sx={{ minHeight: "60vh", pt:10 }}>
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <>
              {data.length === 0 ? (
                <Box>
                  <h2>No data available</h2>
                </Box>
              ) : (
                <PaperContainer data={data} />
              )}
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Paper;
