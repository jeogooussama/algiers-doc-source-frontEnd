import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Grid, Box, Button,  } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import cities from "./cities"; // Import the cities array

const InterfaceFilter = ({ onSelect, onSearch, onLanguageSelect, onCitySelect }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    onSelect(selectedValue);
  };

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    onLanguageSelect(selectedValue);
  };

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
    onCitySelect(selectedValue);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleReset = () => {
    setSelectedFilter("");
    setSelectedLanguage("");
    setSelectedCity("");
    setSearchTerm("");
    onSelect("");
    onLanguageSelect("");
    onCitySelect("");
    onSearch("");
  };

  return (
    <Box p={2} borderRadius={4} boxShadow={2} bgcolor="#F5F5F5" mt={10  } mr={3} ml={3}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="filter-select">النوع</InputLabel>
            <Select
              labelId="filter-select"
              id="filter"
              value={selectedFilter}
              onChange={handleFilterChange}
              label="النوع"
            >
              <MenuItem value="">الكل</MenuItem>
              <MenuItem value="interface">واجهة</MenuItem>
              <MenuItem value="lined_paper">ورق مخطط</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="language-select">اللغة</InputLabel>
            <Select
              labelId="language-select"
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              label="اللغة"
            >
              <MenuItem value="">الكل</MenuItem>
              <MenuItem value="arabic">عربي</MenuItem>
              <MenuItem value="english">إنجليزي</MenuItem>
              <MenuItem value="french">فرنسي</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="city-select">المدينة</InputLabel>
            <Select
              labelId="city-select"
              id="city"
              value={selectedCity}
              onChange={handleCityChange}
              label="المدينة"
            >
              <MenuItem value="">الكل</MenuItem>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>{city}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="search"
            label="البحث"
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleReset} size="small">
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="flex-end">
            <Button variant="outlined" onClick={handleReset}>
              إعادة
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterfaceFilter;
