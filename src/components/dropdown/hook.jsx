import { useDispatch, useSelector } from "react-redux";
import {
  addArchiveUser,
  removeArchiveUser,
} from "../../app/store/reducers/archiveSlice";
import { addUser, removeUser } from "../../app/store/reducers/usersSlice";

export const useDropdown = (user, id) => {
  const dispatch = useDispatch();
  const { archive } = useSelector((state) => state.archive);

  const userArchive = archive.find((user) => user.id === id);

  const changeFromArchive = () => {
    if (userArchive) {
      dispatch(removeArchiveUser(userArchive.id));
      dispatch(addUser(userArchive));
    } else {
      dispatch(removeUser(id));
      dispatch(addArchiveUser(user));
    }
  };

  const deleteUser = () => {
    if (userArchive) {
      dispatch(removeArchiveUser(userArchive.id));
    } else {
      dispatch(removeUser(id));
    }
  };

  const dropdownOptions = [
    { id: 1, title: "Редактировать", type: "link" },
    {
      id: 2,
      title: userArchive ? "Активировать" : "Архивировать",
      type: "button",
      handler: changeFromArchive,
    },
    { id: 3, title: "Скрыть", type: "button", handler: deleteUser },
  ];

  return {
    dropdownOptions,
  };
};
