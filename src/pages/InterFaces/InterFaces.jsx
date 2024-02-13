// InterFaces.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer, InterfacesContainer, Navbar } from "../../components";
import InterfaceFilter from "./InterfaceFilter";

const InterFaces = () => {
  const location = useLocation();
  const currentLangParam = location.pathname.split("/")[1];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [interfaces, setInterfaces] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
      }
    };
    fetchData();
  }, []);

  const interfacesToDisplay = interfaces.filter(
    (item) =>
      (item.language === currentLangParam || item.language === "arabic") &&
      (selectedCategory === "" || item.city === selectedCategory) &&
      (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navbar />
      <InterfaceFilter onSelect={handleCategorySelect} onSearch={handleSearch} />
      <InterfacesContainer interfaces={interfacesToDisplay} language={currentLangParam} />
      <Footer />
    </div>
  );
};

export default InterFaces;
