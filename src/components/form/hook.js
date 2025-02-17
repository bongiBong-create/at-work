import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateArchiveUser } from "../../app/store/reducers/archiveSlice";
import { updateActiveUser } from "../../app/store/reducers/usersSlice";
import { ModalContext } from "../../app/context/modal/modal-context";

export const useFormUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { archive } = useSelector((state) => state.archive);
  const { handleIsModalActive } = useContext(ModalContext);
  const activeProfile = users.find((user) => user.id == id);
  const archiveProfile = archive.find((user) => user.id == id);

  const [dataProfile, setDataProfile] = useState({
    name: "",
    username: "",
    email: "",
    address: { city: "" },
    phone: "",
    company: { name: "" },
  });
  const isValid = Object.values(dataProfile).every((value) =>
    typeof value === "string" ? value.trim() !== "" : true
  );

  useEffect(() => {
    if (activeProfile) {
      setDataProfile({
        ...activeProfile,
        address: { city: activeProfile.address?.city || "" },
        company: { name: activeProfile.company?.name || "" },
      });
    } else if (archiveProfile) {
      setDataProfile({
        ...archiveProfile,
        address: { city: archiveProfile.address?.city || "" },
        company: { name: archiveProfile.company?.name || "" },
      });
    }
  }, [activeProfile, archiveProfile]);

  const changeDataProfile = (e) => {
    const { name, value } = e.target;

    setDataProfile((prevData) => ({
      ...prevData,
      [name]:
        name === "address"
          ? { city: value }
          : name === "company"
          ? { name: value }
          : value,
    }));
  };

  const updateDataProfile = (e) => {
    e.preventDefault();
    if (!isValid) return;

    if (activeProfile) {
      dispatch(updateActiveUser({ id, dataProfile }));
    } else {
      dispatch(updateArchiveUser({ id, dataProfile }));
    }

    handleIsModalActive();
  };

  return {
    updateDataProfile,
    changeDataProfile,
    dataProfile,
  };
};
