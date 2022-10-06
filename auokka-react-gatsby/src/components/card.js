import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <h5>
        If you have any questions or suggestions,
        <br />
        please contact us
      </h5>
      <Link to={"/Contact"}>
        <div>
          <p>SEND MESSAGE</p>
        </div>
      </Link>
    </div>
  );
}
export default Card;
