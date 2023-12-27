import React from "react";

const MobileFooter = ({ header, body, button }) => {

  return (
    <div className="footer-new">
      <div
        style={{ display: "flex" }}
      >
        <div onClick={(()=>{window.location.replace("https://medium.com/@onecryptoventures")})} className="mobile-footer-link-1"></div>
        <div onClick={(()=>{window.location.replace("https://www.linkedin.com/company/one-crypto-ventures")})} className="mobile-footer-link-2"></div>
        <div onClick={(()=>{window.location.replace("https://t.me/+1x3KYDNSiAszYzRk")})} className="mobile-footer-link-3"></div>
        <div  onClick={(()=>{window.location.replace("mailto:projects@onecryptoventures.io")})} className="mobile-footer-link-4"></div>

      </div>
      {/* <div style={{ display: "flex" }}>
        <div className="mobile-footer-link-5"></div>
        <div className="mobile-footer-link-6"></div>
        <div className="mobile-footer-link-7"></div>
      </div> */}
    </div>
  );
};

export default MobileFooter;
