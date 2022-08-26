import { createSelector } from 'reselect';

const globalSelector = state => state.global;
const peopleSelector = createSelector([globalSelector], global => global.people);
const personSelector = createSelector([globalSelector], global => global.person);

export const globalSel = {
  globalSelector,
  peopleSelector,
  personSelector,
};
