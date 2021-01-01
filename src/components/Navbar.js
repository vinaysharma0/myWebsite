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
 
  
  render() {

    return (
      <>
<nav className="main_nav">
<a id="resp-menu" class="responsive-menu" href="#"><i class="fa fa-reorder"></i>Menu</a>    
   <ul class="menu">
   <li>  
     <a className="nav_link" href='/'>Home</a>
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
    )
  }

}
