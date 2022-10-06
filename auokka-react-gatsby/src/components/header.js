import * as React from "react";
import { Link } from "gatsby";
import * as styles from './header.module.css';
import logo from '../images/Auokka_logo.png';
import accountDefault from '../images/account_default.png';
import { useState } from 'react';

const Header = () => {
  const [extraTab, setExtraTab] = useState(false);
  const headerTabExpand = () => {
    setExtraTab(true);
  }
  const headerTabHide = () => {
    setExtraTab(false);
  }
  console.log("console.log header: ", styles.logo)
  return (
    <header className={styles.Header} onMouseLeave={() => headerTabHide()}>
      <div className={styles.left}>
        <img className={styles.logo} src={logo} alt="logo_image" />
        <Link className={styles.tab} to="./index">
          HOME
        </Link>
        <Link className={styles.tab} to="./about">
          About Us
        </Link>
        <Link className={styles.tab} to="./products"
          onMouseOver={() => headerTabExpand()}>
          Products
        </Link>
        <Link className={styles.tab} to="./contact">
          Contact Us
        </Link>
        {extraTab && (
          <div className={styles.extra_bar}>
            <Link className={styles.extra_tab} to="./products">
              Auokka
            </Link>
            <Link className={styles.extra_tab} to="./iems">
              IEMS
            </Link>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.demo}>
          <Link className={styles.btn} to="/Contact">
            BOOK A DEMO
          </Link>
        </div>
        <div className={styles.account}>
          <img
            className={styles.icon}
            src={accountDefault}
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
}

export default Header;
