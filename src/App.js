  import React from 'react';
  import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
  import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact'element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    
    
      </div>
    );
  }

  export default App;
