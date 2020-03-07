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
import './main.css'
export default class Skills extends Component {
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all}) no-repeat`;
        // document.body.style.backgroundSize = 'cover';
    }
    render() {
        return (
            <div>
                <div className="firstDivSkills">
                    <h1 className="skillhead">Skills I have</h1>
                </div>
                <div  className="secondDivSkills">
                    <div  className="colSkills">
                        <div  className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Machine} />

                            <h3>Machine Learning</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Deep} />
                            <h3>Deep Learning</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Python} />
                            <h3>Python</h3>
                        </div>

                    </div>

                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Html} />
                            <h3>HTML5</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Css} />
                            <h3>CSS3</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={JavaS} />
                            <h3>JavaScript</h3>
                        </div>
                    </div>

                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={React_} />
                            <h3>ReactJS</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={React_} />
                            <h3>React Native</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Mongo} />
                            <h3>MongoDB</h3>
                        </div>
                    </div>
                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Express} />
                            <h3>ExpressJS</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Node} />
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
