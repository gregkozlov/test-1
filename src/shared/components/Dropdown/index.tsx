import { useEffect, useState } from "react";

import Button from "../Button";
import Toggle from "../ToggleButton";
import styles from "./styles.module.scss";
import { useTheme } from "../../hooks";

import { switchTheme } from "../../../appSlices";
import { useDispatch } from "react-redux";
type DropdownType = {
  options?: {
    content: React.ReactNode;
  }[];
};

const Dropdown: React.FC<DropdownType> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${styles.dropdown} ${styles[theme]}`}>
      <Button onClick={handleDropdown}>Admin T.</Button>
      {isOpen && (
        <div className={styles.dropdown_items}>
          <div className={styles.dropdown__item}>test</div>
          <div className={styles.dropdown__item}>
            <Toggle
              toggled={true}
              onClick={() => {
                dispatch(switchTheme());
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
