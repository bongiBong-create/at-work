import { UserItem } from "../user-item";

import styles from "./index.module.css";

export const UserList = ({ users, title }) => {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>  
        {users?.map((user) => (
          <UserItem key={user.id} {...user} />
        ))}
      </ul>
    </>
  );
};
