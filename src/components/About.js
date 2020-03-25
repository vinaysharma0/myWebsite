import React, { Component } from 'react'
import vinay from '../images/vinay_about.jpg'
import all from '../images/all.jpg'
import './main.css'
import './media_query.css'
import './Navbar'
export default class About extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        let nav_link_color = document.querySelector('.menu').style
        nav_link_color.backgroundColor = "#374147"
        document.body.style.backgroundImage = "linear-gradient(to right, #4EB1BA, whitesmoke, #4EB1BA)";
    }
    render() {
        return (
            <div className='outerDiv'>
                {/* Text */}
                <div className='firstDiv'>
                    <p className="text-focus-in">Hey! There</p>
                    <p className='para'>
                        I am Vinay Sharma , I am 21 and the first thing that every techy will say that i love technology and the code behind them. 
                        I am currently pursuing my B.tech in Computer Science from BHAGWAN PARSHURAM INSTITUTE OF TECHNOLOGY which is affiliated by GURUGOBIND SINGH INDRAPRASTHA UNIVERSITY (GGSIPU).I live in Delhi,India. My hobbies are listening to music , i also play volleyball and cricket. I won state championship of volleyball with the 1st prize.I pursued my Diploma in Civil Engineering but that didn't work out for me because i have always been the computer guy.
                        Everything starts with something
                        Everything thats happening had an inspiration so did i

                        when i first used Google Assistant , i had no idea how it was working and i really got so excited and i wanted to know how it worked and how it was replying to me and thats what got me into this field and then i decided to go in AI and started learning.
                        <br />
                        I guess this would be enough.
                        <br />Thank you !</p>
                </div>
                {/* <hr className='betSpan'></hr> */}
                {/* Image */}
                <div className='secondDiv'>
                    <img className="tilt-in-fwd-tr" style={{ width: '100%' }} src={vinay} />
                </div>
            </div>
        )
    }
}
