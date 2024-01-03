import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Final from './Components/Final';
import Abott from './Components/Abott';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Final/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Abott' element={<Abott/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
