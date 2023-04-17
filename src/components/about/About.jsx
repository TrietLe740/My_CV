import React from "react";
import "./about.css";
import ME from "../../assets/me_about.jpg";
import { VscLibrary, VscPaintcan } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscLibrary className="about__icon" />
              <h5>Web Project</h5>
              <small>3 Completed</small>
            </article>

            <article className="about__card">
              <VscPaintcan className="about__icon" />
              <h5>Graphic Design</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            <ul>
              * CAN THO UNIVERSITY (10/2019 - Now)
              <li>Study Information Technology</li>
              <li>GPA: 3.04/4.0</li>
              <li>TOEIC: 400</li>
              <li>
                - I'm a self-taught front-end web developer looking for an
                internship. I want to take something away from your experience.
                I create various website projects for our class at school with
                my friends.
              </li>
            </ul>
          </p>
          <p>
            <ul>
              * STUDENT UNION OF DONG THAP PROVINCE (5/2020 - Now)
              <li>Executive board (10/2020 - 4/2023)</li>
              <li>Media committee member (5/2020 - Now)</li>
              <li>
                - I also self-taught graphic design seeking a job after
                graduate. Graphic design is my passion.
              </li>
              <li>
                - My responsibilities at the Student Union of Dong Thap Province
                include organizing events, designing and editing media products
                for Facebook, Tiktok, and Youtube, and creating a communication
                strategy.
              </li>
            </ul>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
