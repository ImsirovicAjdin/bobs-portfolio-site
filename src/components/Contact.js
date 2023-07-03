import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">Contact Me</div>
      <div className="contact__subtitle">Let's get in touch</div>
      <div className="contact__form">
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="contact__submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
