import React from "react";
import Layout from "../components/layout"
import * as styles from "./Iems.module.css";
import Card from "../components/card.js";
import projEg2 from "../images/proj_eg_2.png";

const IemsPage = () => {
  return (
    <Layout>
    <div className={styles.iems}>
      <section className={styles.iems_brief}>
        <div className={styles.iems_content}>
          <h3>IEMS</h3>
          <p>
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
            career services.Auokka is developing an ecosystem to get involved
            with trainee, trainers, institutes, universities and enterprises to
            provide quality continue education and after-degree career services.
          </p>
        </div>
        <div className={styles.iems_text_bg}>
          <img src={projEg2} alt="project example" />
        </div>
      </section>
      <section className={styles.iems_feature}>
        <h3>Platform features</h3>
        <div className={styles.iems_fea_content}>
          <div className={styles.iems_fea_1}>
            <div className={styles.iems_fea_img}></div>
            <h4>Insights</h4>
            <p>
              We treat students as our core business covering all aspects of
              training.
            </p>
          </div>
          <div className={styles.iems_fea_2}>
            <div className={styles.iems_fea_img}></div>
            <h4>Efficiency</h4>
            <p>
              We offer one-stop platform to maximise user experience and provide
              instant results to teachers daily queries across various internal
              and external systems
            </p>
          </div>
          <div className={styles.iems_fea_3}>
            <div className={styles.iems_fea_img}></div>
            <h4>Change</h4>
            <p>
              We help schools to explore school data to change and improve
              existing operations to provide better learning experience.
            </p>
          </div>
          <div className={styles.iems_fea_4}>
            <div className={styles.iems_fea_img}></div>
            <h4>Growth</h4>
            <p>
              We provide data analytics for schools to closely monitor student's
              growth.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.research_background}>
        <h3>Research background</h3>
        <p>
          Every student has different progress. Many student who fall behind
          never catch up, while many highly able students are not stretched.
          Australian research shows that achievement can be spread over up to
          eight year-levels within a single class: a Year 7 class may have
          students working at a Year 1 level, while some others have mastered
          concepts from Year 8. However, making sure every student learns is the
          core business of schools. We judge the success of our education by how
          much progress our students make that will reinforces the value of
          effort and persistence, and further, support future success in life.
        </p>
        <p>
          Schools and teachers have long understood this challenge, yet many
          still struggle to respond effectively. In fact, streaming students or
          holding back low performers is not the answer.Instead, teaching should
          focus on each student's needs. This requires we have accurate
          information about what students know and are ready to learn
          next. Actually, many schools have collected sufficient data in their
          daily teaching. Formative assessment, teacher student feedback and
          evaluation of teaching programs have been proven to have a significant
          effort on learning. However, such data haven't been fully explored or
          exposed their potential.
        </p>
      </section>
      <Card />
    </div>
    </Layout>
  );
}

export default IemsPage;

export const Head = () => <title>Auokka | Iems</title>