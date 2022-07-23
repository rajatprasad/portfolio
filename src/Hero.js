import React from "react";
import "./hero.css";
import profilePic from "./images/profile1.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="hero__profileImg">
          <img src={profilePic} alt="" />
        </div>
        <div className="hero__profileIntro">
          <h1 className="hero__h1">
            <span className="hero__hey">
              Hey!<span className="hero__underline"></span>
            </span>
            👋
          </h1>
          <h3>
            My name is <strong>Rajat</strong> and I'm a Full Stack Developer and
            an open source lover from India 🇮🇳
          </h3>
          <h3>
            This is my digital garden, where I write about the things I'm
            working on and share what I've learned. 😊
          </h3>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
