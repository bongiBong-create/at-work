import { useEffect } from "react";
import { getUsers } from "../../app/store/reducers/usersSlice";
import { useDispatch, useSelector } from "react-redux";

import { UserList } from "../../components/user-list";
import { UserListWithLoading } from "../../helpers/hocs/skeleton";

import styles from "./index.module.css";

export const Users = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { archive } = useSelector((state) => state.archive);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <section className={styles.persons}>
      <div className={`${styles.person_inner} container`}>
        <UserListWithLoading
          users={users.slice(4)}
          title="Активные"
          className="active"
        />
        <UserList className="archive" users={archive} title="Архив" />
      </div>
    </section>
  );
};
