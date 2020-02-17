import React, { Component } from 'react'
import Resume from './Resume.pdf'

import { Nav } from 'react-bootstrap';


export default class Navbar_ extends Component {

  render() {
    return (

      <div>
        <Nav>

          {/* <Row style={styles.nav_link_row}> */}
            {/* <div style={{position:'absolute',left:'2rem',top:'0.4rem',width:'2vw'}}><img style={{width:'100%'}} src={Mylogo}/></div> */}
            <ul id ='ulMain' style={styles.ul}>
            
           
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ig' className='i' style={{float:'right'}}><a style={styles.nav_link} href='./Others'>Others</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ib' className='i' style={{float:'right'}}><a style={styles.nav_link} href='./Contact'>Contact me</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ig' className='i' style={{float:'right'}}><a style={styles.nav_link} href={Resume} target = "_blank">Resume</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ic' className='i' style={{float:'right'}}><a style={styles.nav_link} href='/Projects'>Projects</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'id' className='i' style={{float:'right'}}><a style={styles.nav_link} href='./Education'>Education</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ie' className='i' style={{float:'right'}}><a style={styles.nav_link} href='./Skills'>Skills</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'if' className='i' style={{float:'right'}}><a style={styles.nav_link} href='./About'>About</a></li>
            <li onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} id = 'ig' className='i' style={{float:'right'}}><a style={styles.nav_link} href='/'>Home</a></li>
            
            </ul>

          {/* </Row> */}
        </Nav>
      </div>

    )
  }

}
const styles = {
  ul:{
    listStyleType: 'none',
    height:'6vh',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    // backgroundColor:' #2c393f',
    // textAlign:'right'
  },
nav_link:{
  // backgroundColor:'blue',
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '2vh 1vw',
  textDecoration: 'none',
  fontWeight:'bold'
}

}
