import { useSelector } from "react-redux";
import { UserList } from "../../components/user-list";

import styles from "./index.module.css";

export const withLoading = (Component) => {
  // eslint-disable-next-line react/display-name
  return ({ users, ...props }) => {
    const { isLoading } = useSelector((state) => state.users);

    if (isLoading) {
      return (
        <>
          <div className={styles.loaderTitle}>Активные</div>
          <div className={styles.loaderContainer}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.loader}></div>
            ))}
          </div>
        </>
      );
    }

    return <Component users={users} {...props} />;
  };
};

export const UserListWithLoading = withLoading(UserList);
