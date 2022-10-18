import * as React from "react";
import { Link } from "gatsby";
import { useState, useRef } from "react";
import * as styles from "./banner.module.css";
import bannerImage1 from "../images/banner/banner_image_1.png";
import bannerImage2 from "../images/banner/banner_image_2.png";
import bannerImage3 from "../images/banner/banner_image_3.png";
import bannerImage4 from "../images/banner/banner_image_4.png";
import bannerImage5 from "../images/banner/banner_image_5.png";

const bannerImages = [
  bannerImage1,
  bannerImage2,
  bannerImage3,
  bannerImage4,
  bannerImage5,
];
const delay = 10000;

const Banner = () => {
  // slideshow banner images
  const [bannerNum, setBannerNum] = useState(1);
  const timeoutRef = useRef(null);
  React.useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () =>
        setBannerNum((prevNum) =>
          prevNum === bannerImages.length - 1 ? 0 : prevNum + 1
        ),
      delay
    );
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [bannerNum]);

  return (
    <div id="site-banner" className={styles.banner} role="banner">
      {/* ====== background image slider====== */}
      <div
        className={styles.bannerSlider}
        style={{ transform: `translate(${-bannerNum * 100}%, 0)` }}
      >
        {bannerImages.map((imageLink, index) => (
          <div className={styles.slide}>
            <img key={index} src={imageLink}></img>
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
        ))}
      </div>
      {/* ====== bottom: bar ====== */}
      <div className={styles.slideBarSet}>
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            className={
              bannerNum === idx ? styles.slideBarActive : styles.slideBar
            }
            onClick={() => {
              setBannerNum(idx);
            }}
          >
            <div></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
