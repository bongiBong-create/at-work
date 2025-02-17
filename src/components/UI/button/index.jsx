import styles from "./index.module.css";

export const Button = ({ type, className, handler, children }) => {
  let buttonClass = `${styles.button}`;

  if (className === "submit") {
    buttonClass += ` ${styles.submit}`;
  } else if (className === "dropdown") {
    buttonClass += ` ${styles.dropdown_button}`;
  } else if (className === "actions") {
    buttonClass += ` ${styles.actions_button}`;
  } else if (className === "modal") {
    buttonClass += ` ${styles.modal_button}`;
  }

  return (
    <button
      type={type ? "submit" : "button"}
      onClick={handler}
      className={buttonClass}
    >
      {children}
    </button>
  );
};
