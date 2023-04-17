/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine, RiPhoneFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cqi6uay",
      "template_g0ld6vd",
      form.current,
      "RRdGOUme8rvPwXdUQ"
    );
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {/* Phone */}
          <article className="contact__option">
            <RiPhoneFill className="contact__option-icon" />
            <h4>Phone (Zalo)</h4>
            <h5>(+84)76 295 7869</h5>
          </article>
          {/* Email */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>triet.gx@gmail.com</h5>
            {/* <a href="mailto:triet.gx@gmail.com" target="__blank">
              Send a message
            </a> */}
          </article>
          {/* Messenger */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Triet Le</h5>
            <a href="https://www.facebook.com/triet.le.7505/" target="__blank">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            id="from_name"
            placeholder="Your Full Name"
            autoComplete="off"
            required
          />
          <input
            type="email"
            name="email_id"
            id="email_id"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <textarea
            name="message"
            rows="7"
            id="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
