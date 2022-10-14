import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./banner.module.css";
import bannerImage1 from "../images/banner_image_1.png";
import barSet from "../images/banner_bars.png";

const Banner = () => {
  return (
    <div id="site-banner" className={styles.banner} role="banner">
      {/* ====== background image ====== */}
      <img className="banner_1" src={bannerImage1} alt="banner_image_1" />
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
        <img className={styles.bars} src={barSet} alt="banner_bar" />
      </div>
    </div>
  );
};

export default Banner;
