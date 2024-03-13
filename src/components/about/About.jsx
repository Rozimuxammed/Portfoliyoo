import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div className="container">
        <h1>Skills</h1>
        <div className="skills">
          <ul>
            <li>
              <span className="html">
                HTML <small>100%</small>
              </span>
            </li>
            <li>
              <span className="css">
                CSS <small>75%</small>
              </span>
            </li>
            <li>
              <span className="javascript">
                Javascript <small>50%</small>
              </span>
            </li>
            <li>
              <span className="react">
                React.js <small>45%</small>
              </span>{" "}
            </li>
            <li>
              <span className="sass">
                Sass <small>70%</small>
              </span>{" "}
            </li>
            <li>
              <span className="bootstrap">
                Bootstrap <small>65%</small>
              </span>{" "}
            </li>
            <li>
              <span className="tailwind">
                Tailwind <small>45%</small>
              </span>{" "}
            </li>
            <li>
              <span className="firebase">
                Firebase <small>50%</small>
              </span>{" "}
            </li>
          </ul>
        </div>
        <h2>Resume</h2>
        <div className="resume">
          <a target="blank" href="./public/Rozimuhammad's Resume.pdf">
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
