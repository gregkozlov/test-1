import { useEffect, useRef, useState } from "react";

import Button from "../Button";
import Toggle from "../ToggleButton";
import styles from "./styles.module.scss";
import { useTheme } from "../../hooks";

import { switchTheme } from "../../../appSlices";
import { useDispatch } from "react-redux";
import { Sun, Moon } from "../ToggleButton/images";
import Text from "../Text";
import { useTranslation } from "react-i18next";
import { Row } from "../GridContainer";
import { ChevronDown } from "../../images";

type DropdownType = {
  options?: {
    content: React.ReactNode;
  }[];
};

const Dropdown: React.FC<DropdownType> = () => {
  const { i18n } = useTranslation();
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = () => {
    const { language, changeLanguage } = i18n;
    language === "ru" ? changeLanguage("en") : changeLanguage("ru");
  };

  return (
    <div className={`${styles.dropdown} ${styles[theme]}`} ref={modalRef}>
      <Button onClick={handleDropdown}>
        <div className={styles.button_inner_container}>
          <Text>Admin T.</Text>
          <ChevronDown />
        </div>
      </Button>
      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => handleDropdown()}></div>

          <div className={styles.dropdown_items}>
            <div className={styles.dropdown__item}>log out</div>
            <div className={styles.dropdown__item}>
              <Toggle
                toggled={true}
                onClick={() => {
                  dispatch(switchTheme());
                }}
                leftPlaceholder={<Sun />}
                rightPlaceholeder={<Moon />}
              />
              <Toggle
                toggled={true}
                onClick={changeLanguage}
                leftPlaceholder={
                  <Text bold size="small" color="#4b47ff">
                    РУ
                  </Text>
                }
                rightPlaceholeder={
                  <Text size="small" color="#4b47ff" bold>
                    EN
                  </Text>
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Dropdown;
