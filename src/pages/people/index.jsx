import React from 'react';

import { useSelector } from 'react-redux';
import { globalSel } from '../../store/global';
import Person from './components/Person';
import AppTable from './components/Table';

const People = () => {
  const people = useSelector(globalSel.peopleSelector);

  return (
    people && (
      <>
        <ul>
          {people.map(person => {
            return <Person person={person} key={person.name} />;
          })}
        </ul>
        <AppTable />
      </>
    )
  );
};

export default People;
