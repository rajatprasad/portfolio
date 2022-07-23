import React, { useState } from "react";
import "./navbar.css";
import profilePic from "../../images/profile1.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { BsFillMoonFill } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { FaSun } from "react-icons/fa";

const Navbar = ({ themeF }) => {
  const [toggleNav, setToggleNav] = useState("false");
  const [toggleBtn, setToggleBtn] = useState("false");

  const navbarToggle = () => {
    setToggleNav((curr) => !curr);
  };

  const themeToggle = () => {
    setToggleBtn((curr) => !curr);
    if (toggleBtn) {
      themeF((curr) => (curr = "dark"));
    } else {
      themeF((curr) => (curr = "light"));
    }
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <button
          onClick={navbarToggle}
          aria-label="Open Menu"
          type="button"
          className="navbar__menu__btn"
        >
          {toggleNav ? <GoThreeBars /> : <AiOutlineClose />}
        </button>
        <div className="navbar__left">
          <div className="navbar__logo">
            <a href="#hero">
              <img src={profilePic} alt="profilepic" />
            </a>
          </div>
          <div className="navbar__items">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="navbar__right">
          <a
            className="navbar__github"
            href="https://github.com/rajatprasad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <button onClick={themeToggle} className="nightmode__button">
            {toggleBtn ? <BsFillMoonFill /> : <FaSun />}
          </button>
        </div>
      </div>
      <div className={"navbar__menu" + (toggleNav ? " hide" : "")}>
        <nav className="navbar__menuItems">
          <a className="navbar__menuItem" href="#projects">
            Projects
          </a>
          <a className="navbar__menuItem" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
