import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriends';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <nav>
          <Link to='/'> Login </Link>
          <Link to='/friends'> Friends </Link>
          <Link to='/friends/add'> Add Friends </Link>
          <Link to='/logout'> Logout </Link>
        </nav>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        <Route exact path='/friends/add'>
          <AddFriend />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
