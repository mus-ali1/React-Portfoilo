import React from './navbar.scss'
import {Person, Email} from "@material-ui/icons"

export default function Navbar({ menuOpen,setMenuOpen}) {
    return (
        <div className ={"navbar " + (menuOpen && "active")}>
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
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className = "line1"></span>
                        <span className = "line2"></span>
                        <span className = "line3"></span>
                        </div>
                </div>
            </div>
            
        </div>
    )
}


