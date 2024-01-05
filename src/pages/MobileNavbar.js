import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from '../assets/logo.png';

const MobileNavbar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setShowDropdown(false);
  };

  return (
    <div className="narbar2-container">
      <div className="navbar2-logo">
        <div className="navbar2-image-container">
          <img  src={LOGO} onClick={()=>{
               window.location.replace("/")
          }} alt="Logo" />
        </div>
      </div>
     {!showDropdown &&  <div className="navbar2-hamburger" onClick={handleDropdown}>
        <div className="navbar2-hamburger-container">
          <svg
            width="35"
            height="10"
            viewBox="0 0 35 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1" x2="35" y2="1" stroke="white" strokeWidth="2" />
            <line x1="13" y1="9" x2="35" y2="9" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>}
      {showDropdown && (
        <div className="navbar-dropdown" ref={dropdownRef}>
          <ul>
            <li onClick={() => handleNavigation("/")}>Home</li>
            <li style={{marginTop: "14px"}} onClick={() => handleNavigation("/gov-adv")}>Government Advisory</li>
            <li style={{marginTop: "14px"}}  onClick={() => handleNavigation("/teams")}>Team</li>
            <li style={{marginTop: "14px"}}  onClick={() => handleNavigation("/contact-us")}>Contact Us</li>

            {/* <li style={{marginTop: "14px"}}  onClick={() => handleNavigation("/team")}>Team</li> */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
