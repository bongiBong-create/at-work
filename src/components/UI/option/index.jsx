import { Link } from "react-router-dom";
import { Button } from "../button";

import styles from "./index.module.css";

export const Option = ({ id, title, type, handler }) => {
  return (
    <li>
      {type === "button" ? (
        <Button className="dropdown" handler={handler}>
          {title}
        </Button>
      ) : (
        <Link className={styles.dropdown_link} to={`${id}`}>
          {title}
        </Link>
      )}
    </li>
  );
};
