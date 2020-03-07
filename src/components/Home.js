import React, { Component } from 'react'
import Gitlogo from '../logos/github.png';
import Maillogo from '../logos/mail.png';
import Linkedinlogo from '../logos/linkedin.png';
import main from '../images/main.jpg'
import './main.css'
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
        let img = document.body.style
        document.body.style.background = `url(${main}) `;
        document.body.style.backgroundSize = 'cover';
        img.height = '100vh';
        // img.width = '100%';
        // document.body.style.backgroundRepeat = 'no-repeat';
        // document.body.height='100%'
    }
    render() {
        return (
            <>
                <div>
                    <div className="innerDiv">

                        <h3 className='heading_name_1'>Hey !, This is</h3>
                        <h1 className="heading_name_2">Vinay Sharma</h1>
                        <h1 className="heading_name_3">I am <span className="txt-rotate" data-period="2000" data-rotate='[ "a tech lover.", "interested in innovation.", "motivated by Mr. Sunder Pichai.", "Python & JS lover.", "fun!" ]'></span></h1>
                        <div style={{ display: 'inline-block' }}>
                            <a target='_blank' href="http://www.github.com/vinswalker"><img className="icons" src={Gitlogo}></img></a>
                            <a target='_blank' href="mailto:svinay0488@gmail.com"><img className="icons" src={Maillogo} /></a>
                            <a target='_blank' href="http://linkedin.com/in/vinay-sharma007"><img className="icons" src={Linkedinlogo} /></a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

