import React from 'react';

import { useSelector } from 'react-redux';
import { globalSel } from '../../store/global';
import Person from './components/Person';

const People = () => {
  const people = useSelector(globalSel.peopleSelector);

  return (
    people && (
      <ul>
        {people.map(person => {
          return <Person person={person} key={person.name} />;
        })}
      </ul>
    )
  );
};

export default People;
