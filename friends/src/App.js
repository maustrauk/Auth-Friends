import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserDataContext } from './contexts/UserDataContext';

import Login from './components/Login';

function App() {

  const [userData, setUserData] = useState({username: "", password: ""});
  
  const submitHandler = () => {

  }

  return (
    <div className="App">
      <UserDataContext.Provider value={[userData, setUserData, submitHandler]}>
        <Router>
          <Switch>
              <Route exact path='/' component={Login}/>
          </Switch>
        </Router>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
