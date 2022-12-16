import React, { useEffect, useState } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import { LINKS_BOTTOM, LINKS_TOP } from "../../constants/routes";
import { linkItemType } from "../../constants/routes/types";
import NavigationItem from "./components/NavigationItem";
import styles from "./navigation.module.scss";

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    const links = [...LINKS_BOTTOM, ...LINKS_TOP];
    const link = links.find(
      (link) =>
        link.url === location.pathname || link.dropdown?.find((dropdownItem) => dropdownItem.url == location.pathname)
    );
    if (link) setActiveLink(link.title);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_section}>
        {LINKS_TOP.map((link) => (
          <NavigationItem
            key={`${link.title}-${link.url}`}
            link={link}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        ))}
      </div>
      <div className={styles.navbar_section}>
        <hr className={styles.navbar_section__hr} />
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

const RoutesContainer: React.FC = () => {
  const normalizeRoutes = (links: linkItemType[]) => {
    return links
      .map((route) => {
        const { url, title, component, icon } = route;
        const dropdownItems = route.dropdown?.map((dropdownItem) => {
          const { url, title, component } = dropdownItem;
          return { url, title, component };
        });

        return [{ url, title, component, icon }, dropdownItems];
      })
      .flat(2)
      .filter((element) => element);
  };

  return (
    <Routes>
      {normalizeRoutes([...LINKS_TOP, ...LINKS_BOTTOM]).map((route) => {
        return <Route key={route?.title} path={route?.url} element={route && <route.component />} />;
      })}
    </Routes>
  );
};

export { Navigation as default, RoutesContainer };
