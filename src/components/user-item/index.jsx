import { useRef, useState } from "react";

import { Dropdown } from "../dropdown";
import { UserInfo } from "./user-info";

import avatar from "../../app/images/avatar.jpg";

import styles from "./index.module.css";

export const UserItem = ({
  id,
  username,
  address,
  company,
  users,
  isArchive,
}) => {
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const user = users.find((user) => user.id === id);

  const changeIsActive = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = () => {
    if (!dropdownRef.current) {
      setIsActive(!isActive);
    }
  };

  return (
    <li className={styles.item} onClick={handleClickOutside}>
      <div className={styles.img}>
        <img
          className={isArchive ? styles.archive : ""}
          src={avatar}
          alt="avatar"
        />
      </div>
      <UserInfo
        handler={changeIsActive}
        className={isArchive ? styles.archive : ""}
        username={username}
        address={address}
        company={company}
      />
      <Dropdown ref={dropdownRef} id={id} isActive={isActive} user={user} />
    </li>
  );
};
