import './App.css';
import React from 'react';
import Home from './components/Home';
import './style/style.css';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  return (
    <>

      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </HashRouter>

    </>
  );
}

export default App;