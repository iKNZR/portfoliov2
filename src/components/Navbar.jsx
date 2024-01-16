import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="main-nav">
      <div className="main-nav-bar">
        <div className="col">
          <div className="col-row">
            <h1>Name</h1>
          </div>
          <div className="col-row-bottom">
            <p>
              <Link>ERICK URIARTE</Link>, 2024 GMT-5 ({time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).toUpperCase()}, PE)
            </p>
          </div>
        </div>
        <div className="col">
          <div className="col-row">
            <h1>Status</h1>
          </div>
          <div className="col-row-bottom">
            <p>AVAILABLE FOR HIRING OR FREELANCE PROJECTS</p>
          </div>
        </div>
        <div className="col">
          <div className="col-row">
            <h1>Sitemap</h1>
          </div>
          <div className="col-row-bottom">
            <ul>
              <li><Link to="/">INDEX,</Link> </li>
              <li><Link to="/about">ABOUT,</Link> </li>
              <li><Link to="/projects">PROJECTS,</Link> </li>
              <li><Link to="contact">CONTACT</Link> </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="col-row">
            <h1>Let's connect</h1>
          </div>
          <div className="col-row-bottom">
            <ul>
            <li><Link>LINKEDIN, </Link> </li>
              <li><Link>GITHUB, </Link> </li>
              <li><Link>INSTAGRAM </Link> </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
