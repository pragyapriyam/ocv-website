import React from "react";

const Marketing = () => {
  
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
  return (
    <div id="marketing-section" className="marketing-1">
      <div className="marketing-app">
   
        <div className="marketing-2">
          <div className="header">Marketing</div>
          <div style={{ width: "90%" }} className="sub-header special">
            Amplifying your crypto products and services with proven strategies
            for effective promotion.
          </div>
          <div className="bullet-points">
            <p>➼ Brand Strategy & Design</p>
            <p>➼ Filmmaking & Editing</p>
            <p>➼ Community building & AMAs</p>
            <p>➼ Social Media Management & Paid Advertisement</p>
            <p>➼ Public Relationships & Influencer Marketing</p>
            <p>➼ Moderators (English, Spanish & Russian)</p>
            <p>➼ Partnerships & Strategic Alliances</p>
          </div>
                    <div style={{color:"white", textDecoration: "none", cursor: "pointer"}} href="#contact-section" onClick={scrollToServices2} className="discuss-project">Let's discuss your project ></div>
        </div>
        <div className="marketing-2">
          <div className="header">Business</div>
          <div className="sub-header">
            Supporting your business with disruptive blockchain technology.
          </div>
          <div className="bullet-points">
            <p>➼ Web3 Corporate Strategy</p>
            <p>➼ Whitepaper Crafting</p>
            <p>➼ Tokenomics Design & Implementation</p>
            <p>➼ ICO Launching Strategies</p>
            <p>➼ Post Launch Operations</p>
            <p>➼ Investor Relations</p>
          </div>
          <div style={{color:"white", textDecoration: "none", cursor: "pointer"}} href="#contact-section" onClick={scrollToServices2} className="discuss-project">Let's discuss your project ></div>
        </div>

        <div className="marketing-2 tech">
          <div className="header">Tech</div>
          <div className="sub-header">
            Expert consulting and development in crypto and Web3 projects.
          </div>
          <div className="bullet-points">
            <p>➼ Audits</p>
            <p>➼ Gitbook Repository</p>
            <p>➼ UI/UX Design</p>
            <p>➼ Web Development</p>
            <p>➼ Blockchain Development</p>
            <p>➼ dApps</p>
            <p>➼ Exchanges</p>
            <p>➼ Tokens</p>
            <p>➼ Wallets</p>
          </div>
                    <div style={{color:"white", textDecoration: "none", cursor: "pointer"}} href="#contact-section" onClick={scrollToServices2} className="discuss-project discuss-project-updated">Let's discuss your project ></div>
        </div>
        <div className="marketing-2 fund">
          <div className="header">Fundraising</div>
          <div className="sub-header unique">
          By creating and deploying compelling, high-end content we are able to implement our hybrid approach towards fundraising using our network and marketing expertise.
          </div>
          <div className="bullet-points">

            {/* <p>➼ dApps</p>
            <p>➼ Exchanges</p>
            <p>➼ Tokens</p>
            <p>➼ Wallets</p> */}
          </div>
                    <div style={{color:"white", textDecoration: "none", cursor: "pointer"}} href="#contact-section" onClick={scrollToServices2} className="discuss-project fund-discuss">Let's discuss your project ></div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
