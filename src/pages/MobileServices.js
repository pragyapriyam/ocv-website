import React, { useEffect, useState } from "react";
import Video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import LOGO from '../assets/logo.png'

const MobileServices = () => {
    return (
        <>
          <div className="services-mobile-container">
            <div className="services-mobile-container-firsthalf"></div>
            <div className="services-mobile-container-secondhalf"></div>
            <div className="services-mobile-container-thirdhalf"></div>
            <div className="services-mobile-container-fourthhalf"></div>
            <div className="services-mobile-container-fifthhalf"></div>
          </div>
        </>
    );
};

export default MobileServices;
