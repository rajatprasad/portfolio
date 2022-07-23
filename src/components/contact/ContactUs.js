import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUs.css";
import space from "../../images/space.svg";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_EMAIL_ID,
        form.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__top">
        <h2>Coffee with me.</h2>
        <p>
          I am always excited to work on some awesome projects, message me and
          let's discuss over coffee.
        </p>
      </div>
      <div className="contact__bottom">
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <h3>Write a message for me below</h3>
          <label className="form__tag">Name</label>
          <input className="form__input" type="text" name="user_name" />
          <label className="form__tag">Email</label>
          <input className="form__input" type="email" name="user_email" />
          <label className="form__tag">Message</label>
          <textarea className="form__input form__textarea" name="message" />
          <input className="form__tag form__btn" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
