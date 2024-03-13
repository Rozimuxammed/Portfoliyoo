import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { name, email, phone };
    console.log(obj);
    alert("So'rov jo'natildi");
  };
  return (
    <div className="contact">
      <div className="container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Your name..."
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Your email..."
          />
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            type="number"
            placeholder="Your phone..."
          />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
