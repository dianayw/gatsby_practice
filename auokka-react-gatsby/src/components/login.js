import * as React from "react";
import { useRef } from "react";
import * as styles from "./login.module.css";
import logo from "../images/auokka_logo_256.png";

const Login = () => {
  const inputUsername = useRef();
  const inputPassword = useRef();
  const submit = (e) => {
    e.preventDefault();
    const username = inputUsername.current.value;
    const password = inputPassword.current.value;
    alert(`Username: ${username}\nPassword: ${password}`);
    inputUsername.current.value = "";
    inputPassword.current.value = "";
  };
  return (
    <form className={styles.login} onSubmit={submit}>
      <img src={logo} />
      <h2>LOG IN</h2>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" ref={inputUsername} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" ref={inputPassword} />
      </div>
      <div>
        <button>Log in</button>
      </div>
    </form>
  );
};

export default Login;
