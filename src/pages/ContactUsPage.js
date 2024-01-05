import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database"; // Import necessary Firebase modules

const ContactUsPage = ({ header, body, button }) => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    message: "",
  };
  const [formData, setFormData] = useState({ ...initialFormData });

  // Replace this with your Firebase configuration and initialization
  // Initialize Firebase app - Replace with your Firebase setup code
  // const firebaseConfig = { apiKey: "...", authDomain: "...", databaseURL: "...", ... };
  // firebase.initializeApp(firebaseConfig);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Store form data to Firebase
    const database = getDatabase(); // Get reference to the Firebase database
    const formDataRef = ref(database, "form_data"); // Reference to a specific node in the database
    await push(formDataRef, formData); // Push form data to Firebase

    // Reset form fields to initial values
    setFormData({ ...initialFormData });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="contact-new">
      <div className="contact-new-header">{header}</div>
      <div className="contact-new-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name (Optional)</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="website">Website URL (Optional)</label>
              <input
                type="text"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
