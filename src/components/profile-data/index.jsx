import profile from "../../app/images/profile.jpg";

import styles from "./index.module.css";

export const ProfileData = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.img}>
        <img src={profile} alt="profile img" />
      </div>

      <div className={styles.profile_info}>
        <h2 className={styles.info_title}>Данные профиля</h2>
        <h3 className={styles.info_subtitle}>Рабочее пространство</h3>
        <h4 className={styles.info_subtitle}>Приватность</h4>
        <h5 className={styles.info_subtitle}>Безопасность</h5>
      </div>
    </div>
  );
};
