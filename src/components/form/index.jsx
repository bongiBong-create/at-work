import { config } from "./config";
import { useFormUser } from "./hook";

import { Label } from "../UI/label";
import { Button } from "../UI/button";

import styles from "./index.module.css";

export const Form = () => {
  const { changeDataProfile, dataProfile, updateDataProfile } = useFormUser();

  return (
    <form className={styles.form}>
      {config.map((label) => (
        <Label
          key={label.name}
          name={label.name}
          value={dataProfile[label.name]}
          change={changeDataProfile}
          label={label.label}
        />
      ))}

      <Button type="submit" handler={updateDataProfile} className="submit">
        Сохранить
      </Button>
    </form>
  );
};
