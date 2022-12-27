import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Routes, Route, matchPath } from "react-router-dom";

import { LINKS_BOTTOM, LINKS_TOP } from "../../../constants/routes";
import { linkItemType } from "../../../constants/routes/types";
import NavigationItem from "./components/NavigationItem";
import { changeTitle } from "../../../appSlices";

import styles from "./navigation.module.scss";
import { useTheme } from "../../hooks";

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");
  const theme = useTheme();

  useEffect(() => {
    const links = [...LINKS_BOTTOM, ...LINKS_TOP];
    const link = links.find(
      (link) =>
        link.url === location.pathname || link.dropdown?.find((dropdownItem) => dropdownItem.url == location.pathname)
    );
    if (link) setActiveLink(link.title);
  }, []);

  return (
    <div className={`${styles.navbar}  ${styles[theme]}`}>
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
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const route = normalizeRoutes([...LINKS_TOP, ...LINKS_BOTTOM])
      .reverse()
      .find((route) => {
        return route?.url && matchPath({ path: route.url }, pathname);
      });
    dispatch(changeTitle(route?.title));
  }, [pathname]);

  return (
    <Routes>
      {normalizeRoutes([...LINKS_TOP, ...LINKS_BOTTOM]).map((route) => {
        return <Route key={route?.title} path={route?.url} element={route && <route.component />} />;
      })}
    </Routes>
  );
};

export { Navigation as default, RoutesContainer };
