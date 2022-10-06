import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "./Home.module.css";
import Form from "../components/form.js"
import coopIcon1 from "../images/home_org_1.png";
import coopIcon2 from "../images/home_org_2.png";
import coopIcon3 from "../images/home_org_3.png";
import coopIcon4 from "../images/home_org_4.png";
import coopIcon5 from "../images/home_org_5.png";
import coopIcon6 from "../images/home_org_6.png";
import coopIcon7 from "../images/home_org_7.png";
import projEg1 from "../images/proj_eg_1.png";
import projEg2 from "../images/proj_eg_2.png";
import rolePhoto1 from "../images/role_photo_1.png";
import rolePhoto2 from "../images/role_photo_2.png";
import rolePhoto3 from "../images/role_photo_3.png";
import rolePhoto4 from "../images/role_photo_4.png";
import goalDiagram from "../images/goal_diagram.png";
import goalIcon1 from "../images/goal_icon_1.png";
import goalIcon2 from "../images/goal_icon_2.png";

const HomePage = () => {
  console.log("console.log: ", styles.about_article)
  return (
    <Layout>
    <main className={styles.Home}>
      <section className={styles.cooperator}>
        <img src={coopIcon1} alt="acer" />
        <img src={coopIcon2} alt="university_of_melbourne" />
        <img src={coopIcon3} alt="university_of_technology_sydney" />
        <img src={coopIcon4} alt="university_of_macquarie" />
        <img src={coopIcon5} alt="deakin_university" />
        <img src={coopIcon6} alt="benchmark_college" />
        <img src={coopIcon7} alt="pink_icon" />
      </section>
      <section className={styles.about_article}>
        <h3>About Us</h3>
        <p className={styles.about_p1}>
          Since its establishment, auokka has been focusing on education and
          services, taking the construction of a perfect "lifelong education
          system" and "complete educationsystem" as its development strategy,
          firmly establishing the concept of "education first, everything for
          education", attaching great importance to teaching quality, applying
          advanced web sites and courseware resources, doing a good job in
          website content construction, and providing an integrated online data
          analysis platform for schools / teachers / students, Help the great
          development of education!
        </p>
        <p className={styles.about_p2}>
          The core content of auokka company is to provide a platform for the
          unique development of students around the word "education". In the
          field of education, auokka is making great efforts to achieve a
          convenient, efficient and high-quality education environment and
          content for students. It has launched an education platform suitable
          for various large environments and realized the real Internet
          education reform.
        </p>
        <p className={styles.about_p3}>
          Auokka company always adheres to the principle of high-quality
          education. While deepening the existing projects, it has developed
          more high-quality education platforms, laying a solid foundation for
          the early realization of the development strategy of establishing a
          complete "lifelong education system" and "complete education system"!
        </p>
        <Link className={styles.view_btn} to="/About">
          <p className={styles.view_label}>View More </p>
          <div className={styles.view_arrow}></div>
        </Link>
      </section>
      <section className={styles.projects}>
        <aside className={styles.proj_1}>
          <div className={styles.proj_tag}>
            <p>Project</p>
          </div>
          <div className={styles.proj_content}>
            <h5>AUOKKA</h5>
            <p>
              Auokak system is a daily management system for students, involving
              students, teachers, research institutes, universities and
              enterprises to provide high-quality continuing education and post
              degree career services.
            </p>
            <p>
              Students can complete registration, contact, training, examination
              and activities in the system, and support teaching management,
              such as resource management and educational administration
              management. An integrated platform for formative assessment,
              teacher-student feedback and teaching plan assessment.
            </p>
            <Link className={styles.proj_link} to="Products">
              Find out more
            </Link>
          </div>
          <div className={styles.proj_img}>
            <img src={projEg1} alt="projext 1 preview" />
          </div>
        </aside>
        <aside className={styles.proj_2}>
          <div className={styles.proj_tag}>
            <p>Project</p>
          </div>
          <div className={styles.proj_content}>
            <h5>IEMS</h5>
            <p>
              The management system (IEMs) for schools system is to draw a big
              data learning situation analysis data Kanban based on basic data,
              collect students' learning efficiency and learning effect data,
              and summarize students' learning situation data to teachers and
              administrators through big data analysis, providing scientific and
              effective data support for teachers' teaching and students.
            </p>
            <Link className={styles.proj_link} to="/Iems">
              Find out more
            </Link>
          </div>
          <div className={styles.proj_img}>
            <img src={projEg2} alt="projext 2 preview" />
          </div>
        </aside>
      </section>
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
              external and third-party data source and gain exceptional insights
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
      <section className={styles.roles}>
        <h3>Whatever your role, Auokka can help</h3>
        <div className={styles.rol_1}>
          <img src={rolePhoto1} alt="photo_of_parent" />
          <h5>I'm a Parent</h5>
          <p>
            Auokka's new Parents app puts you in control. Stay across your
            child's school development, and have direct communication with
            teachers. And that's just for starters.
          </p>
        </div>
        <div className={styles.rol_2}>
          <img src={rolePhoto2} alt="photo_of_teacher" />
          <h5>I'm a Teacher</h5>
          <p>
            There's more time to teach thanks to Auokka's school management
            system. All your routine tasks are made simple &amp; efficient.
          </p>
        </div>
        <div className={styles.rol_3}>
          <img src={rolePhoto3} alt="photo_of_administrator" />
          <h5>I'm an Administrator</h5>
          <p>
            Imagine less manual data input, easy integration &amp; automated
            communication. Welcome to Auokka's school management system.
          </p>
        </div>
        <div className={styles.rol_4}>
          <img src={rolePhoto4} alt="photo_of_executive" />
          <h5>I'm an Executive</h5>
          <p>
            Comprehensive, user-friendly, compliant &amp; cost-saving. All the
            things you'd expect from a school management system are delivered
            here by Auokka.
          </p>
        </div>
      </section>
      <section className={styles.goals}>
        <img src={goalDiagram} alt="goal_diagram" />
        <div className={styles.goal_content}>
          <p>
            Auokka always adheres to the principle of high-quality education and
            develops more high-quality education platforms while deepening the
            existing projects
          </p>
          <p>
            If you're looking for a one-stop shop for your school management
            system, Auokka solves your stresses.
          </p>
          <p>
            From building a balanced class, tracking attendance and efficiently
            creating wellbeing assessments, academic reports, it's all made easy
            in Auokka's platform.
          </p>
          <img src={goalIcon1} alt="microsoft" />
          <img src={goalIcon2} alt="global_payments" />
        </div>
      </section>
      <section className={styles.contactinfo}>
        <div className={styles.contact_list}>
          <h5>Email</h5>
          <p>info@auokka.com</p>
          <h5>Phone</h5>
          <p>+61415094993</p>
          <h5>Facebook</h5>
          <p>Auokka</p>
          <h5>Address</h5>
          <p>Suite 16A, Level 4, 428 George Street, Sydney, NSW 2000, Australia</p>
        </div>
        <div className={styles.contact_import}>
          <Form />
        </div>
      </section>
    </main>
    </Layout>
  );
}

export default HomePage;

export const Head = () => <title>Auokka | Home</title>