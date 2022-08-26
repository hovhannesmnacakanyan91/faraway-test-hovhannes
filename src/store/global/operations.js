import { globalSlice } from './globalSlice';
import { fetch } from '../../services';

const getPeople = (url = `https://swapi.dev/api/people`) => {
  const { getPeople } = globalSlice.actions;

  return async dispatch => {
    dispatch(getPeople({}));
    try {
      const { data } = await fetch({
        url,
        method: 'GET',
      });

      dispatch(getPeople(data));
    } catch (error) {
      console.log(error);
    }
  };
};

const getPerson = id => {
  const { getPerson } = globalSlice.actions;
  return async dispatch => {
    dispatch(getPerson({}));
    try {
      const { data } = await fetch({
        url: `https://swapi.dev/api/people/${id}`,
        method: 'GET',
      });

      dispatch(getPerson(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const globalOp = {
  getPeople,
  getPerson,
};
