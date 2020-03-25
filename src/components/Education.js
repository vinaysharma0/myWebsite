import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import GIS from '../logos/gis.png'
import GTC from '../logos/gtc.png'
import BPIT from '../logos/bpit.png'
import all from '../images/all.jpg'
import $ from 'jquery'
import './media_query.css'
import './Navbar'
$( document ).ready(function() {
    $( ".eduCol" ).animate({

        height: '25vh',
      }, 1000, function() {
      });
    });

export default class Education extends Component {
    constructor(){
        super()

    }
    
    componentDidMount() {
        document.body.style.backgroundImage = "linear-gradient(to right, #4EB1BA, whitesmoke, #4EB1BA)";
        document.body.style.margin = '0'
        let nav_link_color = document.querySelector('.menu').style
        nav_link_color.backgroundColor = "#374147"
        
        // console.log("hello i am N",n)
        
     
    }
    // With the element initially hidden, we can show it slowly:
    
            render() {
                // console.log(this.props)
                return (
                    <div className="eduDiv">
                        <Row>
                            <Col className="eduCol">
                                <div className="schoolLogo"><img src={GIS} style={{ width: '100%' }} /></div>
                                {/* <div style={{marginBottom:'2rem'}}> */}
                                <h3 >10TH</h3>
                                <p>Ganga International School</p>
                                <p>8.4 CGPA</p>
                                <p>2K13 - 2K14</p>
                                {/* </div> */}
                            </Col>
                            <Col className="eduCol" >
                                <div className="schoolLogo"><img src={GTC} style={{ width: '100%' }} /></div>
                                <h3 className="eduHeadings" >DIPLOMA</h3>
                                <p>Civl Engineering</p>
                                <p>Ganga Technical Campus</p>
                                <p>80%</p>
                                <p>2K16 - 2K19</p>
                            </Col>
                        </Row>
                        <Row>

                            <Col className="eduCol" >
                                <div className="schoolLogo"><img src={GIS} style={{ width: '100%' }} /></div>
                                <h3 className="eduHeadings">11TH & 12TH</h3>
                                <p>Ganga International School</p>
                                <p>75%</p>
                                <p>2K14 - 2K16</p>
                            </Col>
                            <Col className="eduCol" >
                                <div className="schoolLogo"><img src={BPIT} style={{ width: '100%' }} /></div>
                                <h3 className="eduHeadings">B.TECH</h3>
                                <p>Computer Science</p>
                                <p>BPIT</p>
                                <p>--PURSUING--</p>
                                <p>2K19 - 2K22</p>
                            </Col>
                        </Row>
                    </div>

                )
            }
        }
