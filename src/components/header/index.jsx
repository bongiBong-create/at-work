import { Icon } from "../UI/icon";
import avatar from "../../app/images/avatarka.jpg";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.header_inner} container`}>
        <Link to={`list`}>
          <Icon name="logo" />
        </Link>
        <div className={styles.user}>
          <div className={styles.user_actions}>
            <Icon name="favorite" />
            <Icon name="noti" />
          </div>
          <div className={styles.user_info}>
            <img
              className="user_img"
              width={20}
              height={20}
              src={avatar}
              alt="avatar"
            />
            <h3 className={styles.user_name}>Ivan1234</h3>
          </div>
        </div>
      </div>
    </header>
  );
};
