import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.section}>
        {/* ====== left: logo ====== */}
        <div className={styles.left}>
          <StaticImage
            className={styles.logo}
            src="../images/auokka_logo_256.png"
            alt="logo_image"
          />
        </div>
        {/* ====== middle: navigation ====== */}
        <div className={styles.middle}>
          <div className={styles.heading}>MENU</div>
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/products">Auokka</Link>
            <Link to="/iems">Iems</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        {/* ====== right: contact link ====== */}
        <div className={styles.right}>
          <div className={styles.heading}>CONTACT US</div>
          <button onClick={() => (window.location = "mailto:info@auokka.com")}>
            <StaticImage
              className={styles.icon}
              src="../images/icon_mail.png"
              alt="mail_icon"
            />
          </button>
          <Link to="">
            <StaticImage
              className={styles.icon}
              src="../images/icon_facebook.png"
              alt="facebook_icon"
            />
          </Link>
          <Link to="">
            <StaticImage
              className={styles.icon}
              src="../images/icon_phone.png"
              alt="phone_icon"
            />
          </Link>
          <Link to="">
            <StaticImage
              className={styles.icon}
              src="../images/icon_computer.png"
              alt="computer_icon"
            />
          </Link>
        </div>
      </div>
      <div className={styles.line}>
        <span>©Auokka.com {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
