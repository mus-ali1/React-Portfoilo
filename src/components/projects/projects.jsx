import { useState } from "react";
import "./projects.scss";

export default function Works() {
  //useState which determines which slide is presented upon inital page upload
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/github.png",
      link: "https://github.com/mus-ali1/EmployeeTracker",
      title: "Employee- Tracker",
      desc:
        "A command line application which utilizes node JS Express and Mysql to provide a useful and easily accessible employee management system. ",
      img:
        "./assets/employee-tracker.png",
    },
    {
      id: "2",
      icon: "./assets/github.png",
      title: "Weather Dashboard",
      desc:
        "An application which fetchs data from an API which allows a user to submit and specify a particular location and then be presented with the weather for that location for the next 24 hours.",
      img:
        "./assets/weather.png",
    },
    {
      id: "3",
      icon: "./assets/github.png",
      title: "Sharing is Caring",
      desc:
        "This is a Full- Stack Application which allows the users to add recipes based on their own culinary tradition, they can also comment on & vote for their favourite recipes.",
      img:
        "./assets/Screenshot.png",
    },
    {
      id: "3",
      icon: "./assets/github.png",
      title: "Express Note-Taker",
      desc:
        "This is a Full- Stack Application which allows the users to add recipes based on their own culinary tradition, they can also comment on & vote for their favourite recipes.",
      img:
        "./assets/express-noteTaker.png",
    },
    {
      id: "3",
      icon: "./assets/github.png",
      title: "Readme Generator",
      desc:
        "This is a Full- Stack Application which allows the users to add recipes based on their own culinary tradition, they can also comment on & vote for their favourite recipes.",
      img:
        "./assets/ReadMeGenerator.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
    /// if currentSlide is greater then 0 (which is our first slide) decrease currentSlide by 1 , but if it is not greater than zero
    //i.e it is our first slide then rather then reducing current slide by 1 (because we can't go any further) set currentSlide to 2 (the last item in our dataSet)
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      /// if the current slide is less then the length of our data set - 1 (minus 1 because first array is indexed at zero, therefore dataSet is 3 but array is 2 so we have to -1 from dataSet), 
      //then we add 1 to our currentSlide (item) if currentSlide is no longer less than data.length -1 then return currentSlide to 0 i.e item zero in our array
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
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
                  <div className="imgContainer">
                    <img src={d.icon} alt=""/>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span id="span"><button id="button" >Check it out</button></span>
              </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}