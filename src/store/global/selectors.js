import { createSelector } from 'reselect';

const globalSelector = state => state.global;
const peopleSelector = createSelector([globalSelector], global => global.people);

export const globalSel = {
  globalSelector,
  peopleSelector,
};
