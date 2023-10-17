// AboutUs.js
import React from "react";
import "./about-us.css";
import { useNavigate } from "react-router-dom";
import Laura from '../assets/laura.jpg'
import Raymond from '../assets/raymond.jpg'
import LOGO from '../assets/logo.png'
const AboutUs = () => {
  //   const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section");
    if (servicesSection) {
      const targetPosition =
        servicesSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 700; // Adjust the duration as desired
      let startTimestamp = null;

      const animateScroll = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const scrollStep = Math.max(Math.min(progress / duration, 1), 0);

        window.scrollTo(0, startPosition + distance * scrollStep);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const scrollToServices2 = () => {
    const servicesSection = document.getElementById("contact-section");
    if (servicesSection) {
      const targetPosition =
        servicesSection.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 700; // Adjust the duration as desired
      let startTimestamp = null;

      const animateScroll = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const scrollStep = Math.max(Math.min(progress / duration, 1), 0);

        window.scrollTo(0, startPosition + distance * scrollStep);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about-us");
  };
  return (
    <>
      <div className="heros-1">
        <div className="hero-2">

          <img src={LOGO} onClick={() => { navigate('/') }} className="hero-3" />
          <div className="hero-4">
            {/* <video src={Video} controls autoPlay muted /> */}
            <div className="hero-5">
              <a style={{ color: "white", textDecoration: "none" }} href="/">Home</a>
              <a style={{ color: "white", textDecoration: "none" }} href="/">
                Services
              </a>
              <a style={{ color: "#2BB2FF", textDecoration: "none" }} href="/gov-adv" onClick={scrollToServices2}>Government Advisory</a>
              <a
                style={{ color: "white", textDecoration: "none" }}
                // href="#"
                onClick={handleNavigate}
              >
                About
              </a>
              {/* <p>Team</p> */}
              <a style={{ color: "white", textDecoration: "none" }} href="/" onClick={scrollToServices2}>Contact</a>
            </div>
          </div>
        </div>
        {/* <div style={{width:"80%", margin:"auto", margin:"auto", marginTop:"30px"}}>
        <video  style={{width:"100%", margin:"auto", margin:"auto"}} src={Video} controls autoPlay loop muted /></div> */}

      </div>
      <div className="about-us-container">
        <div className="our-team">
          <h1 className="team-heading">Our Team</h1>
        </div>
        <div className="team-members">
          <div className="team-member-box">
            <img className="image-test" onClick={() => { window.open("https://www.linkedin.com/in/raymondratti/", "_blank"); }} src={Raymond} alt="Paul" />
            <div></div>
            <div className="team-member-info">
              <h2 className="name">Raymond Ratti Beato</h2>
              <p className="designation">CEO</p>
            </div>

          </div>
          <div className="team-member-box team-member-box-se" >
            <img className="image-test" src={Laura} onClick={() => { window.open("https://www.linkedin.com/in/laurasuarezleon/", "_blank"); }} alt="Paul" />
            <div></div>
            <div className="team-member-info">
              <h2 className="name">Laura Suárez León</h2>
              <p className="designation">COO</p>
            </div>

          </div>

        </div>
      </div>
    </>

  );
};

export default AboutUs;
