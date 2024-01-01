// SearchBar.jsx
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { SearchOutlined } from "@mui/icons-material";
import {
  Container,
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import translations from "./SearchBarTranslations"; // Import translations

const SearchBar = ({ onSearch }) => {
  const location = useLocation();
  const currentLanguage = location.pathname.split("/")[1]; // Extract language from URL

  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [selectedWilaya, setSelectedWilaya] = useState("all");
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Simulating an asynchronous data fetch
      const data = [
        { title: "Interface 1", language: "en", wilaya: "Algiers" },
        { title: "Interface 2", language: "fr", wilaya: "Oran" },
        { title: "Interface 3", language: "ar", wilaya: "Constantine" },
        { title: "Interface 4", language: "en", wilaya: "Tizi Ouzou" },
        { title: "Interface 5", language: "fr", wilaya: "Annaba" },
        { title: "Interface 6", language: "ar", wilaya: "Setif" },
      ];

      // Sample algorithm: Filter data based on selected language, wilaya, and search term
      const filteredResults =
        selectedLanguage === "all" && selectedWilaya === "all"
          ? data.filter((item) =>
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
          : data.filter(
              (item) =>
                (item.language === selectedLanguage || selectedLanguage === "all") &&
                (item.wilaya === selectedWilaya || selectedWilaya === "all") &&
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

      setFilteredData(filteredResults);
      // Check if onSearch is a function before calling it
      if (typeof onSearch === "function") {
        onSearch({ selectedLanguage, selectedWilaya, searchTerm });
      }
    };

    fetchData();
  }, [selectedLanguage, selectedWilaya, searchTerm, onSearch]);

  // Wilayas data
  const wilayas = ["Algiers", "Oran", "Constantine", "Tizi Ouzou", "Annaba", "Setif"];

  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#f7f7f7",
        borderRadius: 8,
        boxShadow: 2,
        display: "flex",
        justifyContent: "center",
        padding: { xs: "20px 0", md: "40px 0" },
        textAlign: "center",
        transition: "box-shadow 0.3s",
        "&:hover": {
          boxShadow: 4,
        },
      }}
    >
      <Box
        sx={{
          paddingTop: 6,
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          width: { xs: "90%", md: "80%" },
          gap: 2,
        }}
      >
        {/* Language Select */}
        <FormControl variant="outlined" sx={{ width: { xs: "100%", md: "100px" } }}>
          <InputLabel id="language-label">{translations[currentLanguage].selectLanguage}</InputLabel>
          <Select
            labelId="language-label"
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            label={translations[currentLanguage].selectLanguage}
          >
            <MenuItem value="all">{translations[currentLanguage].all}</MenuItem>
            <MenuItem value="en">{translations[currentLanguage].english}</MenuItem>
            <MenuItem value="fr">{translations[currentLanguage].french}</MenuItem>
            <MenuItem value="ar">{translations[currentLanguage].arabic}</MenuItem>
          </Select>
        </FormControl>

        {/* Wilaya Select */}
        <FormControl variant="outlined" sx={{ width: { xs: "100%", md: "100px" } }}>
          <InputLabel id="wilaya-label">{translations[currentLanguage].selectWilaya}</InputLabel>
          <Select
            labelId="wilaya-label"
            id="wilaya-select"
            value={selectedWilaya}
            onChange={(e) => setSelectedWilaya(e.target.value)}
            label={translations[currentLanguage].selectWilaya}
          >
            <MenuItem value="all">{translations[currentLanguage].all}</MenuItem>
            {wilayas.map((wilaya) => (
              <MenuItem key={wilaya} value={wilaya}>
                {wilaya}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Autocomplete Search */}
        <Autocomplete
          options={filteredData.map((item) => item.title)}
          freeSolo
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              fullWidth
              variant="outlined"
              sx={{
                color: "#2e7d32",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 8,
                  borderColor: "#2e7d32",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 14px",
                },
                "& .MuiInputLabel-outlined": {
                  transform: "translate(14px, 12px) scale(1)",
                },
                "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
                  transform: "translate(14px, 6px) scale(0.75)",
                },
              }}
              id="SearchInput"
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        />
      </Box>
    </Container>
  );
};

export default SearchBar;
