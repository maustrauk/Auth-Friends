import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './forms/Login';
import FriendsList from './components/FriendsList';
import NewFriendForm from './forms/NewFriendForm';

import PrivateRoute from './components/PrivateRoute';

function App() {

  return (
    <div className="App">
        <Router>
          <Switch>
              <Route exact path='/login' component={Login}/>
              <PrivateRoute exact path='/friendsList' component={FriendsList} />
              <PrivateRoute exact path='/newFriend' component={NewFriendForm} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
