import './App.css';
import React from 'react';
import Home from './components/Home';
import './style/style.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/git2' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;