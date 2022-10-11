import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import * as styles from "./header.module.css";
import logo from "../images/auokka_logo_256.png";

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
  const [tab1Color, setTab1Color] = useState("var(--teal-green");
  const [tab2Color, setTab2Color] = useState("var(--dark-gray");
  const [tab3Color, setTab3Color] = useState("var(--dark-gray");
  const [tab4Color, setTab4Color] = useState("var(--dark-gray");
  const [tab5Color, setTab5Color] = useState("var(--dark-gray");
  const [tab6Color, setTab6Color] = useState("var(--dark-gray");
  function tabColorReset() {
    setTab1Color("var(--dark-gray");
    setTab2Color("var(--dark-gray");
    setTab3Color("var(--dark-gray");
    setTab4Color("var(--dark-gray");
    setTab5Color("var(--dark-gray");
    setTab6Color("var(--dark-gray");
  }
  function hanldeTabChange1() {
    tabColorReset();
    setTab1Color("var(--teal-green");
  }
  function hanldeTabChange2() {
    tabColorReset();
    setTab2Color("var(--teal-green");
  }
  function hanldeTabChange3() {
    tabColorReset();
    setTab3Color("var(--teal-green");
  }
  function hanldeTabChange4() {
    tabColorReset();
    setTab4Color("var(--teal-green");
  }
  function hanldeTabChange5() {
    tabColorReset();
    setTab5Color("var(--teal-green");
  }
  function hanldeTabChange6() {
    tabColorReset();
    setTab6Color("var(--teal-green");
  }
  // const [currentTab, setCurrentTab] = useState (1);
  // const handleTabChange = () => {
  //   setCurrentTab(2);
  //   console.log("change to 2");
  // }
  return (
    <header>
      {/* ====== left: logo and navigation ====== */}
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="logo_image" />
        <Link
          className={styles.tab}
          to="/"
          style={{ color: tab1Color }}
          onClick={() => hanldeTabChange1()}
        >
          Home
        </Link>
        <Link
          className={styles.tab}
          to="/about"
          style={{ color: tab2Color }}
          onClick={() => hanldeTabChange2()}
        >
          About Us
        </Link>
        <Link
          className={styles.tab}
          to="/products"
          style={{ color: tab3Color }}
          onClick={() => hanldeTabChange3()}
          onMouseOver={headerTabExpand}
        >
          Products
        </Link>
        <Link
          className={styles.tab}
          to="/contact"
          style={{ color: tab4Color }}
          onClick={() => hanldeTabChange4()}
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
              className={styles.extra_tab}
              to="/products"
              style={{ color: tab5Color }}
              onClick={() => hanldeTabChange5()}
            >
              Auokka
            </Link>
            <Link
              className={styles.extra_tab}
              to="/iems"
              style={{ color: tab6Color }}
              onClick={() => hanldeTabChange6()}
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
          <Link className={styles.link} to="">
            Log in
          </Link>
          <span>/</span>
          <Link className={styles.link} to="">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
