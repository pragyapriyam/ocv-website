import React from "react";
import UserForm from "./UserForm";
// import firebase from "../firebaseConfig"; 
// import app from "../firebaseConfig"; 
const ContactUs = () => {
  const handleSubmit = (formData) => {
    // Assuming "formData" is an object containing the user's submitted data.
    // Replace "form_data" with the appropriate key for your database structure.
    // const database = getDatabase(app);
    // const formDataRef = ref(database, "form_data");
    // push(formDataRef, formData);
  };
  return (
    <div id="contact-section" className="contact-us">
      {/* <div className="d1">Contact Us</div> */}
      <div className="form-container"><UserForm onSubmit={handleSubmit} /></div>
      <div className="d2">
        <div className="d2-1 d-34">
          {/* <div className="d2-1-follow-us">Follow Us</div> */}
          <div className="frtf">
            <p>
              <a
                aria-label="Social link"
                class=" link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@onecryptoventures"
              >
                <div
                  color="white"
                  data-name="social-medium_1"
                  class="sc-1mehu68-0 dWxcBy"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M28.6 6.9L31 4.6v-.5h-8.3l-5.9 14.7-6.7-14.7H1.4v.5L4.2 8c.3.2.4.6.4 1v13.2c.1.5-.1 1-.4 1.3L1 27.3v.5h8.9v-.5l-3.2-3.8c-.3-.3-.5-.8-.4-1.3V10.8l7.8 17.1h.9l6.7-17.1v13.6c0 .4 0 .4-.2.7l-2.4 2.3v.5h11.8v-.5l-2.3-2.3c-.2-.2-.3-.4-.3-.7V7.6c0-.3.1-.5.3-.7z"></path>
                  </svg>
                </div>
              </a>
            </p>
            <p>
              <a
                aria-label="Social link"
                class=" link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://es.linkedin.com/company/one-crypto-ventures"
              >
                <div
                  color="white"
                  data-name="icon-linkedin"
                  class="sc-1mehu68-0 dWxcBy"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path d="M29.333 18.777v9.83h-5.716v-9.172c0-2.304-.827-3.876-2.896-3.876-1.579 0-2.519 1.06-2.933 2.085-.151.366-.19.877-.19 1.389v9.574h-5.717s.077-15.534 0-17.144h5.717v2.43l-.038.055h.038v-.055c.76-1.166 2.116-2.833 5.152-2.833 3.762 0 6.582 2.45 6.582 7.716zM5.902 3.2c-1.956 0-3.235 1.279-3.235 2.961 0 1.646 1.242 2.964 3.159 2.964h.038c1.994 0 3.234-1.318 3.234-2.964C9.06 4.479 7.858 3.2 5.902 3.2zM3.006 28.608h5.715V11.464H3.006v17.144z"></path>
                  </svg>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div style={{ position: "relative", top: "-6px", height: "30vh" }} className="d2-1 d2-second  d-366">
          {/* <div className="d2-second-mail">Mail</div> */}
   
          <div style={{ color: "rgb(115, 226, 255)", whiteSpace:"nowrap" }}>
            Dubai (UAE)
          </div>
          <div onClick={()=>{ window.open('https://t.me/+1x3KYDNSiAszYzRk', '_blank');}} style={{ color: "rgb(115, 226, 255)", whiteSpace:"nowrap", marginTop:"8px", cursor:"pointer", color:"white" }}>
            
            Contact us directly
          </div>
          <div  style={{ color: "rgb(115, 226, 255)", cursor: "pointer", marginTop:"10px", whiteSpace:"nowrap" }}>
          Privacy Policy
          </div>
          <div  style={{ color: "rgb(115, 226, 255)", cursor: "pointer", marginTop:"10px", whiteSpace:"nowrap" }}>
         Cookies Policy
          </div>
         
        </div>
      
      </div>
    </div>
  );
};

export default ContactUs;
