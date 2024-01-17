import React from "react";
import presentation from "/assets/images/portada.jpg";
import "./HomePage.css";
import { Link } from "react-router-dom";
import github from "/assets/images/github.png";
import instagram from "/assets/images/instagram.png";
import linkedin from "/assets/images/linkedin.png";

const HomePage = () => {
  return (
    <div className="home-main">
      <div className="main-container">
        <div className="left-section">
          <div className="presentation">
            <div>
              <h1>Hello, my name is Erick Uriarte.</h1>
              <h1>
                I'm a <span>Fullstack Developer</span> and I currently live in
                South América, get to know me.
              </h1>
            </div>
            <div className="button">
              <Link to={"/contact"}>
                <div>
                  <span>CONTACT</span>
                  <span>CONTACT</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={presentation} alt="presentation" />
        </div>
      </div>
      <div className="socials">
        <a href="https://github.com/iKNZR" target="_blank">
          <div className="icon">
            <img src={github} alt="" />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/erick-uriarte/" target="_blank">
          <div className="icon">
            <img src={linkedin} alt="" />
          </div>
        </a>
        <a href="https://www.instagram.com/24erick/" target="_blank">
          <div className="icon">
            <img src={instagram} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
