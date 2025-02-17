import { useState } from "react";
import { ModalContext } from "./modal-context";

export const ModalContextProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const handleIsModalActive = () => {
    setIsModal(true);
  };

  const handleIsModalClose = () => {
    setIsModal(false);
  };

  const value = {
    isModal,
    handleIsModalActive,
    handleIsModalClose,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
