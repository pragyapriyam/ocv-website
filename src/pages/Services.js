import React from "react";

const Services = ({ header, body, button }) => {
    
  const scrollToServices2 = () => {
  if(header === "Services") {
    const servicesSection = document.getElementById("marketing-section");
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

  }
  else {
    window.open('https://medium.com/@onecryptoventures/web3-needs-easier-language-70cdd2505dfd', '_blank');
  }
  };
  return (
    <div id="services-section" className={`services-1 ${header === "Services"? '': 'services-1-test'} `}>
      <div className="services-2">
        <div className="services-3">
          <div className="services-4">{header}</div>
          <div className="services-5">{body}</div>
          <div  href="#marketing-section" onClick={scrollToServices2} className="services-6">{button} ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
