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
    
    <Navbar_ />
    <HashRouter  >
    <NavLink tag={Link} to="./About" >About</NavLink>
    <NavLink tag={Link} to="./Contact" >Contact</NavLink>
    <NavLink tag={Link} to="./Skills" >Skills</NavLink>
    <NavLink tag={Link} to="./Others" >Others</NavLink>
    
                
        <Route path="/" exact component={Home} />
        <Route path="/About"  component={About} />
        <Route path="/Contact" component={Contact} />
        
        <Route path="/Skills" component={Skills} />
        <Route path="/Education" component={Education} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Others" component={Others} />
        {/* <Redirect to='/'/>   */}
    
        </HashRouter>
        
        
    
   </div>
  );
}

export default App;
