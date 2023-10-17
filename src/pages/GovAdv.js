// AboutUs.js
import React, { useEffect, useState } from "react";
import "./about-us.css";
import { useNavigate } from "react-router-dom";
import Laura from '../assets/laura.jpg'
import Raymond from '../assets/raymond.jpg'
import LOGO from '../assets/logo.png'
import Banner from '../assets/Group 1341.png'
const GovAdv = () => {
    //   const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

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
        window.open('https://t.me/+1x3KYDNSiAszYzRk', '_blank')
    }
    const navigate = useNavigate();

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
        <>
            {!isMobile ?
                <div className="gov-adv-container">
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
                    <div style={{ height: "80vh" }} className="about-ufs-container hero-hero-6">
                        <button onClick={scrollToServices2} className="gov-con partner-with-us">Contact us for more information</button>


                    </div>
                </div> :
                <div  className="gov-adv-container-mobile">
                    <div className="heros-1">
                        <div className="hero-2">

                            <img src={LOGO} onClick={() => { navigate('/') }} className="hero-3" />
                            <div style={{ width: "71vw" }} className="hero-4">
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
                
                </div>}

        </>

    );
};

export default GovAdv;
