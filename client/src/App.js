import React from 'react';
import './App.css';
import Home from './Views/Home';
import { Routes, Route} from "react-router-dom"
import Landing from './Views/Landing';
import Genres from './Views/Genres';
import Plataforms from './Views/Plataforms';
import About from './Views/About';
import Details from './Views/Details';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route estrict path='/' element={<Landing />} />
        <Route estrict path='/home' element={<Home />} />
        <Route estrict path='/genres' element={<Genres /> } />
        <Route estrict path='/plataforms' element={<Plataforms />} />
        <Route estrict path='/details' element={<Details />} />
        <Route estrict path='/about' element={<About />} />
      </Routes>
    </div>

  );
}

export default App;
