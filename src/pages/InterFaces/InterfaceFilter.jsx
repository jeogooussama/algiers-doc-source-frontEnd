import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Stack,
  IconButton,
  Button,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const InterfaceFilter = ({ onSelect, onSearch }) => {
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    onSelect(selectedValue);
  };

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleReset = () => {
    setSelectedFilter("");
    setSearchTerm("");
    onSelect("");
    onSearch("");
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      mt={{ xs: 3, md: 8 }}
      spacing={2}
      p={3}
      alignItems={{ xs: "center", md: "flex-end" }}
      boxShadow={2}
      bgcolor="#fff"
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
          sx={{ height: "100%" }}
        >
          <MenuItem value="" sx={{ color: "black", height: "100%" }}>
            الكل
          </MenuItem>
          <MenuItem value="واجهات مشاريع" sx={{ color: "black", height: "100%" }}>
            واجهات مشاريع
          </MenuItem>
          <MenuItem value="ورق مخطط" sx={{ color: "black", height: "100%" }}>
            ورق مخطط
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
        sx={{ width: { xs: "100%", md: "170px" }, height: "100%" }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleReset} size="small">
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{ marginLeft: 1, height: "100%", color: "#2196F3", borderColor: "#2196F3" }}
      >
        إعادة تعيين
      </Button>
    </Stack>
  );
};

export default InterfaceFilter;
