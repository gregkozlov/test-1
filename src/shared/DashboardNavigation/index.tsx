import React, { useEffect, useState } from "react";

import { LINKS_BOTTOM, LINKS_TOP } from "../../constants/routes";
import NavigationItem from "./components/NavigationItem";
import styles from "./navigation.module.css";

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  return (
    <div className={styles.navbar}>
      <div className={styles.linksSection}>
        {LINKS_TOP.map((link) => (
          <NavigationItem
            key={`${link.title}-${link.url}`}
            link={link}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </div>
      <div className={styles.linksSection}>
        <hr className={styles.hr} />

        {LINKS_BOTTOM.map((link) => (
          <NavigationItem
            key={`${link.title}-${link.url}`}
            link={link}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
