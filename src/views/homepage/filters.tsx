import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, MenuItem, Select, SelectChangeEvent, Box, IconButton } from '@mui/material';
import { FilterX } from 'lucide-react';
import { setYear, setType, resetFilters } from '../../redux/slices/filterSlice';
import { fetchMovies } from '../../redux/slices/moviesSlice';
import { selectSearchTerm } from '../../redux/slices/searchSlice';
import { selectPage } from '../../redux/slices/paginationSlice';
import { AppDispatch } from '../../redux/store';

export default function Filters() {
  const dispatch = useDispatch<AppDispatch>();

  const [localYear, setLocalYear] = useState<string | ''>('');
  const [localType, setLocalType] = useState<string | ''>('');

  const searchTerm = useSelector(selectSearchTerm);
  const page = useSelector(selectPage);

  const handleYearChange = (event: SelectChangeEvent<string>) => {
    const year = event.target.value;
    setLocalYear(year);
    dispatch(setYear(year));
    dispatch(fetchMovies({ searchTerm, year, type: localType, page }));
  };

  const handleTypeChange = (event: SelectChangeEvent<string>) => {
    const type = event.target.value;
    setLocalType(type);
    dispatch(setType(type));
    dispatch(fetchMovies({ searchTerm, year: localYear, type, page }));
  };

  const handleClearFilters = () => {
    setLocalYear('');
    setLocalType('');
    dispatch(resetFilters());
    dispatch(fetchMovies({ searchTerm, year: '', type: '', page }));
  };

  useEffect(() => {
    if (!localYear && !localType) {
      dispatch(resetFilters());
      dispatch(fetchMovies({ searchTerm, year: '', type: '', page }));
    }
  }, [localYear, localType, dispatch, searchTerm, page]);

  return (
    <Box className="filter-wrapper" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <span className='filter-text'>Filters:</span>
      
      <FormControl className='input-wrapper' variant="outlined">
      <label>Year:</label>
        <Select
          value={localYear}
          placeholder='Year'
          onChange={handleYearChange}
          label="Year"
          className="year-filter"
        >
          {Array.from({ length: 24 }, (_, i) => (
            <MenuItem key={2000 + i} value={String(2000 + i)}>
              {2000 + i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className='input-wrapper' variant="outlined">
        <label>Types:</label>
        <Select
          placeholder='Type'
          value={localType}
          onChange={handleTypeChange}
          label="Type"
          className="year-filter"
        >
          <MenuItem value="movie">Movie</MenuItem>
          <MenuItem value="series">Series</MenuItem>
          <MenuItem value="episode">Episode</MenuItem>
        </Select>
      </FormControl>

      <IconButton
        onClick={handleClearFilters}
        aria-label="clear filters"
      >
        <FilterX color='white' />
      </IconButton>
    </Box>
  );
}