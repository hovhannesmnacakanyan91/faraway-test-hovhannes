import React from 'react';

import { Link, useSearchParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { globalOp } from '../../store/global';

import { PaginationItem, Pagination as MUIPagination } from '@mui/material';

const Pagination = ({ count }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const handleChange = () => dispatch(globalOp.getPeople(`https://swapi.dev/api/people?page=${page}`));

  return (
    <MUIPagination
      color='primary'
      page={page ? +page : 1}
      count={Math.round(count / 10)}
      onChange={handleChange}
      renderItem={item => (
        <PaginationItem component={Link} color='primary' to={`/people?page=${item.page}`} {...item} />
      )}
    />
  );
};

export default Pagination;
