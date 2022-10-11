// import * as React from "react";
// import { useRef } from "react";
// import * as styles from "./signup.module.css";
// import logo from "../images/auokka_logo_256.png";

// const Signup = () => {
//   const inputUsername = useRef();
//   const inputPassword = useRef();
//   const submit = (e) => {
//     e.preventDefault();
//     const username = inputUsername.current.value;
//     const password = inputPassword.current.value;
//     alert(`Name: ${username}\nPhone: ${password}`);
//     inputUsername.current.value = "";
//     inputPassword.current.value = "";
//   };
//   return (
//     <div className={styles.signup}>
//       <form className={styles.popUp} onSubmit={submit}>
//         <img src={logo} />
//         <h2>SIGN UP</h2>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" ref={inputUsername} />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" ref={inputPassword} />
//         </div>
//         <div>
//           <button>Sign up</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;
