import React from './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
 const textRef = useRef();

    useEffect(()=>{

        init(textRef.current,
     { showCursor: true, 
    backDelay: 1500,
    backSpeed:60,
    strings: ['Developer', 'Coder', 'Designer'] })

 },[])
    return (
        <div className= "intro" id ="intro">
            <div className="left">
                <div className="imgContainer">
                <img src={ process.env.PUBLIC_URL + "/assets/man.png" } alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h1>Hi There,I'm</h1>
                    <h2>Mustafa Ali</h2>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                <img src={ process.env.PUBLIC_URL + "/assets/down-arrow.png" } alt="" />
                </a>
            </div>
          
        </div>
    )
}
