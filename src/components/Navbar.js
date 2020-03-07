import React, { Component } from 'react'
import Resume from './Resume.pdf'
import './main.css'
import { Nav } from 'react-bootstrap';


export default class Navbar_ extends Component {

  render() {
    return (

      <div>
        <Nav>

          {/* <Row style={styles.nav_link_row}> */}
            {/* <div style={{position:'absolute',left:'2rem',top:'0.4rem',width:'2vw'}}><img style={{width:'100%'}} src={Mylogo}/></div> */}
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

          {/* </Row> */}
        </Nav>
      </div>

    )
  }

}
