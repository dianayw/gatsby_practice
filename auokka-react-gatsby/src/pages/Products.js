import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import * as styles from "./products.module.css";
import Card from "../components/card.js";
import projEg1 from "../images/proj_eg_1.png";

const ProductsPage = () => {
  return (
    <Layout>
      <div className={styles.products}>
        {/* ====== 1 auokka brief ====== */}
        <section className={styles.auokka_brief}>
          <div className={styles.auokka_content}>
            <h3>Auokka</h3>
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
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
              Auokka is developing an ecosystem to get involved with trainee,
              trainers, institutes, universities and enterprises to provide
              quality continue education and after-degree career services.
            </p>
          </div>
          <div className={styles.auokka_text_bg}>
            <img
              className={styles.auokka_img}
              src={projEg1}
              alt="project example"
            />
          </div>
        </section>
        {/* ====== 2 platform features ====== */}
        <section className={styles.auokka_feature}>
          <h3>Platform features</h3>
          <div className={styles.auo_fea_content}>
            <div className={styles.auo_fea_1}>
              <div className={styles.auo_fea_img}></div>
              <h4>Student Centered Philosophy</h4>
              <p>
                We treat students as our core business covering all aspects of
                training.
              </p>
            </div>
            <div className={styles.auo_fea_2}>
              <div className={styles.auo_fea_img}></div>
              <h4>Business Automation</h4>
              <p>
                We implement business automation from enrolment to certificate
                via minimize admin involvement on enrollment, payment, training,
                assessment, messaging and reminder.
              </p>
            </div>
            <div className={styles.auo_fea_3}>
              <div className={styles.auo_fea_img}></div>
              <h4>Intelligent data analytics</h4>
              <p>
                We provide tailored data analytics on all school data which
                cover trainer workload and performance, trainee attendance,
                reaction and performance during training, partner organisation /
                companies compliance, and school management.
              </p>
            </div>
            <div className={styles.auo_fea_4}>
              <div className={styles.auo_fea_img}></div>
              <h4>Hands-on supports</h4>
              <p>
                Our Australian local support team brings instantly hands-on
                assist to avoid business disruption caused by technical or
                operational issues.
              </p>
            </div>
          </div>
        </section>
        {/* ====== 3 function display ====== */}
        <section className={styles.function_display}>
          <h3>Function display</h3>
          <div className={styles.func_content}>
            <div className={styles.func_1}>
              <h5>Functions</h5>
              <p>Course Builder</p>
              <p>Enrolment</p>
              <p>Student/Trainee Portal</p>
              <p>Teacher/Trainer/Assessor Portal</p>
              <p>Corporate/employer portal</p>
              <p>Data and Documents management</p>
              <p>Dashboard</p>
              <p>Messaging</p>
              <p>Alert/reminder</p>
              <h6>Development completed</h6>
            </div>
            <div className={styles.func_2}>
              <h5>Advanced Functions</h5>
              <p>Training tracking</p>
              <p>Timetabling</p>
              <p>Trainer allocation</p>
              <p>Trainer Calendar</p>
              <p>Online Exam builder and automatic bulk marking</p>
              <p>Finance/Reporting</p>
              <h6>Development completed</h6>
            </div>
            <div className={styles.func_3}>
              <h5>Under Development</h5>
              <p>Virtual Classroom</p>
              <p>Learning Management</p>
              <p>Compliance</p>
              <p>Report</p>
              <p>Sales and marketing</p>
              <h6>Function development ...</h6>
            </div>
          </div>
        </section>
        {/* ====== contact card component ====== */}
        <Card />
      </div>
    </Layout>
  );
};

export default ProductsPage;

export const Head = () => <title>Auokka | Iems</title>;
