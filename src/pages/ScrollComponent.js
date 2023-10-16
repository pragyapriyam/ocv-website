/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useRef, useState } from "react";

const ScrollComponent = () => {
  const [headers, setHeaders] = useState([
    "Header 1",
    "Header 2",
    "Header 3",
    // Add more headers as needed
  ]);
  const marqueeRef = useRef(null);
  useEffect(() => {
    const marqueeContainer = document.getElementById("marqueeContainer");
    const marqueeWidth = marqueeContainer.offsetWidth;
    const marqueeContentWidth = marqueeContainer.scrollWidth;
    const duration = marqueeContentWidth / 100; // Adjust the divisor to control the scrolling speed.

    marqueeContainer.style.animationDuration ="230s";
  }, []);
  return (
    <div className="scroll-1">
      <div className="header-marquee" id="marqueeContainer">
        <span className="moon-outline">BUSINESS</span>
        <span className="no-change">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3</span>
        {/* Repeat the content to ensure seamless effect */}
        <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
           {/* Repeat the content to ensure seamless effect */}
           <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
            {/* Repeat the content to ensure seamless effect */}
            <span className="moon-outline">BUSINESS</span>
        <span className="no-change marketing3">MARKETING</span>
        <span className="moon-outline">TECHNOLOGY</span>
        <span className="no-change web3">WEB3 {" "}</span>
      </div>
          <h2  className="articles articles-target">Read our articles</h2>
    </div>
  );
};

export default ScrollComponent;
