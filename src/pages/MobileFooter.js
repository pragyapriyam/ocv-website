import React from "react";

const MobileFooter = ({ header, body, button }) => {

  return (
    <div className="footer-new">
      <div
        style={{ display: "flex" }}
      >
        <div className="mobile-footer-link-1"></div>
        <div className="mobile-footer-link-2"></div>
        <div className="mobile-footer-link-3"></div>
        <div className="mobile-footer-link-4"></div>

      </div>
      <div style={{ display: "flex" }}>
        <div className="mobile-footer-link-5"></div>
        <div className="mobile-footer-link-6"></div>
        <div className="mobile-footer-link-7"></div>
      </div>
    </div>
  );
};

export default MobileFooter;
