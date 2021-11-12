import Navbar from './components/navbar/navbar';
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
// import Contact from "./components/contact/contact";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className= "app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Projects/>
        {/* <Contact/> */}
      </div>
    </div>
  );
}

export default App;
