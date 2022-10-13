import React from "react";
import Layout from "../components/layout";
import * as styles from "./contact.module.css";
import Map from "../components/map.js";
import Form from "../components/form.js";

const ContactPage = () => {
  return (
    <Layout>
      <main className={styles.Contact}>
        {/* ====== 1 google map ====== */}
        <section className={styles.map}>
          <h3>Our location is here</h3>
          <Map />
        </section>
        {/* ====== 2 contact details ====== */}
        <section className={styles.contactdetails}>
          <div>
            <h5>Email</h5>
            <p>info@auokka.com</p>
          </div>
          <div>
            <h5>Phone</h5>
            <p>+61415094993</p>
          </div>
          <div>
            <h5>Facebook</h5>
            <p>Auokka</p>
          </div>
          <div>
            <h5>Address</h5>
            <p>
              Suite 16A, Level 4, 428 George Street, Sydney, NSW 2000, Australia
            </p>
          </div>
        </section>
        {/* ====== form component ====== */}
        <Form />
      </main>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <title>Auokka | Contact Us</title>;
