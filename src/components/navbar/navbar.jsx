import React from './navbar.scss'
import {Person, Email} from "@material-ui/icons"

export default function Navbar() {
    return (
        <div className = "navbar active">
            <div className="wrapper">
                <div className="left">
                   <a href="intro" className= "logo">genius.</a>
                   <div className="itemContainer">
                   <Person className="icon"/>
                   <span>+44 7404 617 287</span>
                   </div>
                   <div className="itemContainer">
                   <Email className="icon"/>
                   <span>mustafa@genius.com</span>
                   </div>
                </div>
                <div className="right">
                    <div className="hamburger">
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                        </div>
                </div>
            </div>
            
        </div>
    )
}


