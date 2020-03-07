import React, { Component } from 'react'
import {Row,Col } from 'react-bootstrap'
import Gitlogo from '../logos/github.png';
import Maillogo from '../logos/mail.png';
import Linkedinlogo from '../logos/linkedin.png';
import { Link, Redirect,useHistory } from "react-router-dom";
import all from '../images/all.jpg'
import './main.css'
export default class Contact extends Component {
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all}) no-repeat`;
       
    }
    constructor(props) {
        super(props);
    }
   
    render() {
        
        return (
            
            <div>
                <Row className="upperRowCont">
                <div  className="upperDivCont">
                    <h1>Let's Talk</h1>
                </div>
                <div>
            <p  className="paraCont">
                I love getting along with new people.
                I get to know them , their skills and talent.</p>
                <p  className="paraCont">
                Just click on the icons below to get to me !
            </p>
                </div>
                </Row>
                <Row  className="upperRowCont">
                <div style={{ display: 'inline-block' }}>
                        <a href="http://www.github.com/vinswalker"><img  className="iconsCont" src={Gitlogo}></img></a>
                        <a href="mailto:svinay0488@gmail.com"><img className="iconsCont" src={Maillogo} /></a>
                        <a href="http://linkedin.com/in/vinay-sharma007"><img className="iconsCont" src={Linkedinlogo} /></a>
                    </div>
                </Row>
            </div>
        );
    }
}
