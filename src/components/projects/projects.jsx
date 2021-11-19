import { useState } from "react";
import "./projects.scss";
import  {FaGithubSquare} from 'react-icons/fa';
import  {BsLink45Deg} from 'react-icons/bs';


export default function Projects() {
  //useState which determines which slide is presented upon inital page upload
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      github: "https://github.com/mus-ali1/sharing-is-caring",
      deployed: "https://sharing-is-caring-dreamteam.herokuapp.com/login",
      title: "Full-Stack Application",
      desc:
        "Created in an NodeJS environment with a MYSQL back-end, Express-Server,Sequelize as the ORM, and Handlebars for templating. This app allows users to add and retrieve recipes.   ",
      img:
        "/assets/Screenshot.png",
    },
    {
      id: "2",
      github: "https://github.com/mus-ali1/NoSql-Workout-Tracker",
      deployed: "https://mus-ali1fitness-tracker.herokuapp.com/",
      title: "NoSql Workout Tracker",
      desc:
        "A workout tracker created using a Mongo database with a Mongoose schema and routes handled with Express. Allows users to track and update thier workouts.  ",
      img:
        "/assets/appthree.png",
     
    },
    {
      id: "3",
      github: "https://github.com/mus-ali1/EmployeeTracker",
      deployed: "https://www.youtube.com/watch?v=vC1KFeJ1dhM",
      title: "Employee Management System",
      desc:
        " A command line application created in NodeJS environment uses Express to handle routes and MySql for the database. Allows employer to update records of employees as part of thier organization. ",
      img:
        "/assets/employee-tracker.png",
    },
    {
      id: "4",
      github: "https://github.com/mus-ali1/E-Commerce-Back-End",
      deployed: "https://www.youtube.com/watch?v=iEXJofg6HSs",
      title: "E-Commerce Back-End",
      desc:
        " Developed using NodeJS ,the application uses Express.js API and Sequelize as an ORM to interact with a MySQL database, tested for end-points using Insomnia. The App provides full back-end functionality for an E-Commerce website.",
      img:
        "/assets/categories.png",
    },
    {
      id: "5",
      github: "https://github.com/mus-ali1/Note-Taker",
      deployed: "https://musali-note-taker.herokuapp.com/",
      title: "Express Note-Taker",
      desc:
        "Created using NodeJS, the app uses an Express.js back end and will save and retrieve user generated note data from a JSON file. Allows user to input notes which are then returned to the back-end.",
      img:
        "/assets/express-noteTaker.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
    /// if currentSlide is greater then 0 (which is our first slide) decrease currentSlide by 1 , but if it is not greater than zero
    //i.e it is our first slide then rather then reducing current slide by 1 (because we can't go any further) set currentSlide to 0 (the first item in our dataSet)
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 0 )
      /// if the current slide is less then the length of our data set - 1 (minus 1 because first array is indexed at zero, therefore dataSet is 3 but array is 2 so we have to -1 from dataSet), 
      //then we add 1 to our currentSlide (item) if currentSlide is no longer less than data.length -1 then return currentSlide to 0 i.e item zero in our array
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        // translateX=repositions the slider element horizontally on the 2D plan, intial state is Zero however as currentSlide= UseState(0) * 100 =0
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => ( /// creates a new array from calling a function for every element, everytime its called it will return
        /// the container below with the relevant data from any given array.
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="social">
                  <a href= {d.github} className= "social"><FaGithubSquare size={30}/> </a>
                  <a href= {d.deployed} className= "social"><BsLink45Deg size={30}/></a>
                  </div>
                 <h2>{d.title}</h2>
                  <p id="desc">{d.desc}</p>
              </div>
              </div>
              <div className="right">
                <img
                  src={process.env.PUBLIC_URL + d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={ process.env.PUBLIC_URL + "/assets/arrow.png" } 
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={ process.env.PUBLIC_URL + "/assets/arrow.png" } 
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}