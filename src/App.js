import React from 'react';
import Router from './components/Router';
import {BrowserRouter} from 'react-router-dom';
import Navbar_ from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div>
      {/* <Login /> */}
      
      <Navbar_ />
      
      <Router />

    </div>
    </BrowserRouter>
  );
}

export default App;
