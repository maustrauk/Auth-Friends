import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path='/login' component={Login}/>
              <PrivateRoute exact path='/friendsList' component={FriendsList} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
