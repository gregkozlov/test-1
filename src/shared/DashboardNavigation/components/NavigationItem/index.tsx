import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ChevronDown } from "../../../../shared/images/dropdown.svg";

import styles from "./styles.module.css";

type NavigationItemType = {
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
  link: {
    url: string;
    title: string;
    component: React.FC;
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    dropdown?: {
      url: string;
      title: string;
      component: React.FC;
    }[];
  };
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
      <div className={styles.dropdown}>
        <div className={styles.linkContainer} onClick={handleDropdownToggle}>
          <NavLink
            onClick={(e) => {
              setActiveLink(link.title);
            }}
            to={link.url}
            className={() => (isDropdownActive ? `${styles.active} ${styles.link}` : styles.link)}
            key={link.title}>
            {link?.icon && <link.icon className={`${styles.icon}`} />}
            {link.title}
            <ChevronDown className={styles.chevronDown} />
          </NavLink>
        </div>
        {isDropdownActive &&
          activeLink === link.title &&
          link.dropdown.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) => {
                return isActive ? `${styles.sublink} ${styles.active}` : styles.sublink;
              }}
              key={link.title}>
              {link.title}
            </NavLink>
          ))}
      </div>
    );
  }

  return (
    <div className={styles.linkContainer}>
      <NavLink
        to={link.url}
        className={({ isActive }) => {
          return isActive ? `${styles.active} ${styles.link}` : styles.link;
        }}
        onClick={(e) => {
          setActiveLink(link.title);
        }}
        key={link.title}>
        {link.title}
        {link?.icon && <link.icon className={styles.icon} />}
      </NavLink>
    </div>
  );
};

export default NavigationItem;
