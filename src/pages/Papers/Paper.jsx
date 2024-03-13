import React, { useState, useEffect } from "react";
import { CircularProgress, Container, Box, Typography } from "@mui/material";
import { Footer, PaperContainer, Navbar } from "../../components";
import axios from "axios";
import InterfaceFilter from "./InterfaceFilter"; // Import the InterfaceFilter component

const Paper = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleItems, setVisibleItems] = useState(30);
  const [filteredData, setFilteredData] = useState([]); // State to hold filtered data

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
        setError(null);
        setFilteredData(combinedData); // Initialize filtered data with all data
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setVisibleItems((prev) => prev + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to handle filtering
  const handleFilter = ({ language, city, searchQuery, type }) => {
    let filteredResult = [...data]; // Start with all data
    if (language) {
      filteredResult = filteredResult.filter(
        (item) => item.language === language
      );
    }
    if (city) {
      filteredResult = filteredResult.filter((item) => item.city === city);
    }
    if (searchQuery) {
      filteredResult = filteredResult.filter((item) =>
        item.title.includes(searchQuery)
      );
    }
    if (type) { // Check if type filter is applied
      filteredResult = filteredResult.filter((item) => item.type === type);
    }
    setFilteredData(filteredResult); // Update filtered data state
    setVisibleItems(30); // Reset visible items when applying new filters
  };

  return (
    <>
      <Navbar />
      <Box bgcolor="#F9FCFB">
        <Container maxWidth="xl" sx={{ minHeight: "60vh", pt: 10 }}>
          <InterfaceFilter
            languages={["arabic", "English", "France"]} // Provide language options
            onFilter={handleFilter} // Pass the filter function
          />
          {isLoading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="60vh"
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box>
              <Typography variant="h5" color="error">
                Error: {error}
              </Typography>
            </Box>
          ) : filteredData.length === 0 ? (
            <Box>
              <Typography variant="h5">No data available</Typography>
            </Box>
          ) : (
            <PaperContainer data={filteredData.slice(0, visibleItems)} />
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Paper;
