import { forwardRef } from "react";
import { Option } from "../UI/option";
import { useDropdown } from "./hook";

import styles from "./index.module.css";

// eslint-disable-next-line react/display-name
export const Dropdown = forwardRef(({ id, isActive, user }, ref) => {
  const dropdownClass = isActive ? `${styles.isActive}` : `${styles.close}`;
  const { dropdownOptions } = useDropdown(user, id);

  return (
    <ul ref={ref} className={`${styles.dropdown} ${dropdownClass}`}>
      {dropdownOptions.map((option) => (
        <Option
          handler={option.handler}
          key={option.id}
          id={id}
          type={option.type}
          title={option.title}
        />
      ))}
    </ul>
  );
});
