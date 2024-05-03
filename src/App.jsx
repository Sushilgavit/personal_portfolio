import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/about";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


const App = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
)

export default App