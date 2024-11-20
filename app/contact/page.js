"use client";
import React, { useState } from "react";

export default function Contact() {
  // Define state for each input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Simulate an API call with a timeout
    try {
      // Replace this with actual form submission logic (API call)
      await new Promise((resolve) => setTimeout(resolve, 2000)); 

      // Simulate success
      setFormStatus({ type: "success", message: "Your message has been sent!" });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      // Simulate error
      setFormStatus({ type: "error", message: "There was an error sending your message." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Contact Us</h1>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  {formStatus && (
                    <div className={`alert alert-${formStatus.type}`} role="alert">
                      {formStatus.message}
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>&copy; 2024 One Ring Rentals. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
