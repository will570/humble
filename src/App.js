import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import Info from './Info';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/info' element={<Info/>} />
          <Route path='/' element= {<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
