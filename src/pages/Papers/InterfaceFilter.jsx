import React, { useState } from "react";
import { Box, TextField, MenuItem, Button, Autocomplete, Grid } from "@mui/material";
import cities from "./cities"; // Import the cities array

const InterfaceFilter = ({ languages, onFilter }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState(""); // New state for selected type

  const handleFilter = () => {
    onFilter({
      language: selectedLanguage,
      city: selectedCity,
      searchQuery: searchQuery.trim(),
      type: selectedType, // Include selected type in the filter
    });
  };

  const handleReset = () => {
    setSelectedLanguage("");
    setSelectedCity("");
    setSearchQuery("");
    setSelectedType(""); // Reset selected type
    handleFilter(); // Apply filter with empty values to reset the filter
  };

  return (
    <Box mb={2} p={2} borderRadius={8} boxShadow={2} bgcolor="#f0f0f0">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item xs={12} sm={6} md={4}>
          <Autocomplete
            options={languages}
            value={selectedLanguage}
            onChange={(event, newValue) => setSelectedLanguage(newValue)}
            renderInput={(params) => (
              <TextField {...params} label="اللغة" fullWidth variant="outlined" />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select
            label="المدينة"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">الكل</MenuItem>
            {cities.map((city, index) => (
              <MenuItem key={city} value={city}>
                {index + 1}-{city}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            select // New select field for types
            label="النوع"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="">الكل</MenuItem>
            <MenuItem value="interface">واجهات</MenuItem> // Options for interface
            <MenuItem value="linedPaper">أوراق مخططة</MenuItem> // Options for lined papers
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="البحث"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" onClick={handleFilter} fullWidth color="success">
            تطبيق الفلاتر
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" onClick={handleReset} fullWidth color="error">
            إعادة الضبط
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default InterfaceFilter;
