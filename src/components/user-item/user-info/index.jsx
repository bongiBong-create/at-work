import { Button } from "../../UI/button";
import { Icon } from "../../UI/icon";
import styles from "./index.module.css";

export const UserInfo = ({
  username,
  company,
  address,
  className,
  handler,
}) => {
  return (
    <div className={styles.info}>
      <div className={styles.actions}>
        <h3 className={`${styles.username} ${className && styles.archive}`}>
          {username}
        </h3>
        <Button handler={handler}>
          <Icon name="actions" />
        </Button>
      </div>
      <h4 className={`${styles.company} ${className && styles.archive}`}>
        {company.name}
      </h4>
      <h5 className={`${styles.address} ${className && styles.arhcive}`}>
        {address.city}
      </h5>
    </div>
  );
};
