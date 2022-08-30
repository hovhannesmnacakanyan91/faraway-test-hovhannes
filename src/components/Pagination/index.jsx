import React, { useEffect } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { globalOp } from '../../store/global';

import { PaginationItem, Pagination as MUIPagination } from '@mui/material';

let prevPage = null;

const Pagination = ({ count }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    if (prevPage !== page) {
      dispatch(globalOp.getPeople(`https://swapi.dev/api/people?page=${page ? +page : 1}`));
      prevPage = page;
    }
  }, [page]);

  return (
    <MUIPagination
      color='primary'
      page={page ? +page : 1}
      count={Math.round(count / 10)}
      renderItem={item => (
        <PaginationItem component={Link} color='primary' to={`/people?page=${item.page}`} {...item} />
      )}
    />
  );
};

export default Pagination;
