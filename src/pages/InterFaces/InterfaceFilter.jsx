<<<<<<< HEAD
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack, IconButton, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
=======
// InterfaceFilter.jsx
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, TextField, Stack, IconButton, Button } from "@mui/material";
>>>>>>> c45883a63bb881b7e8320af864ae27a6a450dfdd
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
      direction={{ xs: 'column', md: 'row' }}
      mt={{ xs: 3, md: 8 }}
      spacing={2}
      p={3}
      alignItems={{ xs: 'center', md: 'flex-end' }}
    >
      <FormControl variant="outlined" sx={{ minWidth: { xs: '100%', md: '170px' }, height: "100%" }}>
        <InputLabel id="filter-label">الفلتر</InputLabel>
        <Select
          labelId="filter-label"
          id="filter"
          label="الفلتر"
          value={selectedFilter}
          onChange={handleFilterChange}
          sx={{ height: "100%" }}
        >
<<<<<<< HEAD
          <MenuItem value="" sx={{ color: "#FD5E53", height: "100%" }}>
            الكل
          </MenuItem>
          <MenuItem value="واجهات مشاريع" sx={{ color: "#FD5E53", height: "100%" }}>
            واجهات مشاريع
          </MenuItem>
          <MenuItem value="ورق مخطط" sx={{ color: "#FD5E53", height: "100%" }}>
=======
          <MenuItem value="" sx={{ color: "black", height: "100%" }}>
            الكل
          </MenuItem>
          <MenuItem value="واجهات مشاريع" sx={{ color: "black", height: "100%" }}>
            واجهات مشاريع
          </MenuItem>
          <MenuItem value="ورق مخطط" sx={{ color: "black", height: "100%" }}>
>>>>>>> c45883a63bb881b7e8320af864ae27a6a450dfdd
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
        sx={{ width: { xs: '100%', md: '170px' }, height: "100%" }}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleReset} size="small">
<<<<<<< HEAD
              <ClearIcon sx={{ color: "#FD5E53" }} />
=======
              <ClearIcon />
>>>>>>> c45883a63bb881b7e8320af864ae27a6a450dfdd
            </IconButton>
          ),
        }}
      />
      <Button
        variant="outlined"
        onClick={handleReset}
<<<<<<< HEAD
        sx={{ marginLeft: 1, height: "100%", color: "#21BF73" }}
      >
        <SearchIcon sx={{ marginRight: 1 }} />
=======
        sx={{ marginLeft: 1, height: "100%", color: "green" }}
      >
>>>>>>> c45883a63bb881b7e8320af864ae27a6a450dfdd
        إعادة تعيين
      </Button>
    </Stack>
  );
};

export default InterfaceFilter;
