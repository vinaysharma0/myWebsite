import React, { Component } from 'react'
import Gitlogo from '../logos/github.png';
import Maillogo from '../logos/mail.png';
import Linkedinlogo from '../logos/linkedin.png';
import main from '../images/main.jpg'
//..............................................type writer animation ...........................................
let TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
};
//......................................................end..............................

export default class Home extends Component {
    componentWillMount() {
        document.body.style.background = `url(${main}) `;
        document.body.style.backgroundSize = 'cover';
        // document.body.style.width = '100%';
    }
    render() {
        return (
            <>
                <div>
                    <div style={styles.innerDiv}>

                        <h3 style={styles.heading_name_1}>Hey !, This is</h3>
                        <h1 style={styles.heading_name_2}>Vinay Sharma</h1>
                        <h1 style={styles.heading_name_3}>I am <span className="txt-rotate" data-period="2000" data-rotate='[ "a tech lover.", "interested in innovation.", "motivated by Mr. Sunder Pichai.", "Python & JS lover.", "fun!" ]'></span></h1>
                        <div style={{ display: 'inline-block' }}>
                            <a href="http://www.github.com/vinswalker"><img style={styles.icons} src={Gitlogo}></img></a>
                            <a href="mailto:svinay0488@gmail.com"><img style={styles.icons} src={Maillogo} /></a>
                            <a href="http://linkedin.com/in/vinay-sharma007"><img style={styles.icons} src={Linkedinlogo} /></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const styles = {
    innerDiv: {
        // backgroundColor:'tomato',

        position: 'absolute',
        top: '35%',
        textAlign: 'center',
        left: '50%',
        transform: 'translate(-50%,-40%)',

    },

    heading_name_1: {

        fontSize: '4vw',
        color: 'whitesmoke'
    },
    heading_name_2: {
        fontSize: '7vw',
        color: 'gold'
    },
    heading_name_3: {
        fontSize: '2vw',
        color: 'whitesmoke'
    },
    icons: {
        width: '3vw',
        // backgroundColor:'white',
        marginTop: '2vh',
        marginRight: '2vw'
    },
    //..................
    backImg: {
        width: '100%'
    }

}