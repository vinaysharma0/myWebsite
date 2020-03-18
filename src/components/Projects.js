import React, { Component } from 'react'
import all from '../images/all.jpg';
import { Col, Row } from 'react-bootstrap';
import Netflix from '../images/Netflix.png'
import Social from '../images/SocialNetwork.png'
import Churn from '../images/Churn.png'
import Position from '../images/Position.png'
import Google from '../images/GoogleStock.jpg'
import BrainStorm from '../images/BRAINSTORM_logo.png'
import $ from 'jquery'
import './media_query.css'


$( document ).ready(function() {
    $( ".projectCol" ).animate({
        height: '50vh',
      }, 1000
)});
export default class Projects extends Component {
    componentDidMount() {
        
        document.body.style.backgroundImage = "linear-gradient(to right, #4EB1BA, whitesmoke, #4EB1BA)";
        // document.body.style.backgroundSize = "cover";
    }
    render() {
        return (
            <>

                <div className= "projectDiv">

                    <Row>
                        <Col className = "projectCol">
                            <div className="Social" ><img src={Netflix} style = {{width:'100%'}}/></div>

                            <h3 className = "projectHeadings" >NETFLIX RECOMMENDATION SYSTEM</h3>
                            <p>- It was designed using python and is the first project that i worked on while learning python.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used</span> :- Pandas , Matplotlib , Sklearn , etc.</p>


                        </Col>
                        <Col  className = "projectCol">
                            <div  className="Social"><img src={Churn} style = {{width:'100%'}}/></div>
                            <h3 className = "projectHeadings">CHURN MODELLING (ANN)</h3>
                            <p>- An Artificial Neural Network Project in which i used deep learning techniques to find out which customer of bank is going to exit as per the parameters given in the dataset.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas , Matplotlib , keras , tensorflow , GridSearchCV ,etc.</p>
                        </Col>
                        

                    </Row>
                    <Row>

                        <Col  className = "projectCol">
                            <div className="Social"><img src={BrainStorm} style = {{width:'100%'}}/></div>
                            <h3  className = "projectHeadings">BRAINSTORM</h3>
                            <p>- BrainStorm is a notes app which i developed recently for Maharishi Dayanand University to be able for students to get notes and other material for studies.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used</span> :- JavaScript , ReactNative , CSS3 , Firebase etc.</p>

                        </Col>
                        <Col  className = "projectCol">
                            <div  className="Social"><img src={Google} style = {{width:'100%'}}/></div>
                            <h3  className = "projectHeadings">GOOGLE STOCK PRICE PREDICTION</h3>
                            <p>- I got Google Stock Data from Yahoo Finance and tried to predict the stock price for the next day. I first trained data for 1 year (2017) and then tried on data from 2012 - 2016.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Keras , tensorflow , Matplotlib , RNN , etc.</p>
                        </Col>
                    </Row>
                    <Row>

                        <Col  className = "projectCol">
                            <div  className="Social"><img src={Social} style = {{width:'100%'}}/></div>
                            <h3  className = "projectHeadings">SOCIAL NETWORK ADDS CLASSIFIER</h3>
                            <p>- I had a dataset in which there were 10 types of different adds (can be of any company, totally depends on what you think). I had to classify which add will have most effect on Social Media when it will be live.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Matplotlib ,Sklearn , RandomForestClassifier etc.</p>
                        </Col>
                        <Col  className = "projectCol">
                            <div  className="Social"><img src={Position} style = {{width:'100%'}}/></div>
                            <h3  className = "projectHeadings">POSITION SALARIES PREDICTION</h3>
                            <p>- There was 10 diiferent Positions of the company from the salesman to the President and what we had to do is predict the Salary of the person comes to the company for the specific job and finds out if his demands for salary for his position in right or just a bluff.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Regression , Sklearn , Matplotlib , Seaborn , RandomForestRegressor , DecisionTreeRegressor , etc.</p>
                        </Col>
                        <Col className =" projectCol">
                            {/* <div style={styles.schoolLogo}><img src={BPIT} style = {{width:'100%'}}/></div> */}
                            <h3 className = "projectHeadings">MISCELLANEOUS PROJECTS</h3>
                            <p>-<span style={{fontWeight:'bold'}}> Mall Customers - </span> Clustering of Customers spending money in the mall. </p>
                            <p>-<span style={{fontWeight:'bold'}}> InstaChat - </span>Copy of Instagram made by using the JS library ReactJS.</p>
                            <p>-<span style={{fontWeight:'bold'}}> Cat & Dog Classification - </span>Using CNN , The image was classified between Dog & Cat.</p>
                            <p>-<span style={{fontWeight:'bold'}}> Restaurant Reviews - </span>Natural Language Processing was used extract the good and bad reviews that was given by the customers of a Restaurant.</p>

                        </Col>

                    </Row>

                </div>

            </>
        )
    }
}
