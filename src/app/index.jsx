import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Provider } from "react-redux";
import { store } from "./store";
import { ModalContextProvider } from "./context/modal/modalContextProvider";

export const App = () => {
  return (
    <Provider store={store}>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </Provider>
  );
};
