import React from "react";
import "./Works.css";
import { FaLink } from "react-icons/fa";
function Works() {
  return (
    <div className="works">
      <div className="container">
        <h1>My works</h1>
        <div className="images">
          <div className="image">
            <a target="blank" href="https://marketcars.netlify.app">
              <img src="./public/market.png" alt="" />
            </a>
          </div>
          <div className="image">
            <a target="blank" href="https://searchpaneel.netlify.app">
              <img src="./public/panel.png" alt="" />
            </a>
          </div>
          <div className="image">
            <a target="blank" href="https://imagescrolll.netlify.app">
              <img src="./public/scroll.png" alt="" />
            </a>
          </div>
          <div className="image">
            <a target="blank" href="https://randomgradientcolor.netlify.app">
              <img src="./public/random.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
