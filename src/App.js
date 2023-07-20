import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import { Element } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react"
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Element id="home" name="home">
        <Home />
      </Element>
      <Element id="about" name="about"  >
        <About />
      </Element>
      <Element id="projects" name="projects">
        <Projects />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;
