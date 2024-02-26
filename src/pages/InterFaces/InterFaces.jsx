import { useState, useEffect } from "react";
import { CircularProgress, Container, Typography, Box } from "@mui/material";
import { Footer, InterfacesContainer, Navbar } from "../../components";
import InterfaceFilter from "./InterfaceFilter";
import axios from "axios";

const InterFaces = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategorySelect = (category) =>
    setSelectedCategory(category === selectedCategory ? "" : category);
  const handleLanguageSelect = (language) =>
    setSelectedLanguage(language === selectedLanguage ? "" : language);
  const handleCitySelect = (city) => setSelectedCity(city === selectedCity ? "" : city);
  const handleSearch = (term) => setSearchTerm(term);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          ...(selectedCity && { city: selectedCity }),
          ...(selectedCategory && { category: selectedCategory }),
          ...(selectedLanguage && { language: selectedLanguage }),
          ...(searchTerm && { search: searchTerm }),
        });

        const response = await axios.get(
          `https://algeridoc.adaptable.app/interfaces?${params}`
        );

        if (!response.data || response.status !== 200)
          throw new Error("Failed to fetch interfaces");

        setInterfaces(response.data);
      } catch (error) {
        console.error("Error fetching interfaces:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, selectedLanguage, selectedCity, searchTerm]);

  const filteredInterfaces = interfaces.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || item.category === selectedCategory) &&
      (!selectedLanguage || item.language === selectedLanguage) &&
      (!selectedCity || item.city === selectedCity)
  );

  return (
    <>
      <Navbar />
      <InterfaceFilter
        onSelect={handleCategorySelect}
        onSearch={handleSearch}
        onLanguageSelect={handleLanguageSelect}
        onCitySelect={handleCitySelect}
      />
      <Box bgcolor="#F9FCFB">
        <Container maxWidth="xl" sx={{ minHeight: "60vh", p: 0 }}>
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
              {filteredInterfaces.length === 0 ? (
                <Typography variant="h5">No files found with the selected filters.</Typography>
              ) : (
                <InterfacesContainer interfaces={filteredInterfaces} />
              )}
            </>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default InterFaces;
