  import React from 'react';
  import Navbar from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import Contact from './components/Contact';
  import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

  function App() {
    return (
      <div className="App">
        <BrowserRouter>
    {/* <Signup/> */}
        <Routes>
          {/* <Route path='/' element={<Signup/>}/> */}
          <Route path='/' element={<Home/>}/>
          
          <Route path='/Service' element={<Service/>}/>
          <Route path='/Contact'element={<Contact/>}/>
        </Routes>
        </BrowserRouter>
    
    
      </div>
    );
  }

  export default App;
