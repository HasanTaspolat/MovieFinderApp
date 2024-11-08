import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { Search } from 'lucide-react';
import { setSearchTerm } from '../../redux/slices/searchSlice';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTermLocal] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermLocal(event.target.value);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm.trim() !== '') {
      dispatch(setSearchTerm(debouncedTerm));
    } else {
      dispatch(setSearchTerm('Pokemon'));
    }
  }, [debouncedTerm, dispatch]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      dispatch(setSearchTerm(searchTerm));
    }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 400, margin: 'auto', mt: 2 }}>
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        className='search-bar'
        placeholder="Search for movies..."
        startAdornment={
          <InputAdornment position="start">
            <Search size={20} />
          </InputAdornment>
        }
        sx={{
          width: '100%',
          padding: '8px',
          bgcolor: 'background.paper',
          borderRadius: 1,
          border: '1px solid #ccc',
        }}
      />
    </Box>
  );
}
