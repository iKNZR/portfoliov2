import React, { useState } from "react";
import "./AboutPage.css";
import css from "/assets/images/css.png";
import html from "/assets/images/html.png";
import javascript from "/assets/images/javascript.png";
import mongodb from "/assets/images/mongodb.png";
import nodejs from "/assets/images/nodejs.png";
import reactjs from "/assets/images/react.png";
import expressjs from "/assets/images/express.png";
import github from "/assets/images/github.png";
import flutter from "/assets/images/flutter.png";
import vstudio from "/assets/images/vstudio.png";
import { InView } from "react-intersection-observer";
import html2 from "/assets/certificates/html.png";
import css2 from "/assets/certificates/css.png";
import javascript2 from "/assets/certificates/javascript.png";
import kotlin from "/assets/certificates/kotlin.png";
import chatbot from "/assets/certificates/iachatbots.png";
import dapps from "/assets/certificates/daps.png";

const AboutPage = () => {
  const [visible, setVisible] = useState({
    html: false,
    css: false,
    javascript: false,
    kotlin: false,
    chatbot: false,
    dapps: false,
  });

  return (
    <div className="about">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
          >
            <div className="about-me">
              <h1>ABOUT</h1>
              <div>
                <p>
                  HELLO! I AM WALTER ERICKSON URIARTE DELGADO, A PASSIONATE
                  SOFTWARE ENGINEERING STUDENT AT THE PERUVIAN UNIVERSITY OF
                  APPLIED SCIENCES (UPC), IN THE LAST YEAR OF HIS DEGREE.
                </p>
                <hr />
                <ul>
                  <li>
                    WITH A SPECIALIZED FOCUS ON WEB DEVELOPMENT, CENTERED ON THE
                    MERN STACK, MY PASSION IS CREATING SOFTWARE THAT SIMPLIFIES
                    EVERYDAY LIFE AND IMPROVES EFFICIENCY.
                  </li>
                  <li>
                    I BELIEVE IN THE TRANSFORMATIVE POWER OF TECHNOLOGY TO MAKE
                    LIFE MORE ACCESSIBLE AND ENJOYABLE.
                  </li>
                  <li>
                    MY GOAL IS TO DEVELOP SOLUTIONS THAT MAKE A POSITIVE
                    DIFFERENCE TO PEOPLE'S DAILY EXPERIENCE.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
          >
            <div className="skills">
              <h1>SKILLS</h1>
              <div className="images-container">
                <div className="skills-container">
                  <img src={css} alt="" />
                </div>
                <div className="skills-container">
                  <img src={html} alt="" />
                </div>
                <div className="skills-container">
                  <img src={javascript} alt="" />
                </div>
                <div className="skills-container">
                  <img src={mongodb} alt="" />
                </div>
                <div className="skills-container">
                  <img src={nodejs} alt="" />
                </div>
                <div className="skills-container">
                  <img src={reactjs} alt="" />
                </div>
                <div className="skills-container">
                  <img src={expressjs} alt="" />
                </div>
                <div className="skills-container">
                  <img src={github} alt="" />
                </div>
                <div className="skills-container">
                  <img src={flutter} alt="" />
                </div>
                <div className="skills-container">
                  <img src={vstudio} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
          >
            <div className="education">
              <h1>EDUCATION</h1>
              <div>
                <p >
                  <span>
                    PERUVIAN UNIVERSITY OF APPLIED SCIENCES (UPC) - SOFTWARE
                    ENGINEERING
                  </span>
                </p>
                <hr />
                <ul>
                  <li> CURRENTLY STUDYING THE DEGREE OF BACHELOR IN SOFTWARE
                    ENGINEERING.</li>
                  <li>MEMBER OF THE WUSHU SANDA SELECTION IN THE PERIODS 2018-1
                    AND 2019-1MEMBER OF THE WUSHU SANDA SELECTION IN THE PERIODS
                    2018-1 AND 2019-1</li>
                </ul>                
              </div>
            </div>
          </div>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`animate-on-scroll ${inView ? "is-visible" : ""}`}
          >
            <div className="certificates">
              <h1>CERTIFICATES</h1>
              <div className="certificates-container">
                <div className="certificates-left">
                  {visible.html ? (
                    <img src={html2} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                  {visible.css ? (
                    <img src={css2} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                  {visible.javascript ? (
                    <img src={javascript2} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                  {visible.kotlin ? (
                    <img src={kotlin} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                  {visible.chatbot ? (
                    <img src={chatbot} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                  {visible.dapps ? (
                    <img src={dapps} alt="" className="visible" />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="certificates-right">
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          html: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          html: false,
                        }))
                      }
                    >
                      LEARN HTML COURSE
                    </p>
                    <span>CODECADEMY</span>
                    <hr />
                  </div>
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({ ...prevState, css: true }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          css: false,
                        }))
                      }
                    >
                      LEARN CSS COURSE
                    </p>
                    <span>CODECADEMY</span>
                    <hr />
                  </div>
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          javascript: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          javascript: false,
                        }))
                      }
                    >
                      LEARN JAVASCRIPT COURSE
                    </p>
                    <span>CODECADEMY</span>
                    <hr />
                  </div>
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          kotlin: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          kotlin: false,
                        }))
                      }
                    >
                      LEARN KOTLIN COURSE
                    </p>
                    <span>CODECADEMY</span>
                    <hr />
                  </div>
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          chatbot: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          chatbot: false,
                        }))
                      }
                    >
                      CREANDO CHATBOTS CON TECNOLOGÍA DE IA SIN EXPERIENCIA EN
                      PROGRAMACIÓN
                    </p>
                    <span>COURSERA</span>
                    <hr />
                  </div>
                  <div className="certificate">
                    <p
                      onMouseEnter={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          dapps: true,
                        }))
                      }
                      onMouseLeave={() =>
                        setVisible((prevState) => ({
                          ...prevState,
                          dapps: false,
                        }))
                      }
                    >
                      DESCENTRALIZED APPLICATIONS (DAPPS)
                    </p>
                    <span>COURSERA</span>

                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default AboutPage;
