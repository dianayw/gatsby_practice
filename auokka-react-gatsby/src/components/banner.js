import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./banner.module.css";

const Banner = () => {
  return (
    <div id="site-banner" className={styles.banner} role="banner">
      {/* ====== background image ====== */}
      <StaticImage
        className="banner_1"
        src="../images/banner_image_1.png"
        alt="banner_image_1"
      />
      {/* ====== left: text ====== */}
      <div className={styles.content}>
        <p className={styles.p1}>Auokka</p>
        <p className={styles.p2}>Help towards a career success</p>
        <div className={styles.p3}>
          <Link className={styles.btn} to="/products">
            FIND OUT MORE
          </Link>
        </div>
      </div>
      {/* ====== bottom: bar ====== */}
      <div className={styles.bar_set}>
        <StaticImage
          className={styles.bars}
          src="../images/banner_bars.png"
          alt="banner_bar"
        />
      </div>
    </div>
  );
};

export default Banner;
