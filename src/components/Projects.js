import React, { Component } from 'react'
import all from '../images/all.jpg';
import { Col, Row } from 'react-bootstrap';
import Netflix from '../images/Netflix.png'
import Social from '../images/SocialNetwork.png'
import Churn from '../images/Churn.png'
import Position from '../images/Position.png'
import Google from '../images/GoogleStock.jpg'
import BrainStorm from '../images/BRAINSTORM_logo.png'
export default class Projects extends Component {
    componentDidMount() {
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${all})`;
        // document.body.style.backgroundSize = "cover";
    }
    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>PROJECTS</h1>

                <div style={styles.div}>

                    <Row>
                        <Col style={styles.col}>
                            <div style={styles.Social} ><img src={Netflix} style={styles.schoolLogo} style = {{width:'100%'}}/></div>

                            <h3 style={styles.headings}>NETFLIX RECOMMENDATION SYSTEM</h3>
                            <p>- It was designed using python and is the first project that i worked on while learning python.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used</span> :- Pandas , Matplotlib , Sklearn , etc.</p>


                        </Col>
                        <Col style={styles.col}>
                            <div style={styles.Social}><img src={Churn} style = {{width:'100%'}}/></div>
                            <h3 style={styles.headings}>CHURN MODELLING (ANN)</h3>
                            <p>- An Artificial Neural Network Project in which i used deep learning techniques to find out which customer of bank is going to exit as per the parameters given in the dataset.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas , Matplotlib , keras , tensorflow , GridSearchCV ,etc.</p>
                        </Col>
                        <Col style={styles.lastCol}>
                            {/* <div style={styles.schoolLogo}><img src={BPIT} style = {{width:'100%'}}/></div> */}
                            <h3 style={styles.headings}>MISCELLANEOUS PROJECTS</h3>
                            <p>-<span style={{fontWeight:'bold'}}> Mall Customers - </span> Clustering of Customers spending money in the mall. </p>
                            <p>-<span style={{fontWeight:'bold'}}> InstaChat - </span>Copy of Instagram made by using the JS library ReactJS.</p>
                            <p>-<span style={{fontWeight:'bold'}}> Cat & Dog Classification - </span>Using CNN , The image was classified between Dog & Cat.</p>
                            <p>-<span style={{fontWeight:'bold'}}> Restaurant Reviews - </span>Natural Language Processing was used extract the good and bad reviews that was given by the customers of a Restaurant.</p>

                        </Col>

                    </Row>
                    <Row>

                        <Col style={styles.col}>
                            <div style={styles.Social}><img src={BrainStorm} style = {{width:'100%'}}/></div>
                            <h3 style={styles.headings}>BRAINSTORM</h3>
                            <p>- BrainStorm is a notes app which i developed recently for Maharishi Dayanand University to be able for students to get notes and other material for studies.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used</span> :- JavaScript , ReactNative , CSS3 , Firebase etc.</p>

                        </Col>
                        <Col style={styles.col}>
                            <div style={styles.Social}><img src={Google} style = {{width:'100%'}}/></div>
                            <h3 style={styles.headings}>GOOGLE STOCK PRICE PREDICTION</h3>
                            <p>- I got Google Stock Data from Yahoo Finance and tried to predict the stock price for the next day. I first trained data for 1 year (2017) and then tried on data from 2012 - 2016.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Keras , tensorflow , Matplotlib , RNN , etc.</p>
                        </Col>
                    </Row>
                    <Row>

                        <Col style={styles.col}>
                            <div style={styles.Social}><img src={Social} style = {{width:'100%'}}/></div>
                            <h3 style={styles.headings}>SOCIAL NETWORK ADDS CLASSIFIER</h3>
                            <p>- I had a dataset in which there were 10 types of different adds (can be of any company, totally depends on what you think). I had to classify which add will have most effect on Social Media when it will be live.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Matplotlib ,Sklearn , RandomForestClassifier etc.</p>
                        </Col>
                        <Col style={styles.col}>
                            <div style={styles.Social}><img src={Position} style = {{width:'100%'}}/></div>
                            <h3 style={styles.headings}>POSITION SALARIES PREDICTION</h3>
                            <p>- There was 10 diiferent Positions of the company from the salesman to the President and what we had to do is predict the Salary of the person comes to the company for the specific job and finds out if his demands for salary for his position in right or just a bluff.</p>
                            <p><span style={{fontWeight:'bold'}}> Libraries used </span>:- Pandas ,Regression , Sklearn , Matplotlib , Seaborn , RandomForestRegressor , DecisionTreeRegressor , etc.</p>
                        </Col>

                    </Row>

                </div>

            </>
        )
    }
}
const styles = {
    div: {
        display: 'flex',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: "translate(-50%,-30%)",
        textAlign: 'center',
    },
    col: {
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '10%',
        textAlign: 'center',
        height: '40vh',
        width: '25vw',
        padding: '2rem',
        boxShadow: '3px 3px 4px 3px grey',
    },
    headings: {
        textShadow: '1px 5px whitesmoke',

    },
    lastCol: {
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '10%',
        textAlign: 'center',
        position: 'absolute',
        height: '25vh',
        width: '60vw',
        padding: '2rem',
        left: '15vw',
        boxShadow: '3px 3px 4px 3px grey',
    },
    brainstorm:{
        height:'10vh',
        width:'10vw',
        marginBottom:'10vh',
    },
    Social:{
        // height:'20vh',
        width:'20vw'
    },

}