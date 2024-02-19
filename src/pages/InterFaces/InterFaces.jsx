import { useState, useEffect } from "react";
import { CircularProgress, Container } from "@mui/material";
import { Footer, InterfacesContainer, Navbar } from "../../components";
import InterfaceFilter from "./InterfaceFilter";

const InterFaces = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [interfaces, setInterfaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleCategorySelect = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? "" : category === "واجهة" ? "interface" : category === "ورق مخطط" ? "lined_paper" : category
    );
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://algeridoc.adaptable.app/interfaces`);
        if (!response.ok) {
          throw new Error("Failed to fetch interfaces");
        }
        const data = await response.json();
        setInterfaces(data);
      } catch (error) {
        console.error("Error fetching interfaces:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredInterfaces = interfaces.filter(
    (item) =>
      (selectedCategory === "" || item.type === selectedCategory) &&
      (selectedLanguage === "" || item.language === selectedLanguage) &&
      (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <Navbar />
      <InterfaceFilter onSelect={handleCategorySelect} onSearch={handleSearch} onLanguageSelect={handleLanguageSelect} />
      <Container maxWidth="xl" sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60vh" }}>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <InterfacesContainer interfaces={filteredInterfaces} />
        )}
      </Container>
      <Footer />
    </>
  );
};

export default InterFaces;
