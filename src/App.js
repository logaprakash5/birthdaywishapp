import './App.css';
import Main from './main/main';
import Login from './login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './home/home';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import React, { Component }  from 'react';
import Bday from './bday/bday.js'
import Uss from './uss/uss.js'
import Seeme from './balloon/balloon.js'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/wishes' element={<Bday/>}></Route>
        <Route path='/us' element={<Uss/>}></Route>
        <Route path='/seeme' element={<Seeme/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
