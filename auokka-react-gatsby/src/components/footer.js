import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./footer.module.css";
import auokkaLogo from "../images/Auokka_logo.png";
import iconMail from "../images/icon_mail.png";
import iconFacebook from "../images/icon_facebook.png";
import iconPhone from "../images/icon_phone.png";
import iconComputer from "../images/icon_computer.png"


const Footer = () => {
  return (
    <footer>
      <div className={styles.section}>
        <div className={styles.left}>
          <img className={styles.logo} src={auokkaLogo} alt="logo_image"/>
        </div>
        <div className={styles.middle}>
          <div className={styles.heading}>MENU</div>
          <div className={styles.links}>
            <Link className={styles.link} to="./index">
              Home
            </Link> 
            <Link className={styles.link} to="./about">
              About Us
            </Link> 
            <Link className={styles.link} to="./contact">
              Contact Us
            </Link> 
            <Link className={styles.link} to="./products">
              Auokka
            </Link> 
            <Link className={styles.link} to="./iems">
              Iems
            </Link> 
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.heading}>CONTACT US</div>
          <button onClick={() => window.location = 'mailto:info@auokka.com'}>
            <img src={iconMail} alt="mail_icon"/>
          </button> 
          <Link to="">
            <img src={iconFacebook} alt="facebook_icon"/>
          </Link> 
          <Link to="">
            <img src={iconPhone} alt="phone_icon"/>
          </Link> 
          <Link to="">
            <img src={iconComputer} alt="computer_icon"/>
          </Link> 
        </div>
      </div>
      <div className={styles.line}>
        <span>©Auokka.com</span>
      </div>
    </footer>
  );
}

export default Footer;