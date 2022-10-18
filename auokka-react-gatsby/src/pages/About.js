import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from "./about.module.css";
import profilePhoto from "../images/profile_photo.png";

const AboutPage = () => {
  return (
    <Layout>
      <div className={styles.About}>
        {/* ====== 1 company profile ====== */}
        <section className={styles.company_profile}>
          <div className={styles.profile_bg}>
            <img
              className="profile_img"
              src={profilePhoto}
              alt="company_photo"
            />
          </div>
          <div className={styles.profile_content}>
            <h3>Company Profile</h3>
            <p>
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
            </p>
            <p>
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
            </p>
          </div>
        </section>
        {/* ====== 2 more text about company ====== */}
        <section className={styles.company_more}>
          <p>
            <span>Auokka</span> is developing an ecosystem to get involved with
            trainee, trainers, institutes, universities and enterprises to
            provide quality continue education and after-degree career services.
            Auokka is developing an ecosystem to get involved with trainee,
            trainers, institutes, universities and enterprises to provide
            quality continue education and after-degree career services. Auokka
            is developing an ecosystem to get involved with trainee, trainers,
            institutes, universities and enterprises to provide quality continue
            education and after-degree career services. Auokka is developing an
            ecosystem to get involved with trainee, trainers, institutes,
            universities and enterprises to provide quality continue education
            and after-degree career services.
          </p>
          <p>
            <span>Auokka</span> is developing an ecosystem to get involved with
            trainee, trainers, institutes, universities and enterprises to
            provide quality continue education and after-degree career services.
            Auokka is developing an ecosystem to get involved with trainee,
            trainers, institutes, universities and enterprises to provide
            quality continue education and after-degree career services. Auokka
            is developing an ecosystem to get involved with trainee, trainers,
            institutes, universities and enterprises to provide quality continue
            education and after-degree career services.
          </p>
          <p>
            <span>Auokka</span> is developing an ecosystem to get involved with
            trainee, trainers, institutes, universities and enterprises to
            provide quality continue education and after-degree career services.
            Auokka is developing an ecosystem to get involved with trainee,
            trainers, institutes, universities and enterprises to provide
            quality continue education and after-degree career services. Auokka
            is developing an ecosystem to get involved with trainee, trainers,
            institutes, universities and enterprises to provide quality continue
            education and after-degree career services. Auokka is developing an
            ecosystem to get involved with trainee, trainers, institutes,
            universities and enterprises to provide quality continue education
            and after-degree career services. Auokka is developing an ecosystem
            to get involved with trainee, trainers, institutes, universities and
            enterprises to provide quality continue education and after-degree
            career services.
          </p>
        </section>
        {/* ====== 3 feature ====== */}
        <section className={styles.feature}>
          <h3>Auokka meets the need of every school</h3>
          <div className={styles.fea_content}>
            <div className={styles.fea_1}>
              <div className={styles.fea_img}></div>
              <h4>Intelligence</h4>
              <p>
                Empowers school and teacher with AI-based data engine to gain
                insights from school data and further improve daily efficiency
              </p>
            </div>
            <div className={styles.fea_2}>
              <div className={styles.fea_img}></div>
              <h4>Expansibility</h4>
              <p>
                Provide advanced mechanism of data science to corporate with
                external and third-party data source and gain exceptional
                insights
              </p>
            </div>
            <div className={styles.fea_3}>
              <div className={styles.fea_img}></div>
              <h4>Modularisation</h4>
              <p>
                Equip school with feasibility to subscribe various functions to
                satisfy their own needs, and self-manage accessibility
                fordifferent staff
              </p>
            </div>
            <div className={styles.fea_4}>
              <div className={styles.fea_img}></div>
              <h4>Sustainability</h4>
              <p>
                Constantly develops new modules and improves existing modules to
                strengthen the service ability of schools
              </p>
            </div>
          </div>
        </section>
        {/* ====== 4 roles ====== */}
        <section className={styles.roles}>
          <h3>Whatever your role, Auokka can help</h3>
          <div className="rol_1">
            <StaticImage
              src="../images/role_photo_1.png"
              alt="photo_of_parent"
            />
            <h5>I'm a Parent</h5>
            <p>
              Auokka's new Parents app puts you in control. Stay across your
              child's school development, and have direct communication with
              teachers. And that's just for starters.
            </p>
          </div>
          <div className="rol_2">
            <StaticImage
              src="../images/role_photo_2.png"
              alt="photo_of_teacher"
            />
            <h5>I'm a Teacher</h5>
            <p>
              There's more time to teach thanks to Auokka's school management
              system. All your routine tasks are made simple &amp; efficient.
            </p>
          </div>
          <div className="rol_3">
            <StaticImage
              src="../images/role_photo_3.png"
              alt="photo_of_administrator"
            />
            <h5>I'm an Administrator</h5>
            <p>
              Imagine less manual data input, easy integration &amp; automated
              communication. Welcome to Auokka's school management system.
            </p>
          </div>
          <div className="rol_4">
            <StaticImage
              src="../images/role_photo_4.png"
              alt="photo_of_executive"
            />
            <h5>I'm an Executive</h5>
            <p>
              Comprehensive, user-friendly, compliant &amp; cost-saving. All the
              things you'd expect from a school management system are delivered
              here by Auokka.
            </p>
          </div>
        </section>
        {/* ====== 5 office photo ====== */}
        <section className={styles.company_office}>
          <h3>A corner of the company</h3>
          <div>
            <StaticImage
              src="../images/office_photo_1.png"
              alt="office_photo_orange"
            />
            <StaticImage
              src="../images/office_photo_2.png"
              alt="office_photo_pink"
            />
            <StaticImage
              src="../images/office_photo_3.png"
              alt="office_photo_desk"
            />
            <StaticImage
              src="../images/office_photo_4.png"
              alt="office_photo_glass"
            />
            <StaticImage
              src="../images/office_photo_5.png"
              alt="office_photo_bar"
            />
            <StaticImage
              src="../images/office_photo_3.png"
              alt="office_photo_desk"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Auokka | About Us</title>;
