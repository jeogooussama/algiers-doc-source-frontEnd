import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Footer, InterfacesContainer, Navbar, SearchBar } from "../../components/inedx";
import fakeData from "../../fakeData";

const InterFaces = () => {
  const location = useLocation();
  const currentLangParam = location.pathname.split("/")[1];

  const [searchParams, setSearchParams] = useState({ selectedLanguage: "all", selectedWilaya: "all", searchTerm: "" });

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const filteredInterfaces = fakeData.interfaces.filter(
    (item) =>
      (item.language === searchParams.selectedLanguage || searchParams.selectedLanguage === "all") &&
      (item.wilaya === searchParams.selectedWilaya || searchParams.selectedWilaya === "all") &&
      item.title.toLowerCase().includes(searchParams.searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <InterfacesContainer interfaces={filteredInterfaces} currentLangParam={currentLangParam} />
      <Footer />
    </div>
  );
};

export default InterFaces;
