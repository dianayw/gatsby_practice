import * as React from "react";
import { useRef } from "react";
import * as styles from "./form.module.css";

const Form = () => {
  const inputName = useRef();
  const inputPhone = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const submit = (e) => {
    e.preventDefault();
    const name = inputName.current.value;
    const phone = inputPhone.current.value;
    const email = inputEmail.current.value;
    const message = inputMessage.current.value;
    alert(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
    );
    inputName.current.value = "";
    inputPhone.current.value = "";
    inputEmail.current.value = "";
    inputMessage.current.value = "";
  };
  return (
    <form className={styles.form} onSubmit={submit}>
      <h3>Contact Us</h3>
      <h5>Please fill in your contact information</h5>
      <div className={styles.twoColumn}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={inputName} />
        <label htmlFor="phone">Phone</label>
        <input type="number" id="phone" ref={inputPhone} />
      </div>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={inputEmail} />
      <label htmlFor="message">Leave a message</label>
      <textarea
        type="text"
        id="message"
        ref={inputMessage}
        rows="5"
        placeholder="leave a message ..."
      />
      <button>SEND MESSAGE</button>
    </form>
  );
}

export default Form;
