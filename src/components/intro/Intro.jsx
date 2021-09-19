import React, { useEffect, useRef } from 'react'
import "./intro.scss"
//yarn add ityped
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef()

    useEffect( () => {
        init(textRef.current,{
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Content Creator"]
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I´m</h2>
                    <h1>Safak Kocaoglu</h1>
                    <h3>Frelance <span ref={ textRef }></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
            </div>
        </div>
    )
}

export default Intro