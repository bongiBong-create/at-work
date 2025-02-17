import { useContext } from "react";
import { ModalContext } from "../../../app/context/modal/modal-context";

import { Button } from "../button";
import { Icon } from "../icon";

import styles from "./index.module.css";

export const Modal = () => {
  const { handleIsModalClose } = useContext(ModalContext);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_inner}>
        <Button className="modal" handler={handleIsModalClose}>
          <Icon name="close" />
        </Button>
        <div className={styles.icon}>
          <Icon name="modal" />
        </div>

        <h2 className={styles.modal_title}>Изменения сохранены!</h2>
      </div>
    </div>
  );
};
