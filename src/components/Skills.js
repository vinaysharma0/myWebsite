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
import './media_query.css'
export default class Skills extends Component {
    componentDidMount() {
        let nav_link_color = document.querySelector('.menu').style
        nav_link_color.backgroundColor = "#374147"
        document.body.style.backgroundImage = "linear-gradient(to right, #4EB1BA, whitesmoke, #4EB1BA)";
        // document.body.style.backgroundSize = 'cover';
    }
    render() {
        return (
            <div>
                
                <div  className="secondDivSkills">
                    <div  className="colSkills">
                        <div  className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Machine} />

                            <h3 className="skills_name">Machine Learning</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Deep} />
                            <h3 className="skills_name">Deep Learning</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Python} />
                            <h3 className="skills_name">Python</h3>
                        </div>

                    </div>

                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Html} />
                            <h3 className="skills_name">HTML5</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Css} />
                            <h3 className="skills_name">CSS3</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={JavaS} />
                            <h3 className="skills_name">JavaScript</h3>
                        </div>
                    </div>

                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={React_} />
                            <h3 className="skills_name">ReactJS</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={React_} />
                            <h3 className="skills_name">React Native</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Mongo} />
                            <h3 className="skills_name">MongoDB</h3>
                        </div>
                    </div>
                    <div  className="colSkills">
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Express} />
                            <h3 className="skills_name">ExpressJS</h3>
                        </div>
                        <div className="smallDivsSkills">
                            <img style={{ width: '100%' }} src={Node} />
                            <h3 className="skills_name">NodeJS</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
