import React from "react";
import Video from "../assets/ergwf.mp4";
const MobileVideoSection = ({ header, body, button }) => {
  return (
    <div className="video-section">

<video  style={{width:"100%",margin:"auto"}} src={Video} autoPlay loop muted />
    </div>
  );
};

export default MobileVideoSection;
