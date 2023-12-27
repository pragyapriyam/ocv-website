import React from "react";

const MobileArticles = ({ header, body, button }) => {
    
  return (
   <div className="articles-section">
    <div  onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/crypto-influencers-collaborating-web3-personalities-ka9re/")
    }} className="mobile-article-1"></div>
    <div onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/how-build-partnerships-web3-one-crypto-ventures-fighe")
    }} className="mobile-article-2"></div>
    <div onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/storytelling-crypto-how-tell-stories-captivate-your-mcznc/")
    }} className="mobile-article-3"></div>
   </div>
  );
};

export default MobileArticles;
