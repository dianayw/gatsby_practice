import React from "react";
import Layout from "../components/layout"
import * as styles from "./Contact.module.css";
import Form from "../components/form.js";
import mapPreview from "../images/map_preview.png";
import mapIcon from "../images/map_location_icon.png";

const ContactPage = () => {
  return (
    <Layout>
    <main className={styles.Contact}>
      <section className={styles.map}>
        <h3>Our location is here</h3>
        <div className={styles.test}>
          <img src={mapPreview} alt="google map capture" />
          <img src={mapIcon} alt="location icon" />
        </div>
      </section>
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
          <p>Suite 16A, Level 4, 428 George Street, Sydney, NSW 2000, Australia</p>
        </div>
      </section>
      <Form />
    </main>
    </Layout>
  );
}

export default ContactPage;

export const Head = () => <title>Auokka | Contact Us</title>