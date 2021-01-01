import React from 'react';
import Router from './components/Router';
import { HashRouter,BrowserRouter,Redirect, Link, Route, Switch, NavLink } from 'react-router-dom';
import Navbar_ from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Others from './components/Others';


function App() {
  
  return (
    
    <div>
    
    
   <>
    <Navbar_ />
    <Router/>
   </>
    
   </div>
  );
}

export default App;
