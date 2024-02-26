import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  Button,
  CircularProgress,
} from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import Style from "./SearchBarStyle";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [interfacesData, setInterfacesData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
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
      } finally {
        setLoading(false);
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
      navigate(`/interfaces/${matchedInterface._id}`);
    } else {
      console.log("Interface not found");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Container maxWidth="md"> {/* Adjusted maxWidth */}
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
                placeholder="Search for interfaces..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                  endAdornment: loading && (
                    <CircularProgress color="inherit" size={20} />
                  ), // Show loading spinner while fetching data
                }}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ bgcolor: "#21BF73", color: "#F9FCFB", minWidth: "120px" }} // Adjusted width
            disabled={loading} // Disable button while loading
          >
            Search
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default SearchBar;
