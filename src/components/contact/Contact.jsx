import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  function refreshPage() {
    alert("E-mail sent");
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_aptcllo",
      "template_evxmjpg",
      form.current,
      "QoFQeARMSYpC-sUuj"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contacte Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <a
            className="contact_option"
            href="mailto:vinicius@bragamatta.com.br"
          >
            <MdOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>vinibm85@gmail.com</h5>
            <h5>Send a message</h5>
          </a>
          <a
            className="contact_option"
            href="https://api.whatsapp.com/send?phone=5531997502685"
          >
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+55 31 99750-2685</h5>
            <h5>Send a message</h5>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" email="email" placeholder="Your E-mail" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={refreshPage}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
