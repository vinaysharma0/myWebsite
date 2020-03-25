import React, { Component } from 'react'
import Resume from './Resume.pdf'
import './main.css'
import { Nav } from 'react-bootstrap';
import './media_query.css'
import $ from 'jquery'


 
$(document).ready(function(){ 
	var touch 	= $('#resp-menu');
	var menu 	= $('.menu');
 
	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});
  
export default class Navbar_ extends Component {
  // myFunction =()=> {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }  

  render() {

    return (
      <>
<nav className="main_nav">
<a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i>Menu</a>    
   <ul class="menu">
   <li> <a className="nav_link" href='/'>Home</a>
   </li>
  <li ><a className="nav_link" href='./About'>About</a></li>
  <li><a className="nav_link" href='./Skills'>Skills</a>
  </li>
  <li> <a className="nav_link" href='./Education'>Education</a></li>
    <li><a  className="nav_link" href='/Projects'>Projects</a>
  </li>
  <li><a  className="nav_link" href={Resume} target = "_blank">Resume</a></li>
  <li><a  className="nav_link" href='./Contact'>Contact me</a></li>
  <li><a className="nav_link" href='./Others'>Others</a></li>
  </ul>
  </nav>
      </>
      /* <div class="nav">
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
          
          
          
          
          
          

     </div> */
    )
  }

}
