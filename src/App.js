import React from 'react';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import Navbar_ from './components/Navbar';

function App() {
  
  return (
    
    <BrowserRouter>
      <div>

        <Navbar_ />
        
        <Router basename="vinswalker/components" />

      </div>
    </BrowserRouter>
  );
}

export default App;
