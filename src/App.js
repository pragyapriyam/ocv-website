import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Navbar from "./pages/Navbar";
import KnowMore from "./pages/KnowMore";
import Marketing from "./pages/Marketing";
import ScrollComponent from "./pages/ScrollComponent";
import Services from "./pages/Services";
import TrustedBy from "./pages/TrustedBy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web from "./pages/Web";
import GovAdv from "./pages/GovAdv";
import Concept from "./pages/Concept";
import Services2 from "./pages/Services2";
import WebSection from "./pages/WebSection";
import VideoSection from "./pages/VideoSection";
import Articles from "./pages/Articles";
import TrustedBySection from "./pages/TrustedBySection";
import FooterNew from "./pages/FooterNew";
import GovAdvNew from "./pages/GovAdvNew";
import NavbarGov from "./pages/NavbarGov";
import TeamsNew from "./pages/Teams";
import ContactUsPage from "./pages/ContactUsPage";
import { useEffect, useState } from "react";
import MobileNavbar from "./pages/MobileNavbar";
import MobileConcept from "./pages/MobileConcept";
import MobileServices from "./pages/MobileServices";
import MobileWebSection from "./pages/MobileWebSection";
import MobileVideoSection from "./pages/MobileVideoSection";
import MobileArticles from "./pages/MobileArticles";
import MobileFooter from "./pages/MobileFooter";
import MobileGovAdv from "./pages/MobileGovAdv";
import MobileTeamsNew from "./pages/MobileTeamsNew";
import MobileContactUsPage from "./pages/MobileContactUsPage";
// import Video from "../assets/ergwf.mp4";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Example threshold for mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Update state based on window width
    };

    window.addEventListener("resize", handleResize); // Listen for window resize events
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener
    };
  }, []);

  return (
    <Router>
      {!isMobile ? <Routes>
        <Route path="/" element={



          <div className="App">
            <div className="navplusconcept">
              <Navbar />
              <Concept />
            </div>
            <Services2 />
            <WebSection />
            <VideoSection />
            <Articles />
            <TrustedBySection />
            <FooterNew />
          </div>} />
        <Route path="/gov-adv" element={

          <div className="App">
            <div className="navplusconceptgov">
              <NavbarGov />
              {/* <Concept /> */}
              <GovAdvNew />

            </div>
            <FooterNew />

          </div>

        } /> {/* Add the new route */}


        <Route path="/teams" element={

          <div className="App">
            <div className="navplusconceptteams">
              <NavbarGov />
              {/* <Concept /> */}
              {/* <GovAdvNew /> */}
              <TeamsNew />

            </div>
            <FooterNew />

          </div>

        } /> {/* Add the new route */}


        <Route path="/contact-us" element={

          <div className="App">
            <div className="navplusconceptcontactus">
              <NavbarGov />
              {/* <Concept /> */}
              {/* <GovAdvNew /> */}
              <ContactUsPage />

            </div>
            <FooterNew />

          </div>

        } /> {/* Add the new route */}


      </Routes> :
        <Routes>
          <Route path="/"  element={



<div className="App">
  <div className="navplusconcept">
    <MobileNavbar />
    {/* <Concept /> */}
  </div>
  <MobileConcept />
  <MobileServices />
  {/* <Services2 /> */}
  <MobileWebSection />
  <MobileVideoSection />
  {/* <WebSection /> */}
  {/* <VideoSection /> */}
  <MobileArticles />
  {/* <Articles /> */}
  {/* <TrustedBySection /> */}
  <MobileFooter />
  {/* <FooterNew /> */}
</div>} />
          <Route path="/gov-adv" element={



<div className="App">
  <div className="navplusconcept">
    <MobileNavbar />
  </div>
  <MobileGovAdv />
  <MobileFooter />
</div>} /> 
          <Route path="/teams" element={



<div className="App">
  <div className="navplusconcept">
    <MobileNavbar />
  </div>
 <MobileTeamsNew/>
  <MobileFooter />
</div>} />
          <Route path="/contact-us" 
          
          element={



            <div className="App">
              <div className="navplusconcept">
                <MobileNavbar />
              </div>
              <MobileContactUsPage />
              <MobileFooter />
            </div>}
          
          
          
          />
        </Routes>
      }
    </Router>
  );
}

export default App;
