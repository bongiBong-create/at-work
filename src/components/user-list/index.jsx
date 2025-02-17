import { UserItem } from "../user-item";

import styles from "./index.module.css";

export const UserList = ({ users, title, className }) => {
  let listClass =
    className === "active" ? styles.active_list : styles.archive_list;
    
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={`${styles.list} ${listClass}`}>
        {users?.map((user) => (
          <UserItem users={users} key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};
