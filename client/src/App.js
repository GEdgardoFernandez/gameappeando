import React from 'react';
import './App.css';
import Home from './Views/Home';
import { Routes, Route } from "react-router-dom"
import Landing from './Views/Landing';
function App() {
  return (

    <div className="App">
      <Routes>
        <Route estrict path='/' element={<Landing />} />
        <Route estrict path='/home' element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;
