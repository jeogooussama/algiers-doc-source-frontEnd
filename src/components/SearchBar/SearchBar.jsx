import  { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for React Router v6
import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Autocomplete,
  Button,
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import fakeData from '../../fakeData';
import Style from './SearchBarStyle'; // Assuming you have a separate file for styles

const SearchBar = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    // Find the interface with the matching title
    const matchedInterface = fakeData.interfaces.find(
      (item) => item.title === searchQuery
    );

    // If found, navigate to the details page
    if (matchedInterface) {
      navigate(`/ar/interfaces/${matchedInterface.id}`);
    } else {
      // Handle not found case (e.g., show a message)
      console.log('Interface not found');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Container maxWidth="xl" sx={Style.Container}>
        <Box sx={Style.Box}>
          {/* Autocomplete Search */}
          <Autocomplete
            options={fakeData.interfaces.map((item) => item.title)}
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
                      <SearchOutlined />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          {/* Search Button */}
          <Button type="submit" variant="contained">
            Search
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default SearchBar;
