import { Icon } from "../UI/icon";

import avatar from "../../app/images/avatar.jpg";

import styles from "./index.module.css";

export const UserItem = ({ username, address, company }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="avatar" />
      <div className={styles.info}>
        <h3 className={styles.username}>{username}</h3>
        <h4 className={styles.company}>{company.name}</h4>
        <h5 className={styles.address}>{address.city}</h5>
      </div>
      <button>
        <Icon name="actions" />
      </button>
    </li>
  );
};
