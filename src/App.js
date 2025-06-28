import React from "react";
import "./App.css";
import "../src/screens/About/About.jsx";
import About from "../src/screens/About/About.jsx";
import Contact from "./screens/Contact/Contact.jsx";
import Projects from "./screens/Projects/Projects.jsx";


import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <footer
        className="text-center py-3"
        style={{
          backgroundColor: "var(--off-white)",
          color: "var(--midnight-blue)",
        }}
      >
        <p>
          © {new Date().getFullYear()} Christian De Ness | All rights reserved.
        </p>
      </footer>
      <BackToTopButton />

    </div>
  );
}

export default App;
