import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './component/main/main';
import Login from './component/login/login';
import Signup from './component/signUp/signUp';
import Cart from './component/cart/cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
