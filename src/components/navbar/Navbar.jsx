import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import dropdown from "/assets/images/dropdown.png";

const Navbar = () => {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [rotate, setRotate] = useState(false);

  const handleTriggerClick = () => {
    setOpen(!open);
    setRotate(!rotate);
};

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <header>
      <nav>
        <div className="main-nav">
          <div className="main-nav-bar">
            <div className="col">
              <div className="col-row">
                <h1>Name</h1>
              </div>
              <div className="col-row-bottom">
                <p>
                  <Link to={"/about"}>ERICK URIARTE</Link>, 2024 GMT-5 (
                  {time
                    .toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                    .toUpperCase()}
                  , PE)
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
            <div className="col2">
              <div className="col-row">
                <h1>Sitemap</h1>
              </div>
              <div className="col-row-bottom">
                <ul>
                  <li>
                    <Link to="/">INDEX,</Link>{" "}
                  </li>
                  <li>
                    <Link to="/about">ABOUT,</Link>{" "}
                  </li>
                  <li>
                    <Link to="/projects">PROJECTS,</Link>{" "}
                  </li>
                  <li>
                    <Link to="contact">CONTACT</Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className={`sidebar ${open ? 'open' : ''}`}>
            <div className="trigger" onClick={handleTriggerClick}>
              <img className={`dropdown-icon ${rotate ? 'rotate' : ''}`}
                onClick={handleTriggerClick} src={dropdown} alt="" />
            </div>            
            {open && (
                <ul>
                    <li><Link to="/" onClick={handleTriggerClick}>INDEX</Link></li>
                    <li><Link to="/about" onClick={handleTriggerClick}>ABOUT</Link></li>
                    <li><Link to="/projects" onClick={handleTriggerClick}>PROJECTS</Link></li>
                    <li><Link to="/contact" onClick={handleTriggerClick}>CONTACT</Link></li>
                </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
