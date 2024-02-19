import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack, IconButton, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const InterfaceFilter = ({ onSelect, onSearch, onLanguageSelect }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
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

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleReset = () => {
    setSelectedFilter("");
    setSelectedLanguage("");
    setSearchTerm("");
    onSelect("");
    onSearch("");
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      mt={{ xs: 3, md: 10 }}
      spacing={2}
      p={3}
      alignItems={{ xs: "center", md: "flex-end" }}
      boxShadow={2}
      borderRadius={4}
      bgcolor="#f9f9f9"
      border="1px solid #e0e0e0"
    >
      <FormControl variant="outlined" sx={{ minWidth: { xs: "100%", md: "170px" }, height: "100%" }}>
        <InputLabel htmlFor="filter-select" sx={{ color: "#666", fontWeight: 600 }}>الفلتر</InputLabel>
        <Select
          labelId="filter-select"
          id="filter"
          value={selectedFilter}
          onChange={handleFilterChange}
          label="الفلتر"
          sx={{ height: "100%" }}
        >
          <MenuItem value="">الكل</MenuItem>
          <MenuItem value="interface">واجهة</MenuItem>
          <MenuItem value="lined_paper">ورق مخطط</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: { xs: "100%", md: "170px" }, height: "100%" }}>
        <InputLabel htmlFor="language-select" sx={{ color: "#666", fontWeight: 600 }}>اللغة</InputLabel>
        <Select
          labelId="language-select"
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          label="اللغة"
          sx={{ height: "100%" }}
        >
          <MenuItem value="">الكل</MenuItem>
          <MenuItem value="arabic">عربي</MenuItem>
          <MenuItem value="english">إنجليزي</MenuItem>
          <MenuItem value="french">فرنسي</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="search"
        label="البحث"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ width: { xs: "100%", md: "170px" }, height: "100%" }}
        InputLabelProps={{
          shrink: true,
          style: { color: "#666", fontWeight: 600 }
        }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleReset} size="small">
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button
        variant="contained"
        onClick={handleReset}
        sx={{
          marginLeft: { xs: 0, md: 1 },
          height: "100%",
          color: "#fff",
          bgcolor: "#21BF73",
          "&:hover": {
            bgcolor: "#21BF73",
          },
        }}
      >
        إعادة تعيين
      </Button>
    </Stack>
  );
};

export default InterfaceFilter;
