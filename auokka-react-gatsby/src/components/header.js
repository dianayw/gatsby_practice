import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import * as styles from "./header.module.css";
import Login from "./login";
import Signup from "./signup";
import logo from "../images/auokka_logo_256.png";
import crossIcon from "../images/cross_icon.png";

const Header = () => {
  // extra navigation bar under Products
  const [extraNav, setExtraTab] = useState(false);
  const headerTabExpand = () => {
    setExtraTab(true);
  };
  const headerTabHide = () => {
    setExtraTab(false);
  };
  // show current tab in different color
  // React.useEffect(() => {
  //   console.log(window.location.pathname);
  // }, []);
  // sign up and log in pop up window
  const [loginWindow, setLoginWindow] = useState(false);
  const [signupWindow, setSignupWindow] = useState(false);
  // header content
  return (
    <header>
      {/* ====== left: logo and navigation ====== */}
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="logo_image" />
        <Link
          className={
            window.location.pathname === "/" ? styles.tabActived : styles.tab
          }
          to="/"
        >
          Home
        </Link>
        <Link
          className={
            window.location.pathname.includes("about")
              ? styles.tabActived
              : styles.tab
          }
          to="/about"
        >
          About Us
        </Link>
        <Link
          className={
            window.location.pathname.includes("products") ||
            window.location.pathname.includes("iems")
              ? styles.tabActived
              : styles.tab
          }
          to="/products"
          onMouseOver={headerTabExpand}
        >
          Products
        </Link>
        <Link
          className={
            window.location.pathname.includes("contact")
              ? styles.tabActived
              : styles.tab
          }
          to="/contact"
        >
          Contact Us
        </Link>
        {/* ====== hover extra bar ====== */}
        {extraNav && (
          <div
            className={styles.extra_bar}
            onMouseLeave={() => headerTabHide()}
          >
            <Link
              className={
                window.location.pathname.includes("products")
                  ? styles.extraTabActived
                  : styles.extraTab
              }
              to="/products"
            >
              Auokka
            </Link>
            <Link
              className={
                window.location.pathname.includes("iems")
                  ? styles.extraTabActived
                  : styles.extraTab
              }
              to="/iems"
            >
              IEMS
            </Link>
          </div>
        )}
      </div>
      {/* ====== right: demo and sign in ====== */}
      <div className={styles.right}>
        <div className={styles.demo}>
          <Link className={styles.btn} to="/Contact">
            BOOK A DEMO
          </Link>
        </div>
        <div className={styles.account}>
          <StaticImage
            className={styles.icon}
            src="../images/account_default.png"
            alt="account default icon"
          />
          <button
            className={styles.link}
            onClick={() => {
              setLoginWindow(true);
            }}
          >
            Log in
          </button>
          <span>/</span>
          <button
            className={styles.link}
            onClick={() => {
              setSignupWindow(true);
            }}
          >
            Sign up
          </button>
        </div>
        {loginWindow && (
          <div className={styles.popUp}>
            <Login />
            <button
              onClick={() => {
                setLoginWindow(false);
              }}
            >
              <img src={crossIcon} alt="" />
            </button>
          </div>
        )}
        {signupWindow && (
          <div className={styles.popUp}>
            <Signup />
            <button
              onClick={() => {
                setLoginWindow(false);
              }}
            >
              <img src={crossIcon} alt="" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
