import { useState } from "react";
import { Moon, Sun } from "./images";
import { useTheme } from "../../hooks";

import styles from "./styles.module.scss";

const Toggle: React.FC<ToggleType> = ({ label, toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);
  const theme = useTheme();

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className={`${styles.toggle} ${styles[theme]}`}>
      <input type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span>
        <Moon />
        <Sun />
      </span>
      <strong>{label}</strong>
    </label>
  );
};

export default Toggle;
