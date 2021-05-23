import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <div>
      <AuthWrapper>
      <Router>
        <Switch>
        <PrivateRoute exact path='/'> 
        <Dashboard></Dashboard>
      </PrivateRoute>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='*'>
        <Error  />
      </Route>
      </Switch>
      </Router>
      </AuthWrapper>
    </div>
  );
}

export default App;
