import { Link } from "react-router-dom";
import { DetailsContainer } from "../../components/details-container";

import styles from "./index.module.css";

export const UserDetails = () => {
  return (
    <section className="details">
      <div className="details_inner container">
        <Link className={styles.back} to={"/"}>
          Назад
        </Link>
        <DetailsContainer />
      </div>
    </section>
  );
};
