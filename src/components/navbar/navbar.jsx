import React from './navbar.scss'
import {Person, Email} from "@material-ui/icons"
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { BsGlobe2 } from "react-icons/bs";


export default function Navbar({ menuOpen,setMenuOpen}) {
    return (
        <div className ={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                   <a href="intro" className= "logo"><BsGlobe2/></a>
                   <div className="itemContainer">
                   <Person className="icon"/>
                   <span>
                   <a href="https://drive.google.com/file/d/1SwixyynYdyE8XO_fHVLCCmtchfO2-olX/view?usp=sharing ">
                   View CV/Resume</a>
                   </span>
                   </div>
                   <div className="itemContainer">
                   <Email className="icon"/>
                   <span>mustafa_a_ali@outlook.com</span>
                   <a href="https://github.com/mus-ali1" className= "social"><FaGithubSquare size={20}/></a>
                   <a href="https://linkedin.com/in/mustafa-ali-101" className= "social"><FaLinkedin size={20}/></a>
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

