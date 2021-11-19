import React from './about.scss'

export default function About() {
    return (
        <div className ="about" id ="about">
<div className="about__container">
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          Welcome to my page, I am a keen and hard-working Full-Stack Software Engineer determined to create efficent,
          user-friendly, usefull applications which solve real-problems. I'm driven to build apps which keep the user in mind
          and aspire to write clean and reusable code with the developer in mind ! Below is a list of some of technolgies I've used and that I'm familar with.
        </p>
    </div>
    </div> 
    <div className="tech">
    <img src={ process.env.PUBLIC_URL + "/assets/javascript.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/html5.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/css3.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/mysql.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/mongodb.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/expressjs.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/react.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/node.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/git.png" } alt="" />
    <img src={ process.env.PUBLIC_URL + "/assets/github.png" } alt="" />
    </div>
  );         
     </div>
    )
}
