import React from "react";

import "./resume.scss";

export default function Resume() {
  return (
    <div className="resume" id="resume">
      <h1 className="heading">Resume</h1>

      <div className="row">
        <div className="info">
          <span> Please Download my </span>
          <a
            href="https://docs.google.com/document/d/1D1jveSsVSfaieZ8PeeyQ72cSdoojs4BEYkpQrI9MKNk/edit"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="counter">
          <div className="box">
            <h3>Front End Proficiencies:</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JS</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="counter">
          <div className="box">
            <h3>Back End Proficiencies:</h3>
            <ul>
              <li>API</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MERN</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
