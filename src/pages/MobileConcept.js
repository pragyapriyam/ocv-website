import React, { useEffect, useState } from "react";
import Video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import LOGO from '../assets/logo.png'
import SPINNER from '../assets/spinner.png';

const MobileConcept = () => {
  useEffect(() => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('spin-animation');
  }, []);
  return (
    <>
   <div className="mobile-concept-page">
    {/* <div className="concept-page-middle-text">
        <h3>From Concept to Market Success</h3>
        <p>One Crypto Ventures is a blockchain technology venture working in developing and launching Web3 projects through marketing, fundraising and technology.</p>
    </div> */}
    <div>
        <img id="spinner" width={40} style={{ position: "relative", bottom: "70px", left: "30px" }} src={SPINNER} alt="spinner" />
      </div>
   </div>
   
   </>
  );
};

export default MobileConcept;
