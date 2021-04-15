import React, { useState } from "react";

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

  const submit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div className="Contact">
      <h1>Contact</h1>
      <p>Let's get in touch!</p>
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={change}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={change}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="Message"
          value={formValues.message}
          onChange={change}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
