import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { globalOp } from '../../store/global';

const People = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(globalOp.getPeople());
  }, [dispatch]);

  return <div>People</div>;
};

export default People;
