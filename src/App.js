import React from "react";
import "./App.css";
import "../src/screens/About/About.jsx";
import About from "../src/screens/About/About.jsx";
import Contact from "./screens/Contact/Contact.jsx";
import Projects from "./screens/Projects/Projects.jsx";

// Importing components
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
