import React from "react";

const Articles = ({ header, body, button }) => {
    
  return (
   <div className="articles-section">
     <div  onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/crypto-influencers-collaborating-web3-personalities-ka9re/")
    }} className="desktop-article-1"></div>
    <div onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/how-build-partnerships-web3-one-crypto-ventures-fighe")
    }} className="desktop-article-2"></div>
    <div onClick={()=>{
      window.location.replace("https://www.linkedin.com/pulse/storytelling-crypto-how-tell-stories-captivate-your-mcznc/")
    }} className="desktop-article-3"></div>
     <div onClick={()=>{
      window.location.replace("https://medium.com/@onecryptoventures")
    }} className="desktop-article-4"></div>
   </div>
  );
};

export default Articles;
