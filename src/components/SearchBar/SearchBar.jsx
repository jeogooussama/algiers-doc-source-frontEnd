import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    const matchedInterface = fakeData.interfaces.find(
      (item) => item.title === searchQuery
    );

    if (matchedInterface) {
      navigate(`/ar/interfaces/${matchedInterface.id}`);
    } else {
      console.log('Interface not found');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <Container maxWidth="xl" sx={Style.Container}>
        <Box sx={Style.Box}>
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
                      <SearchOutlined sx={{ color: '#FD5E53' }} />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#21BF73', color: '#F9FCFB' }}>
            Search
          </Button>
        </Box>
      </Container>
    </form>
  );
};

export default SearchBar;