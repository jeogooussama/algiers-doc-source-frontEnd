import  { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, IconButton, Grid, Box, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const PaperFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    type: "",
    language: "",
    city: "",
    searchTerm: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({
      type: "",
      language: "",
      city: "",
      searchTerm: ""
    });
    onFilter({});
  };

  return (
    <Box p={2} borderRadius={4} boxShadow={2} bgcolor="#F5F5F5" mt={4}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="type-select">Type</InputLabel>
            <Select
              labelId="type-select"
              id="type"
              name="type"
              value={filters.type}
              onChange={handleChange}
              label="Type"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="interface">Interface</MenuItem>
              <MenuItem value="lined_paper">Lined Paper</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="language-select">Language</InputLabel>
            <Select
              labelId="language-select"
              id="language"
              name="language"
              value={filters.language}
              onChange={handleChange}
              label="Language"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="arabic">Arabic</MenuItem>
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="city-select">City</InputLabel>
            <Select
              labelId="city-select"
              id="city"
              name="city"
              value={filters.city}
              onChange={handleChange}
              label="City"
            >
              <MenuItem value="">All</MenuItem>
              {/* Replace the following placeholder with your cities array */}
              <MenuItem value="city1">City 1</MenuItem>
              <MenuItem value="city2">City 2</MenuItem>
              <MenuItem value="city3">City 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="search"
            name="searchTerm"
            label="Search"
            variant="outlined"
            size="small"
            value={filters.searchTerm}
            onChange={handleChange}
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
              Reset
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaperFilter;
