import React, { Component } from 'react'
import vinay from '../images/vinay_about.jpg'
import all from '../images/all.jpg'


export default class About extends Component {
    constructor() {
        super();
    }
componentDidMount(){
    let ul = document.getElementById('ulMain').style
    ul.backgroundColor = '#2c393f'
    document.body.style.background = `url(${all}) no-repeat`;
}
    render() {
        return (
            <div style={styles.outerDiv}>
                {/* Text */}
                <div style={styles.firstDiv}>
                    <p style={{ fontSize: '2rem' ,fontWeight:'bold'}}>Hey! There</p>
                    <p id="input" style={styles.para}>
                        I am Vinay Sharma , I am 21 and the first thing that every techy will say that i love technology and the code behind them. i am currently pursuing my B.tech in Computer Science from BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY which is affiliated by GURUGOBIND SINGH INDRAPRASTHA UNIVERSITY (GGSIPU).I live in Delhi,India. My hobbies are listening to music , i also play volleyball and cricket. I won state championship of volleyball with the 1st prize.I pursued my Diploma in Civil Engineering but that didn't work out for me because i have always been the computer guy.
                        Everything starts with something
                        Everything thats happening had an inspiration so did i

                        when i first used Google Assistant , i had no idea how it was working and i really got so excited and i wanted to know how it worked and how it was replying to me and thats what got me into this field and then i decided to go in AI and started learning.
                        <br />
                        I guess this would be enough.
                        <br />Thank you !</p>
                </div>
                <hr style={styles.betSpan}></hr>
                {/* Image */}
                <div style={styles.secondDiv}>
                    <img style={{ width: '100%' }} src={vinay} />
                </div>
            </div>
        )
    }
}
const styles = {
    firstDiv: {
        marginRight: '40px',
        width: '100%'
    },
    secondDiv: {
        // backgroundColor:'tomato',
        width: '100% ',
        height: '100%',
        marginLeft: '40px',
        marginTop: '5rem',
        background: 'cover'
    },
    outerDiv: {
        // backgroundColor:'tomato',
        display: 'flex',
        width: '50vw',
        position: 'absolute',
        top: '50%',
        left: '50%',
        textAlign: 'center',
        transform: 'translate(-50%,-50%)'
    },
    para:{
        textAlign: 'justify',
        lineHeight: '2rem',
        fontWeight:'bold'
    }

}