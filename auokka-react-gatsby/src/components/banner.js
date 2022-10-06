import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./banner.module.css";

const Banner = () => {
  return (
    <div id="site-banner" className={styles.banner} role="banner">
      <div className={styles.section}>
        <div className={styles.content}>
          <p className={styles.p1}>Auokka</p>
          <p className={styles.p2}>Help towards a career success</p>
          <div className={styles.p3}>
            <Link className={styles.btn} to="/products">
              FIND OUT MORE
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.bar_set}>
        <div className={styles.bars}></div>
      </div>
    </div>
  );
};

export default Banner;
