import  { useState } from "react";
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
    onLanguageSelect(selectedValue); // Call onLanguageSelect with selected language
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
      <FormControl
        variant="outlined"
        sx={{ minWidth: { xs: "100%", md: "170px" }, height: "100%" }}
      >
        <InputLabel id="filter-label">الفلتر</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          label="الفلتر"
          value={selectedFilter}
          onChange={handleFilterChange}
          sx={{
            height: "100%",
            "& .MuiSelect-outlined": {
              borderRadius: 8,
              bgcolor: "#fff",
            },
          }}
        >
          <MenuItem value="" sx={{ color: "black", height: "100%" }}>
            الكل
          </MenuItem>
          <MenuItem value="interface" sx={{ color: "black", height: "100%" }}>
            واجهة
          </MenuItem>
          <MenuItem value="lined_paper" sx={{ color: "black", height: "100%" }}>
            ورق مخطط
          </MenuItem>
        </Select>
      </FormControl>
      <FormControl
        variant="outlined"
        sx={{ minWidth: { xs: "100%", md: "170px" }, height: "100%" }}
      >
        <InputLabel id="language-label">اللغة</InputLabel>
        <Select
          labelId="language-label"
          id="language"
          label="اللغة"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          sx={{
            height: "100%",
            "& .MuiSelect-outlined": {
              borderRadius: 8,
              bgcolor: "#fff",
            },
          }}
        >
          <MenuItem value="" sx={{ color: "black", height: "100%" }}>
            الكل
          </MenuItem>
          <MenuItem value="arabic" sx={{ color: "black", height: "100%" }}>
            عربي
          </MenuItem>
          <MenuItem value="english" sx={{ color: "black", height: "100%" }}>
            إنجليزي
          </MenuItem>
          <MenuItem value="french" sx={{ color: "black", height: "100%" }}>
            فرنسي
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="search"
        label="البحث"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          width: { xs: "100%", md: "170px" },
          height: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            bgcolor: "#fff",
          },
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
          marginLeft: { xs: 0, md: 1 }, // Adjusted margin for better spacing
          height: "100%",
          color: "#fff",
          bgcolor: "#2196F3",
          "&:hover": {
            bgcolor: "#1565c0",
          },
        }}
      >
        إعادة تعيين
      </Button>
    </Stack>
  );
};

export default InterfaceFilter;
