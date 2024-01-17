import React from "react";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bhu from "/assets/images/bhu.png";
import amazon from "/assets/images/amazon.png";
import ecommerce from "/assets/images/ecommerce.png";
import socialnetwork from "/assets/images/socialnetwork.png";

const ProjectsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    oauseOnHover: true,
    responsive: [],
  };

  const data = [
    {
      id: 1,
      image: amazon,
      title: "AMAZON",
      description: "AMAZON CLONE DEVELOPED FOR PRACTICE",
      link: "https://github.com/iKNZR/amazon-clone",
    },
    {
      id: 2,
      image: bhu,
      title: "BHU",
      description: "BHU ENTERPRISE BETA WEBSITE",
      link: "https://github.com/iKNZR/bhutest",
    },
    {
      id: 3,
      image: ecommerce,
      title: "ECOMMERCE",
      description: "AN ECOMMERCE WEBSITE DEVELOPED FOR PRACTICE",
      link: "https://github.com/iKNZR/mern-ecommerce",
    },
    {
      id: 4,
      image: socialnetwork,
      title: "SOCIALNETWORK",
      description: "SOCIALNETWORK WEBSITE DEVELOPED FOR PRACTICE",
      link: "https://github.com/iKNZR/socialnetwork",
    },
  ];

  return (
    <div className="projects">
      <div className="swiper-container">
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="card-description">
                  <p>{item.description}</p>
                  <div className="button">
                    <a href={item.link} target="_blank">
                      <div>
                        <span>SOURCE CODE</span>
                        <span>SOURCE CODE</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ProjectsPage;
