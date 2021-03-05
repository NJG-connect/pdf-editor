import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CreateUserScreen, HomeScreen } from './screens';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/createUser" component={CreateUserScreen} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
