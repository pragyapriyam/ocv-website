import React, { useEffect, useState } from "react";
import Video from "../assets/video.mp4";
import { useNavigate } from "react-router-dom";
import LOGO from '../assets/logo.png'

const MobileWebSection = () => {
    return (
        <>
            <div className="web-section">
                <div className="container-scroll-1">
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Fundraising</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Fundraising</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                </div>
                <div className="revert-direction">
                <div className="text-container-1">Marketing</div>
                <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Technology</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-2 stroke-text">Business</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                    <div className="text-container-1">Marketing</div>
                    <div className="svg-container-1"><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="white" />
                    </svg></div>
                </div>

            </div>

        </>
    );
};

export default MobileWebSection;
