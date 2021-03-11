import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import path from 'path';
import fs from 'fs';
import { Home } from '../scenes';
import { selectPeople } from '../utils/peopleFormat';
import People from '../types/people';

const HomeScreen: React.FC = () => {
  const history = useHistory();
  const [peoples, setPeoples] = useState<People[]>([]);
  const peopleFormat = useMemo(
    () => (peoples.length ? selectPeople(peoples) : []),
    [peoples]
  );

  useEffect(() => {
    (() => {
      const bddPath = path.join(__dirname, './../.data.json');
      try {
        if (!fs.existsSync(bddPath)) {
          fs.writeFileSync(bddPath, JSON.stringify([]));
        }
      } catch (err) {
        fs.writeFileSync(bddPath, JSON.stringify([]));
      } finally {
        const data = JSON.parse(fs.readFileSync(bddPath, 'utf8'));
        setPeoples(data);
      }
    })();
  }, []);

  function handleCreateUser() {
    history.push('/createUser');
  }
  function handleUpdateUser(indexPeopleUpdate: number) {
    history.push('/createUser', { indexPeopleUpdate });
  }

  return (
    <Home
      onCreateUser={handleCreateUser}
      onUpdateUser={handleUpdateUser}
      peopleSelect={peopleFormat}
    />
  );
};

export default HomeScreen;
