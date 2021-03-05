import React from 'react';
import { useHistory } from 'react-router-dom';
import fs from 'fs';
import { UserForm } from '../scenes';

const CreateUserScreen: React.FC = () => {
  const history = useHistory();

  function handleGoBack() {
    history.goBack();
  }

  function createUser() {
    fs.writeFileSync('./test.txt', 'hello-world');
  }

  return <UserForm onGoBack={handleGoBack} onSubmit={createUser} />;
};

export default CreateUserScreen;
