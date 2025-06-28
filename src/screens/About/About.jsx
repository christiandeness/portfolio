import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="about-image">
        <img src="/images/self-photo.JPG" alt="christian's photo" className="profile-photo"></img>
      </div>
      <div className="about-text">
        <h1>Hi, I'm Christian!</h1>
        <p>Welcome to my portfolio Website!</p>
      </div>
    </section>
  );
}

export default About;
 