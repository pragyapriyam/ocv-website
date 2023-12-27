import React from "react";

const FooterNew = ({ header, body, button }) => {
    
  return (
   <div className="footer-new">
    <div onClick={(()=>{window.location.replace("https://medium.com/@onecryptoventures")})} className="desktop-footer-link-1"></div>
    <div onClick={(()=>{window.location.replace("https://www.linkedin.com/company/one-crypto-ventures")})}  className="desktop-footer-link-2"></div>
    <div onClick={(()=>{window.location.replace("https://t.me/+1x3KYDNSiAszYzRk")})} className="desktop-footer-link-3"></div>
    <div onClick={(()=>{window.location.replace("mailto:projects@onecryptoventures.io")})} className="desktop-footer-link-4"></div>
   </div>
  );
};

export default FooterNew;
