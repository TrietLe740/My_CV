import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            {/* HTM: */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* CSS */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* JS */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* Bootstrap */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* JQuery */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>JQuery</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* ReactJS */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* VueJS */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>VueJS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* Experience Backend */}
        <div className="experience__backend">
          <h3>Graphic Designer</h3>
          <div className="experience__content">
            {/* Photoshop */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Adobe Photoshop</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* Premiere Pro */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Adobe Premiere Pro</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* After Effect */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Adobe After Effect</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            {/* Canva */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Canva</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* CapCut */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>CapCut</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* PowerPoint */}
            <article className="experience__detail">
              <BsFillPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>PowerPoint</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
