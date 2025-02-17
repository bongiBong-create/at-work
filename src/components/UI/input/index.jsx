import styles from "./index.module.css";

export const Input = ({ type, name, value, change }) => {
  return (
    <input
      className={styles.input}
      onChange={change}
      type={type}
      name={name}
      value={value}
      required
    />
  );
};
