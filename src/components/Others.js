import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import others from '../images/others.jpg'
export default class Others extends Component {
    componentDidMount(){
        let ul = document.getElementById('ulMain').style
        ul.backgroundColor = '#2c393f'
        document.body.style.background = `url(${others}) no-repeat`;
        // document.body.style.backgroundRepeat = "no-repeat";
    }
    render() {
        return (
            <>
            <h1 style={{textAlign:'center'}}>Let's Read About My Activities</h1>
            <div style={styles.div}>
                <Row>
                    <Col style={styles.col}>
                        {/* <div style={styles.schoolLogo}><img src={GIS} style = {{width:'100%'}}/></div> */}
                        
                        <h3 style={styles.headings}>Inter-College Tournament Winner</h3>
                        <p>- My team worked hard for winning this tournament and we played many games and quizzes</p>
                        <p>- For instance, Computer Games , Kabbadi , 800m Race and many more...</p>
                        
                        
                    </Col>
                    <Col style={styles.col}>
                    {/* <div style={styles.schoolLogo}><img src={GTC} style = {{width:'100%'}}/></div> */}
                        <h3 style={styles.headings}>JUDO</h3>
                        <p>- I also practiced JUDO for 2 years but didn't get to play further because of the 6 months rest i got due to a injury during the game</p>
                    </Col>
                </Row>
                <Row>

                    <Col style={styles.col}>
                    {/* <div style={styles.schoolLogo}><img src={GIS} style = {{width:'100%'}}/></div> */}
                        <h3 style={styles.headings}>WORKSHOPS</h3>
                        <p>- I attended several workshops on AI , some of them are from BLOCKCHAINS , IIT DELHI etc.</p>
                        
                    </Col>
                    <Col style={styles.col}>
                    {/* <div style={styles.schoolLogo}><img src={BPIT} style = {{width:'100%'}}/></div> */}
                        <h3 style={styles.headings}>DEBATES AND QUIZZES</h3>
                        <p>- During the School time , there were debates and quizzes every saturday to remove the hesitations from the students,so that they can talk freely in any environment. </p>
                    </Col>
                </Row>
                <Row>

                    <Col style={styles.col}>
                    {/* <div style={styles.schoolLogo}><img src={GIS} style = {{width:'100%'}}/></div> */}
                        <h3 style={styles.headings}>CANCER AWARENESS PARADE</h3>
                        <p>- This is the most recent activity ihave been into,we students from the college took part in this parade because we thought it was necessary for other people to be aware about this topic.</p>
                    </Col>
                    <Col style={styles.col}>
                    {/* <div style={styles.schoolLogo}><img src={BPIT} style = {{width:'100%'}}/></div> */}
                        <h3 style={styles.headings}>CAPTAIN OF CRICKET TEAM</h3>
                        <p>- I played Cricket also in School and we had matches in every 2 months with other schools and when i was in 12th standard i was selected as the Captain of the team being the most senior in the team also and we won that last one.</p>
                        
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
        top: '35%',
        transform: "translate(-50%,-30%)",
        textAlign:'center'
    },
    col: {
        border: '1px solid white',
        marginBottom: '2rem',
        marginRight: '2rem',
        borderRadius: '10%',
        textAlign: 'center',
        height: '20vh',
        width: '20vw',
        padding:'2rem',
        // backgroundColor:'whitesmoke',
        boxShadow:'4px 4px 4px 1px',
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