import React from "react";
import Video from "../assets/ergwf222.mp4";
const KnowMore = () => {
  return (
    <div className="know-more-container">
      {/* <div className="know-more-header">
        OCV: Empowering the future of technology
      </div> */}
  <div style={{width:"80%", margin:"auto", margin:"auto", marginTop:"30px"}}>
        <video  style={{width:"100%", margin:"auto", margin:"auto"}} src={Video} controls autoPlay loop muted /></div>
  
    </div>
  );
};

export default KnowMore;
