import { useContext, useEffect } from "react";
import { Form } from "../form";
import { ProfileData } from "../profile-data";
import { Modal } from "../UI/modal";

import styles from "./index.module.css";
import { ModalContext } from "../../app/context/modal/modal-context";

export const DetailsContainer = () => {
  const { isModal, handleIsModalClose } = useContext(ModalContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleIsModalClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [isModal]);

  return (
    <div className={styles.details_container}>
      {isModal && <Modal />}
      <ProfileData />

      <div className={styles.data_profile}>
        <h2 className={styles.title}>Данные профиля</h2>

        <Form />
      </div>
    </div>
  );
};
