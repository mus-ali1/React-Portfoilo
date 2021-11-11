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
                   <span>
                   <a href="https://drive.google.com/file/d/1M8Ot-fwYLkKCaYRBk8xA1DoauOp08YtG/view?usp=sharing ">
                   View CV/Resume</a>
                   </span>
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


// <Person className="icon"/>
//                    <span>                                           
//                    <a href="https://drive.google.com/file/d/1M8Ot-fwYLkKCaYRBk8xA1DoauOp08YtG/view?usp=sharing ">
//                        View CV/Resume
//                         </a>
//                    </span>

