import React from "react";

const MobileTeamsNew = ({ header, body, button }) => {
    const [raymondRattiClicked, setRaymondRattiClicked] = React.useState(false)
    const [lauraClicked, setLauraClicked] = React.useState(false)
    const [matiaClicked, setMatiaClicked] = React.useState(false)
    const [pragyaClicked, setPragyaClicked] = React.useState(false)
    const [ericClicked, setEricClicked] = React.useState(false)
    
  return (
   <div className="mobile-teams">
    <div className="mobile-teams-block-1">

    </div>
    <div className="mobile-teams-block-2">
    <div onClick={()=>{
        window.location.replace("https://www.linkedin.com/in/raymondratti/")
    }} className="mobile-raymond-link"></div>
    </div>
    <div className="mobile-teams-block-3">
    <div  onClick={()=>{
        window.location.replace("https://www.linkedin.com/in/laurasuarezleon/")
    }} className="mobile-laura-link"></div>
    </div>
    <div className="mobile-teams-block-4">
    <div onClick={()=>{
        window.location.replace("https://www.linkedin.com/in/mattia-ingenito/")
    }} className="mobile-mattia-link"></div>
    </div>
    <div className="mobile-teams-block-5">
    <div onClick={()=>{
        window.location.replace("https://www.linkedin.com/in/pragyapriyam/")
    }} className="mobile-pragya-link"></div>
    </div>
    <div className="mobile-teams-block-6">
    <div onClick={()=>{
        window.location.replace("https://www.linkedin.com/in/eric-brito-634925292/")
    }} className="mobile-eric-link"></div>
    </div>
   </div>
  );
};

export default MobileTeamsNew;
