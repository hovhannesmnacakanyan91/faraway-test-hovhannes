import { globalSlice } from './globalSlice';
import { fetch } from '../../services';

const getPeople = () => {
  const { getPeople } = globalSlice.actions;

  return async dispatch => {
    try {
      const { results } = await fetch({
        url: `https://swapi.dev/api/people`,
        method: 'GET',
      });

      dispatch(getPeople(results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const globalOp = {
  getPeople,
};
