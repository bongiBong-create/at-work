import { useEffect } from "react";
import { getUsers } from "../../app/store/reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { UserList } from "../../components/user-list";

import styles from "./index.module.css";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  console.log(users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <section className={styles.persons}>
      <div className={`${styles.person_inner} container`}>
        <UserList users={users.slice(4)} title="Активные" />
        <UserList users={users.slice(4)} title="Архив" />
      </div>
    </section>
  );
};
