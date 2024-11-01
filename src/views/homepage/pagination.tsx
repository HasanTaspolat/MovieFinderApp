import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { selectTotalPages } from '../../redux/slices/moviesSlice';
import { setPage } from '../../redux/slices/paginationSlice';

export default function PaginationComponent() {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);

  const handleChange = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setPage(page));
  };

  return (
    <Stack spacing={2} className="pagination">
      <Pagination
        count={totalPages}
        onChange={handleChange}
        sx={{
          '.MuiPaginationItem-root': {
            color: 'white',
            borderColor: 'white',
          },
          '.MuiPaginationItem-root.Mui-selected': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      />
    </Stack>
  );

}