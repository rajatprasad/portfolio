import React from "react";
import "./footer.css";
// import foot from "../../images/footer.png";
import github from "../../images/github.png";
import insta from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <h3>No © copyright issues.</h3>
          <p>Feel free to copy. If you need any help, ping me !</p>
        </div>
        <div className="footer__mid">
          <p>Made with ❤️ in India</p>
        </div>
        <div className="footer_right">
          <a className="footer__icon" href="#insta">
            <img src={github} alt="github" />
          </a>
          <a className="footer__icon" href="#insta">
            <img src={linkedin} alt="github" />
          </a>
          <a className="footer__icon" href="#insta">
            <img src={insta} alt="github" />
          </a>
          <a className="footer__icon" href="#insta">
            <img src={twitter} alt="github" />
          </a>
        </div>
      </div>
      {/* <div className="footer__bottom">
        <img className="footer__img" src={foot} alt="footer-img" />
      </div> */}
    </div>
  );
};

export default Footer;
