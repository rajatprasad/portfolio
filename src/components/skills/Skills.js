import React from "react";
import "./skills.css";
import node from "../../images/node.png";
import react from "../../images/react.png";
import js from "../../images/js.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import npm from "../../images/npm.png";
import mongodb from "../../images/mongodb.png";
import redux from "../../images/redux.png";
import figma from "../../images/figma.png";
import ai from "../../images/ai.png";
import scss from "../../images/scss.png";
import git from "../../images/git.png";
import github2 from "../../images/github2.png";
import mui from "../../images/mui.png";
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h2>Tech Stack</h2>
      <Marquee speed={70} gradient={false}>
        <div className="top">
          <img className="top__icon" src={react} alt="react" />
          <img className="top__icon" src={js} alt="javascript" />
          <img className="top__icon" src={html} alt="html" />
          <img className="top__icon" src={css} alt="css" />
          <img className="top__icon" src={npm} alt="npm" />
          <img className="top__icon" src={git} alt="git" />
          <img className="top__icon" src={mui} alt="mui" />
        </div>
      </Marquee>
      <Marquee speed={70} direction="right" gradient={false}>
        <div className="bottom">
          <img className="top__icon" src={node} alt="node" />
          <img className="top__icon" src={mongodb} alt="mongodb" />
          <img className="top__icon" src={redux} alt="redux" />
          <img className="top__icon" src={ai} alt="ai" />
          <img className="top__icon" src={figma} alt="figma" />
          <img className="top__icon" src={github2} alt="github2" />
          <img className="top__icon" src={scss} alt="scss" />
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
