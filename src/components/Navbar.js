import React, { Component } from 'react'
import Resume from './Resume.pdf'
import './main.css'
import { Nav } from 'react-bootstrap';
import './media_query.css'

export default class Navbar_ extends Component {

  render() {
    
    return (

      <div>
        {/* <Nav>

        
            <ul id="ulMain" className="ul">
            
           
            <li id = 'ig' className='li' ><a className="nav_link" href='./Others'>Others</a></li>
            <li id = 'ib' className='li' ><a  className="nav_link" href='./Contact'>Contact me</a></li>
            <li id = 'ig' className='li' ><a  className="nav_link" href={Resume} target = "_blank">Resume</a></li>
            <li id = 'ic' className='li' ><a  className="nav_link" href='/Projects'>Projects</a></li>
            <li id = 'id' className='li' ><a className="nav_link" href='./Education'>Education</a></li>
            <li id = 'ie' className='li' ><a className="nav_link" href='./Skills'>Skills</a></li>
            <li id = 'if' className='li' ><a className="nav_link" href='./About'>About</a></li>
            <li id = 'ig' className='li' ><a className="nav_link" href='/'>Home</a></li>
            
            </ul>

          
        </Nav> */}
        <div class="nav">
          <input type="checkbox" id="nav-check"/>
            <div class="nav-header">
              <div class="nav-title">
                Vinay Sharma
    </div>
            </div>
            <div class="nav-btn">
              <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>

            <div class="nav-links">
              
            <a className="nav_link" href='/'>Home</a>
            <a className="nav_link" href='./About'>About</a>
            <a className="nav_link" href='./Skills'>Skills</a>
            <a className="nav_link" href='./Education'>Education</a>
            <a  className="nav_link" href='/Projects'>Projects</a>
            <a  className="nav_link" href={Resume} target = "_blank">Resume</a>
            <a  className="nav_link" href='./Contact'>Contact me</a>
            <a className="nav_link" href='./Others'>Others</a>
            
            
            
            
            
            
            
            
            </div>
       
       </div>

       
       </div>
    )
      }
    
    }
