import { useState, useEffect } from "react";
import {
  CircularProgress,
  Container,
  Typography,
  Box
} from "@mui/material";
import { Footer, InterfacesContainer, Navbar } from "../../components";
import InterfaceFilter from "./InterfaceFilter";
import axios from "axios";

const InterFaces = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const [linedPapers, setLinedPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategorySelect = (category) =>
    setSelectedCategory(category === selectedCategory ? "" : category);
  const handleLanguageSelect = (language) =>
    setSelectedLanguage(language === selectedLanguage ? "" : language);
  const handleCitySelect = (city) =>
    setSelectedCity(city === selectedCity ? "" : city);
  const handleSearch = (term) => setSearchTerm(term);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams({
          ...(selectedCity && { city: selectedCity }),
          ...(selectedCategory && { category: selectedCategory }),
          ...(selectedLanguage && { language: selectedLanguage }),
          ...(searchTerm && { search: searchTerm })
        });

        const [interfacesResponse, linedPapersResponse] = await Promise.all([
          axios.get(`https://algeridoc.adaptable.app/interfaces?${params}`),
          axios.get(`https://algeridoc.adaptable.app/linedPapers?${params}`)
        ]);

        if (
          !interfacesResponse.data ||
          interfacesResponse.status !== 200 ||
          !linedPapersResponse.data ||
          linedPapersResponse.status !== 200
        ) {
          throw new Error("Failed to fetch data");
        }

        setInterfaces(interfacesResponse.data);
        setLinedPapers(linedPapersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory, selectedLanguage, selectedCity, searchTerm]);

  const filteredData = interfaces
    .concat(linedPapers)
    .filter(
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
              {filteredData.length === 0 ? (
                <Typography variant="h5">
                  No files found with the selected filters.
                </Typography>
              ) : (
                <InterfacesContainer interfaces={filteredData} />
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
