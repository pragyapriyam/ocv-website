import React from "react";

const TeamsNew = ({ header, body, button }) => {
    const [raymondRattiClicked, setRaymondRattiClicked] = React.useState(false)
    const [lauraClicked, setLauraClicked] = React.useState(false)
    const [matiaClicked, setMatiaClicked] = React.useState(false)
    const [pragyaClicked, setPragyaClicked] = React.useState(false)
    const [ericClicked, setEricClicked] = React.useState(false)
    
  return (
   <div className="teams-new">
    <div className="teams-new-header"></div>
    <div style={{cursor:"pointer"}} onClick={
        ()=>{
            setRaymondRattiClicked(!raymondRattiClicked)
            window.location.replace("https://www.linkedin.com/in/raymondratti/")
        }
    }  className={!raymondRattiClicked? "raymond-ratti-2":"raymond-ratti-2"}></div>
    <div  style={{cursor:"pointer"}} onClick={
        ()=>{
            setLauraClicked(!lauraClicked)
            window.location.replace("https://www.linkedin.com/in/laurasuarezleon/")
        }
    }  className={!lauraClicked? "lauraa-2":"lauraa-2"}></div>
    <div  style={{cursor:"pointer"}}   onClick={
        ()=>{
            setMatiaClicked(!matiaClicked)
            window.location.replace("https://www.linkedin.com/in/mattia-ingenito/")
        }
    }  className={!matiaClicked? "mattia-2":"mattia-2"}></div>
    <div  style={{cursor:"pointer"}}  onClick={
        ()=>{
            setPragyaClicked(!pragyaClicked)
            window.location.replace("https://www.linkedin.com/in/pragyapriyam/")
        }
    } className={!pragyaClicked? "pragya-2":"pragya-2"}></div>
    <div  style={{cursor:"pointer"}} onClick={
        ()=>{
            setEricClicked(!ericClicked)
            window.location.replace("https://www.linkedin.com/in/eric-brito-634925292/")
        }
    } className={!ericClicked? "eric-2":"eric-2"}></div>
   </div>
  );
};

export default TeamsNew;
