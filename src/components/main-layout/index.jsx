import { Outlet } from "react-router-dom";
import { Header } from "../header";

import styles from "./index.module.css";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
