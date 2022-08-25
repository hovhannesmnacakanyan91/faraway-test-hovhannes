import { globalSlice } from './globalSlice';
import { fetch } from '../../services';

const getPeople = (url = `https://swapi.dev/api/people`) => {
  const { getPeople } = globalSlice.actions;

  return async dispatch => {
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

export const globalOp = {
  getPeople,
};
