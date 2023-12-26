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
            <p>
              <a
                aria-label="Social link"
                class=" link"
                // target="_blank"
                rel="noopener noreferrer"
                href="mailto:projects@onecryptoventures.io"
              >
                <div
                  color="white"
                  data-name="icon-linkedin"
                  class="sc-1mehu68-0 dWxcBy"
                >
                  
<svg height="512px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="512px"  xmlns="http://www.w3.org/2000/svg"><g><path d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1   c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z"/><path d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2   c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2   c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9   c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205   C464,153.9,464.6,148.7,455.7,153.2z"/></g></svg>
                </div>
              </a>
            </p>
          </div>
        </div>
        <div style={{ position: "relative", top: "-6px", height: "30vh" }} className="d2-1 d2-second  d-366">
          {/* <div className="d2-second-mail">Mail</div> */}
   
          <div style={{ color: "rgb(0, 102, 255)", whiteSpace:"nowrap" }}>
            Dubai (UAE)
          </div>
          <div onClick={()=>{ window.open('https://t.me/+1x3KYDNSiAszYzRk', '_blank');}} style={{ color: "rgb(0, 102, 255)", whiteSpace:"nowrap", marginTop:"8px", cursor:"pointer", color:"white" }}>
            
            Contact us directly
          </div>
          <div  style={{ color: "rgb(0, 102, 255)", cursor: "pointer", marginTop:"10px", whiteSpace:"nowrap" }}>
          Privacy Policy
          </div>
          <div  style={{ color: "rgb(0, 102, 255)", cursor: "pointer", marginTop:"10px", whiteSpace:"nowrap" }}>
         Cookies Policy
          </div>
         
        </div>
      
      </div>
    </div>
  );
};

export default ContactUs;
