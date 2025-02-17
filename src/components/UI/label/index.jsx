import { Input } from "../input";

import styles from "./index.module.css";

export const Label = ({ label, name, value, change }) => {
  let inputValue = value;

  if (name === "company") {
    inputValue = value.name;
  } else if (name === "address") {
    inputValue = value.city;
  }

  return (
    <label className={styles.label}>
      <h2 className={styles.field_title}>{label}</h2>
      <Input name={name} value={inputValue} type="text" change={change} />
    </label>
  );
};
