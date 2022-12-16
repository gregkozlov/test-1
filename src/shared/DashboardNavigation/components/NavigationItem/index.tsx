import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChevronDown } from "../../../../shared/images/dropdown.svg";
import { linkItemType } from "../../../../constants/routes/types";

import styles from "./styles.module.scss";

type NavigationItemType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  link: linkItemType;
};

const NavigationItem: React.FC<NavigationItemType> = ({ link, setActiveLink, activeLink }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

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
            className={() => (isDropdownActive ? `${styles.active} ${styles.link}` : styles.link)}
            key={link.title}>
            {link?.icon && <link.icon className={`${styles.link__icon}`} />}
            {link.title}
            <ChevronDown className={styles.link__chevron_down} />
          </NavLink>
        </div>
        {isDropdownActive &&
          activeLink === link.title &&
          link.dropdown.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) => {
                return isActive ? `${styles.sub_link} ${styles.active}` : styles.sub_link;
              }}
              key={link.title}>
              {link.title}
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
          return isActive ? `${styles.active} ${styles.link}` : styles.link;
        }}
        onClick={() => {
          setActiveLink(link.title);
        }}
        key={link.title}>
        {link.title}
        {link?.icon && <link.icon className={styles.link__icon} />}
      </NavLink>
    </div>
  );
};

export default NavigationItem;
