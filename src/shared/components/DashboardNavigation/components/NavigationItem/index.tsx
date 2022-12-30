import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "../../../../../shared/images";
import { linkItemType } from "../../../../../constants/routes/types";

import styles from "./styles.module.scss";
import { useTheme } from "../../../../hooks";
import { useTranslation } from "react-i18next";

type NavigationItemType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  link: linkItemType;
};

const NavigationItem: React.FC<NavigationItemType> = ({ link, setActiveLink, activeLink }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const theme = useTheme();
  const { t } = useTranslation();
  const handleDropdownToggle = () => {
    setIsDropdownActive((prev: boolean) => !prev);
  };
  useEffect(() => {
    setIsDropdownActive(link.title === activeLink);
  }, [activeLink]);

  if (link.dropdown) {
    return (
      <>
        <div className={styles.link_container} onClick={handleDropdownToggle}>
          <NavLink
            onClick={() => {
              setActiveLink(link.title);
            }}
            to={link.url}
            className={() =>
              isDropdownActive ? `${styles.active} ${styles.link} ${styles[theme]}` : `${styles.link} ${styles[theme]}`
            }
            key={link.title}>
            {link?.icon && <link.icon className={`${styles.link__icon}`} />}
            {t(link.title)}
            <ChevronDown className={styles.link__chevron_down} />
          </NavLink>
        </div>
        {isDropdownActive &&
          activeLink === link.title &&
          link.dropdown.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) => {
                return isActive
                  ? `${styles.sub_link} ${styles.active} ${styles[theme]}`
                  : `${styles.sub_link} ${styles[theme]}`;
              }}
              key={link.title}>
              {t(link.title)}
            </NavLink>
          ))}
      </>
    );
  }

  return (
    <div className={styles.link_container}>
      <NavLink
        to={link.url}
        className={({ isActive }) => {
          return isActive ? `${styles.active} ${styles.link} ${styles[theme]}` : `${styles.link} ${styles[theme]}`;
        }}
        onClick={() => {
          setActiveLink(link.title);
        }}
        key={link.title}>
        {t(link.title)}
        {link?.icon && <link.icon className={styles.link__icon} />}
      </NavLink>
    </div>
  );
};

export default NavigationItem;
