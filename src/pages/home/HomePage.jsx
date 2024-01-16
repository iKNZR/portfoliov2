import React from "react";
import presentation from "/assets/images/portada.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-main">
      <div className="left-section">
        <div className="presentation">
          <div>
            <h1>Hello, my name is Erick Uriarte.</h1>
            <h1>
              I'm a <span>Fullstack Developer</span> and I currently reside in Peru, get to
              know me.
            </h1>
          </div>
          <div className="button">
            <div>
              <span>erickson.1207@gmail.com</span>
              <span>erickson.1207@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img src={presentation} alt="presentation" />
      </div>
    </div>
  );
};

export default HomePage;
