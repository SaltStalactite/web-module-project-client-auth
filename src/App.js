import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriends';

function App() {
  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/friends'>
        <FriendsList />
      </Route>
      <Route path='/friends/add'>
        <AddFriend />
      </Route>
    </div>
  );
}

export default App;
