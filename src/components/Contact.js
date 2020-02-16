import React, { Component } from 'react'
import {Row,Col } from 'react-bootstrap'
import Gitlogo from '../logos/github.png';
import Maillogo from '../logos/mail.png';
import Linkedinlogo from '../logos/linkedin.png';
import { Link, Redirect,useHistory } from "react-router-dom";
import all from '../images/all.jpg'

export default class Contact extends Component {
    // git=()=> {
    //     let path = `www.google.com`;
        
    //     history.push(path);
    //   }
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all}) no-repeat`;
       
    }
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
          }
    }
   
    render() {
        
        return (
            
            <div>
                <Row style={styles.upperRow}>
                <div style={styles.upperDiv}>
                    <h1>Let's Talk</h1>
                </div>
                <div>
            <p style={styles.para}>
                I love getting along with new people.
                I get to know them , their skills and talent.</p>
                <p style={styles.para}>
                Just click on the icons below to get to me !
            </p>
                </div>
                </Row>
                <Row style={styles.upperRow}>
                <div style={{ display: 'inline-block' }}>
                        <a href="http://www.github.com/vinswalker"><img style={styles.icons} src={Gitlogo}></img></a>
                        <a href="mailto:svinay0488@gmail.com"><img style={styles.icons} src={Maillogo} /></a>
                        <a href="http://linkedin.com/in/vinay-sharma007"><img style={styles.icons} src={Linkedinlogo} /></a>
                    </div>
                </Row>
            </div>
        );
    }
}

const styles={
    upperRow:{
        textAlign:'center',
    },
    upperDiv:{
        textAlign:'center',
        fontSize:'3rem'
    },
    icons: {
        width: '3vw',
        marginTop: '2vh',
        marginRight: '2vw'
    },
    para:{
        fontSize:'1.5rem'
    }
}
