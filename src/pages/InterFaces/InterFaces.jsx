// InterFaces.jsx
import  { useState } from "react";
import { useLocation } from "react-router-dom";
import { Footer, InterfacesContainer, Navbar } from "../../components";
import InterfaceFilter from "./InterfaceFilter";
import fakeData from "../../fakeData";

const InterFaces = () => {
  const location = useLocation();
  const currentLangParam = location.pathname.split("/")[1];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const interfacesToDisplay = fakeData.interfaces.filter(
    (item) =>
      (item.language === currentLangParam || item.language === "ar") &&
      (selectedCategory === "" || item.category === selectedCategory) &&
      (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navbar />
      <InterfaceFilter onSelect={handleCategorySelect} onSearch={handleSearch} />
      <InterfacesContainer interfaces={interfacesToDisplay} currentLangParam={currentLangParam} />
      <Footer />
    </div>
  );
};

export default InterFaces;
