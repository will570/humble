import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
// import SwipeButtons from './SwipeButtons';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/chat' element={<h1>chat pg</h1>} />
          <Route path='/' element= {<TinderCards />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
