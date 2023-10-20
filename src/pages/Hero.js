import React, { useEffect, useState } from "react";
import Video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import LOGO from '../assets/logo.png'

const Hero = () => {
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
  const [isMobile, setIsMobile] = useState(false);

  const handleNavigate = () => {
    navigate("/about-us");
  };
  useEffect(() => {
    // Check if it's a mobile view based on screen width
    const checkIsMobile = () => {
        if (window.innerWidth <= 767) { // Adjust the width as needed
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    // Initial check
    checkIsMobile();

    // Attach event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup the event listener on component unmount
    return () => {
        window.removeEventListener("resize", checkIsMobile);
    };
}, []);
  return (
    <div className="hero-1">
      <div className="hero-2">

        <img src={LOGO} onClick={() => { navigate('/') }} className="hero-3" />
        <div style={isMobile ? { width: "71vw" }: {}} className="hero-4">
          {/* <video src={Video} controls autoPlay muted /> */}
          <div className="hero-5">
            <p>Home</p>
            <a style={{ color: "white", textDecoration: "none" }} href="#services-section" onClick={scrollToServices}>Services</a>
            <a style={{  color: "rgb(0, 102, 255)", textDecoration: "none" }} href="/gov-adv" onClick={scrollToServices2}>Government Advisory</a>
            <a
              style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
              // href="#"
              onClick={handleNavigate}
            >
              About
            </a>
            {/* <p>Team</p> */}
            <a style={{ color: "white", textDecoration: "none" }} href="#contact-section" onClick={scrollToServices2}>Contact</a>
        
          </div>
        </div>
      </div>
      {/* <div style={{width:"80%", margin:"auto", margin:"auto", marginTop:"30px"}}>
        <video  style={{width:"100%", margin:"auto", margin:"auto"}} src={Video} controls autoPlay loop muted /></div> */}

      <div className="hero-hero-1">
        <div className="hero-hero-2">
          <div className="hero-hero-3">
            <h2>From Concept to </h2>
            <h2>Market Success</h2>
          </div>
          <div className="hero-hero-4"></div>
          <div className="hero-hero-5">
            <p style={{ textAlign: "center" }}>
              One Crypto Ventures is a blockchain technology venture working in developing and launching Web3 projects through marketing, fundraising and technology.
            </p>
            <div className="hero-hero-6">
              <button style={{ cursor: "pointer", whiteSpace: "nowrap" }} onClick={scrollToServices2} className="partner-with-us">PARTNER WITH US</button>
              <button
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
                onClick={scrollToServices}
                className="services"
              >
                SERVICES
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
