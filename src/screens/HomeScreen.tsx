import React from 'react';
import { useHistory } from 'react-router-dom';
import { Home } from '../scenes';

const HomeScreen: React.FC = () => {
  const history = useHistory();

  function handleCreateUser() {
    history.push('/createUser');
  }

  return <Home onCreateUser={handleCreateUser} />;
};

export default HomeScreen;
