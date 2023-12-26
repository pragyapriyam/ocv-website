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
    <div onClick={
        ()=>{
            setRaymondRattiClicked(!raymondRattiClicked)
        }
    } className={!raymondRattiClicked? "raymond-ratti-1":"raymond-ratti-2"}></div>
    <div onClick={
        ()=>{
            setLauraClicked(!lauraClicked)
        }
    }  className={!lauraClicked? "lauraa-1":"lauraa-2"}></div>
    <div   onClick={
        ()=>{
            setMatiaClicked(!matiaClicked)
        }
    }  className={!matiaClicked? "mattia-1":"mattia-2"}></div>
    <div  onClick={
        ()=>{
            setPragyaClicked(!pragyaClicked)
        }
    } className={!pragyaClicked? "pragya-1":"pragya-2"}></div>
    <div onClick={
        ()=>{
            setEricClicked(!ericClicked)
        }
    } className={!ericClicked? "eric-1":"eric-2"}></div>
   </div>
  );
};

export default TeamsNew;
