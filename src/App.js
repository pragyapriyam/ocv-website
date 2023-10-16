import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Hero from "./pages/Hero";
import KnowMore from "./pages/KnowMore";
import Marketing from "./pages/Marketing";
import ScrollComponent from "./pages/ScrollComponent";
import Services from "./pages/Services";
import TrustedBy from "./pages/TrustedBy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web from "./pages/Web";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App">
          <Hero />
          <Services
            header="Services"
            body="We know that all projects are not created equal. We also know that each country or municipality we work with has different needs and necessities. That’s why we embrace a focused and individualized approach as our modus operandi. "
            button="Learn more"
            background=""
          />
          <Marketing />
          <ScrollComponent />

          <Web
            header="Web3 Needs Easier Language"
            button="Read our articles"
            background=""
            body="Web3 Needs Easier Language to Reach Mass Adoption and onboard the next Million users. Web3 is the next generation of the internet, built on..."
          />
          <KnowMore />
          <TrustedBy />
          <ContactUs />

          {/* <div className="legal-advice">
              <p>Legal</p>
              <p>Privacy Policy</p>
              <p>Cookies Policy</p>
            </div> */}
          <div className="rights-reserved">2023 © One Crypto Ventures. All Rights Reserved.</div>
        </div>} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add the new route */}

      </Routes>
    </Router>
  );
}

export default App;
