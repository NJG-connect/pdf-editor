import People from '../types/people';

function selectPeople(peoples: People[]) {
  return peoples.map(
    (people) =>
      `${people.propriétaire}-${people.immatrucalation}-${people.modele}`
  );
}

// eslint-disable-next-line import/prefer-default-export
export { selectPeople };
