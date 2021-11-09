import Navbar from './components/navbar/navbar';
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import "./app.scss"

function App() {
  return (
    <div className= "app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
