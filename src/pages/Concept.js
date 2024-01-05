import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SPINNER from '../assets/spinner.png';


const Concept = () => {
  useEffect(() => {
    const spinner = document.getElementById('spinner');
    spinner.classList.add('spin-animation');
  }, []);

  return (
    <>
      <div className="concept-page">
        <div className="concept-page-middle-text">
          <h3>From Concept to Market Success</h3>
          <p>One Crypto Ventures is a blockchain technology venture working in developing and launching Web3 projects through marketing, fundraising, and technology.</p>
        </div>
      </div>
      <div>
        <img id="spinner" width={100} style={{ position: "relative", bottom: "80px", left: "60px" }} src={SPINNER} alt="spinner" />
      </div>
    </>
  );
};

export default Concept;
