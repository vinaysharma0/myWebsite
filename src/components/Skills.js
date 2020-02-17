import React, { Component } from 'react'
import Html from '../logos/html-5.png'
import Deep from '../logos/DeepL.png'
import Express from '../logos/express.png'
import JavaS from '../logos/JS.png'
import Machine from '../logos/Machine.png'
import Mongo from '../logos/mongo.png'
import Node from '../logos/node.png'
import Python from '../logos/python.png'
import React_ from '../logos/react.png'
import Css from '../logos/css.png'
import all from '../images/all.jpg'
export default class Skills extends Component {
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all}) no-repeat`;
    }
    render() {
        return (
            <div>
                <div style={styles.firstDiv}>
                    <h1 style={{ fontSize: '3rem' }}>Skills I have</h1>
                </div>
                <div style={styles.secondDiv}>
                    <div style={styles.col}>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Machine} />

                            <h3>Machine Learning</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Deep} />
                            <h3>Deep Learning</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Python} />
                            <h3>Python</h3>
                        </div>

                    </div>

                    <div style={styles.col}>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Html} />
                            <h3>HTML5</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Css} />
                            <h3>CSS3</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={JavaS} />
                            <h3>JavaScript</h3>
                        </div>
                    </div>

                    <div style={styles.col}>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={React_} />
                            <h3>ReactJS</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={React_} />
                            <h3>React Native</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Mongo} />
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                    <div style={styles.col}>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Express} />
                            <h3>ExpressJS</h3>
                        </div>
                        <div style={styles.smallDivs}>
                            <img style={{ width: '100%' }} src={Node} />
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const styles = {
    firstDiv: {
        textAlign: 'center',
        // backgroundColor:'tomato',
        // padding:'0.2rem'
    },
    secondDiv: {
        // backgroundColor: 'tomato',
        // display: 'flex',
        flexWrap: 'wrap',
        width: '50%',
        textAlign: 'center',
        position:'absolute',
        left:'25%',
        top:'20%',
        // transform:"translate('-20%,-30%')",
        
    },
    smallDivs: {
        // height: '0',

        width: '10%',
        // flex:'10',
        // float:'right',
        // display: 'flex',
        // justifyContent: 'space-around'
        margin: '0.4rem'
    },
    col: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // textAlign: 'center',
    }
}