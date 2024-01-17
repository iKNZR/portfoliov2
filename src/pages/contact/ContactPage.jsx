import React, { useState } from "react";
import axios from "axios";
import "./ContactPage.css";
import portrait from "/assets/images/contactport.jpg";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/f5ef84ee-7b4c-41b7-b88d-de37a4806c51", //cambia el ultimo 1 por 0 xD
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="contactpage">
      <div className="form">
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Who are you?</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={query.name}
              onChange={handleChange()}
            />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="name">What is your email?</label>
            <input
              type="email"
              name="email"
              placeholder="Your contact email"
              value={query.email}
              onChange={handleChange()}
            />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="name">What is the name of your organization?</label>
            <input
              type="text"
              name="company"
              placeholder="Where do you work?"
              value={query.company}
              onChange={handleChange()}
            />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="name">What services are you looking for?</label>
            <input
              type="text"
              name="subject"
              placeholder="Tell me what services do you require"
              value={query.subject}
              onChange={handleChange()}
            />
            <hr />
          </div>
          <div className="form-group">
            <label htmlFor="name">Type your message please</label>
            <textarea
              type="text"
              name="message"
              placeholder="Hi Erick, I would like to hire you for..."
              value={query.message}
              onChange={handleChange()}
            />
            <hr />
          </div>
          <button type="submit">
            <div>
              <span>SEND</span>
              <span>SEND</span>
            </div>
          </button>
          {formStatus && <p>Message sent.</p>}
        </form>
      </div>
      <div className="portrait">
        <img src={portrait} alt="" />
      </div>
    </div>
  );
};

export default ContactPage;
