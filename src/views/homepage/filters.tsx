import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Button, Box } from '@mui/material';
import { setYear, setType, resetFilters, selectYear, selectType } from '../../redux/slices/filterSlice';
import { fetchMovies } from '../../redux/slices/moviesSlice';
import { AppDispatch } from '../../redux/store';

export default function Filters() {
    const dispatch = useDispatch<AppDispatch>();
    const selectedYear = useSelector(selectYear);
    const selectedType = useSelector(selectType);

    const hasActiveFilters = Boolean(selectedYear || selectedType);

    const handleYearChange = (event: SelectChangeEvent<string>) => {
        dispatch(setYear(event.target.value));
    };

    const handleTypeChange = (event: SelectChangeEvent<string>) => {
        dispatch(setType(event.target.value));
    };

    const handleApplyFilters = () => {
        dispatch(fetchMovies({ year: selectedYear, type: selectedType }));
    };

    const handleClearFilters = () => {
        dispatch(resetFilters());
        dispatch(fetchMovies({ year: '', type: '' }));
    };

    return (
        <Box className="filter-wrapper" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <span>Filters:</span>
            <FormControl  variant="outlined">
                <InputLabel>Year</InputLabel>
                <Select
                    value={selectedYear}
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

            <FormControl variant="outlined" sx={{ minWidth: 150 }}>
                <InputLabel>Type</InputLabel>
                <Select
                    value={selectedType}
                    onChange={handleTypeChange}
                    label="Type"
                    className="year-filter"
                >
                    <MenuItem value="movie">Movie</MenuItem>
                    <MenuItem value="series">Series</MenuItem>
                    <MenuItem value="episode">Episode</MenuItem>
                </Select>
            </FormControl>

            <Button
                variant="contained"
                color="primary"
                onClick={handleApplyFilters}
                disabled={!hasActiveFilters}
                className='filter-button'
            >
                Apply
            </Button>

            <Button
                variant="outlined"
                color="secondary"
                onClick={handleClearFilters}
                disabled={!hasActiveFilters}
                className='filter-button'
            >
                Clear Filters
            </Button>
        </Box>
    );
}
