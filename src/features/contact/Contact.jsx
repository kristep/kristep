import React from "react";

import Button from "../../components/button/Button";

import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <form
        action="https://formspree.io/mvowjopk"
        className="contact__form"
        method="POST"
      >
        <label htmlFor="user-name">Name</label>
        <input
          type="text"
          id="user-name"
          name="name"
          placeholder="Name Surname"
          required
          className="contact__input"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="_replyto"
          placeholder="email@example.com"
          required
          className="contact__input"
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="contact__text-area"
          required
        ></textarea>
        <Button type={"submit"}>Send</Button>
      </form>
    </div>
  );
};

export default Contact;
