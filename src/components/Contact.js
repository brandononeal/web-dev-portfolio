import React, { useState } from "react";
import emailjs from "emailjs-com";

const initialFormValues = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oobez2q",
        "template_le28f9b",
        e.target,
        "user_HqJH1X6PWAfsFb0iPEM14"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormValues(initialFormValues);
  };

  return (
    <div className="Contact">
      <br />
      <br />
      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={change}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={change}
        />
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={change}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
