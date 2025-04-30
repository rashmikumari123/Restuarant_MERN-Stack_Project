import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/v1/contact/send", {
        name,
        email,
        message,
      });

      toast.success(response.data.message);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    }
  };

  return (
    <section className="contact-us" id="contact-us">
      <div className="container">
        <div className="heading-section">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Fill out the form below.</p>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
