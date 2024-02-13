import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  Button,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Style from "./SearchBarStyle"; // Assuming you have a separate file for styles

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [interfacesData, setInterfacesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://algeridoc.adaptable.app/interfaces`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch interfaces");
        }
        const data = await response.json();
        setInterfacesData(data);
        setSearchResults(data.map((item) => item.title));
      } catch (error) {
        console.error("Error fetching interfaces:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const matchedInterface = interfacesData.find(
      (item) => item.title.toLowerCase() === searchQuery.toLowerCase()
    );

    if (matchedInterface) {
      // Redirect to the first interface found with the matching title
      navigate(`/ar/interfaces/${matchedInterface._id}`);
    } else {
      console.log("Interface not found");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Container maxWidth="xl" sx={Style.Container}>
        <Box sx={Style.Box}>
          <Autocomplete
            options={searchResults.slice(0, 5)} // Limit results to 5
            freeSolo
            fullWidth
            value={searchQuery}
            onInputChange={(event, newValue) => setSearchQuery(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                variant="outlined"
                id="SearchInput"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined sx={{ color: "#FD5E53" }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#21BF73", color: "#F9FCFB" }}
          >
            Search
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default SearchBar;
