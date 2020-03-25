import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
// import others from '../images/others.jpg'
import './main.css'
import $ from 'jquery'
import './media_query.css'
$( document ).ready(function() {
    $( ".othersCol" ).animate({

        height: '35vh',
      }, 1000, function() {
      });
    });

export default class Others extends Component {
    componentDidMount() {
        let nav_link_color = document.querySelector('.menu').style
        nav_link_color.backgroundColor = "#374147"
        document.body.style.backgroundImage = "linear-gradient(to right, #4EB1BA, whitesmoke, #4EB1BA)";
    }
    render() {
        return (

            <>

                {/* <h1 style={{ textAlign: 'center' }}>Let's Read About My Activities</h1> */}
                <div className='div' style={{marginTop:'7vh'}}>
                    <Row>
                        <Col className='othersCol'>
                            

                            <h3 className='headings'>Inter-College Tournament Winner</h3>
                            <p>- My team worked hard for winning this tournament and we played many games and quizzes</p>
                            <p>- For instance, Computer Games , Kabbadi , 800m Race and many more...</p>


                        </Col>
                        <Col className='othersCol'>
                            
                            <h3 className='headings'>JUDO</h3>
                            <p>- I also practiced JUDO for 2 years but didn't get to play further because of the 6 months rest i got due to a injury during the game</p>
                        </Col>
                    </Row>
                    <Row>

                        <Col className='othersCol'>
                            
                            <h3 className='headings'>WORKSHOPS</h3>
                            <p>- I attended several workshops on AI , some of them are from BLOCKCHAINS , IIT DELHI etc.</p>

                        </Col>
                        <Col className='othersCol'>
                            
                            <h3 className='headings' >DEBATES AND QUIZZES</h3>
                            <p>- During the School time , there were debates and quizzes every saturday to remove the hesitations from the students,so that they can talk freely in any environment. </p>
                        </Col>
                    </Row>
                    <Row>

                        <Col className='othersCol'>
                            
                            <h3 className='headings' >CANCER AWARENESS PARADE</h3>
                            <p>- This is the most recent activity ihave been into,we students from the college took part in this parade because we thought it was necessary for other people to be aware about this topic.</p>
                        </Col>
                        <Col className='othersCol'>
                            
                            <h3 className='headings'>CAPTAIN OF CRICKET TEAM</h3>
                            <p>- I played Cricket also in School and we had matches in every 2 months with other schools and when i was in 12th standard i was selected as the Captain of the team being the most senior in the team also and we won that last one.</p>

                        </Col>
                    </Row>
                </div> 

                
            </>

        )
    }
}