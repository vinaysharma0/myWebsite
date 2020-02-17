import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import GIS from '../logos/gis.png'
import GTC from '../logos/gtc.png'
import BPIT from '../logos/bpit.png'
import all from '../images/all.jpg'
export default class Education extends Component {
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all}) no-repeat`;
    }
    render() {
        return (
            <div style={styles.div}>
                <Row>
                    <Col style={styles.col}>
                        <div style={styles.schoolLogo}><img src={GIS} style = {{width:'100%'}}/></div>
                        {/* <div style={{marginBottom:'2rem'}}> */}
                        <h3 style={styles.headings}>10TH</h3>
                        <p>Ganga International School</p>
                        <p>8.4 CGPA</p>
                        <p>2K13 - 2K14</p>
                        {/* </div> */}
                    </Col>
                    <Col style={styles.col}>
                    <div style={styles.schoolLogo}><img src={GTC} style = {{width:'100%'}}/></div>
                        <h3 style={styles.headings}>DIPLOMA</h3>
                        <p>Civl Engineering</p>
                        <p>Ganga Technical Campus</p>
                        <p>80%</p>
                        <p>2K16 - 2K19</p>
                    </Col>
                </Row>
                <Row>

                    <Col style={styles.col}>
                    <div style={styles.schoolLogo}><img src={GIS} style = {{width:'100%'}}/></div>
                        <h3 style={styles.headings}>11TH & 12TH</h3>
                        <p>Ganga International School</p>
                        <p>75%</p>
                        <p>2K14 - 2K16</p>
                    </Col>
                    <Col style={styles.col}>
                    <div style={styles.schoolLogo}><img src={BPIT} style = {{width:'100%'}}/></div>
                        <h3 style={styles.headings}>B.TECH</h3>
                        <p>Computer Science</p>
                        <p>Bhagwan Parshuram Institute of Technology</p>
                        <p>--PURSUING--</p>
                        <p>2K19 - 2K22</p>
                    </Col>
                </Row>
            </div>

        )
    }
}
const styles = {
    div: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
        top: '35%',
        transform: "translate(-50%,-30%)",
    },
    col: {
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '10%',
        textAlign: 'right',
        height: '20vh',
        width: '20vw',
        padding:'2rem',
        // backgroundColor:'whitesmoke'
        boxShadow:'3px 3px 4px 3px grey',
    },
    headings: {
        textShadow: '1px 5px whitesmoke'
    },
    schoolLogo:{
        width:'40%',
        height:'0',
        // marginTop:'1rem'
        // position:'absolute',
    }
}