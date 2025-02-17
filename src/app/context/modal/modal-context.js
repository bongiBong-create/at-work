import { createContext } from "react";

export const ModalContext = createContext({
  isModal: false,
  handleIsModalActive: () => {},
  handleIsModalClose: () => {},
});
