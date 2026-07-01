import { useState } from "react";
import "./Footer.css";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer = () => {
  const fontFamily = { fontFamily: "'Exo 2', sans-serif" };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors before submitting.");
      return;
    }

    setErrors({});

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      await emailjs.send(
        "service_riml3fv",
        "template_3nfzdhf",
        { from_name: name,
        from_email: email,
        message: message,
        to_email: "haassnn3333@gmail.com", 
      },
        "K3rbJlhevVun5uUPo"
      );

      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again.");
    }
  };

  return (
    <div className="footer-wrapper">

      <h1 className="footer-title" style={fontFamily}>
        I AM READY TO CONSULT YOU
      </h1>

      <div className="gradient-line-footer"></div>

      <div className="footer-form-row">

        <label style={fontFamily}>My Name</label>
        <div className="footer-field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>

        <label style={fontFamily}>My Email</label>
        <div className="footer-field">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>

        <label style={fontFamily}>Message</label>
        <div className="footer-field">
          <input
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? "input-error" : ""}
          />
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>

        <button
          className="footer-btn"
          style={fontFamily}
          onClick={handleSubmit}
        >
          SEND
        </button>

      </div>

      <div className="footer-contact">

        <span style={fontFamily}>
          <i className='fa-solid-fa-phone'></i>{" "}
          <a href="tel:+917736951512">7736951512</a>
        </span>

        <span style={fontFamily}>
          <i className='fa-solid-fa-envelope'></i>{" "}
          <a href="mailto:haassnn3333@gmail.com">
            haassnn3333@gmail.com
          </a>
        </span>

      </div>

    </div>
  );
};

export default Footer;
