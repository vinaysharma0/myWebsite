import React, { Component } from 'react'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import {BrowserRouter, HashRouter,Redirect, Route, Switch} from 'react-router-dom';
import Others from './Others';
import { Link, NavLink } from 'react-router-dom';

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
          
  
            
            <Route path="/" exact component={Home} />
            <Route path="/About"  component={About} />
            <Route path="/Contact" component={Contact} />
            
            <Route path="/Skills" component={Skills} />
            <Route path="/Education" component={Education} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Others" component={Others} />
            <Redirect to='/'/>  
     
            </HashRouter>
        )
    }
}
