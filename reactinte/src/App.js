import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Counter} from './basic/Counter.jsx'
import {UserList} from './basic/UserList.jsx'

function App() {
  return (
    <div>
    <Counter/>
    <UserList/>
    </div>
  );
}

export default App;
