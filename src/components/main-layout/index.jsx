import { useContext, useEffect } from "react";
import { ModalContext } from "../../app/context/modal/modal-context";
import { Outlet } from "react-router-dom";

import { Header } from "../header";

import styles from "./index.module.css";

export const MainLayout = () => {
  const { isModal } = useContext(ModalContext);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModal]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
