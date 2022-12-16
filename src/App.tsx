import styles from "./style/main.module.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { DashboardNavigation, RoutesContainer } from "./shared/";
import { LINKS_BOTTOM, LINKS_TOP } from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "./pages";
import { RootState } from "./store";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isAuth = useSelector<RootState>((state) => state.rootReducer.userSliceReducer.isAuth);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      {isAuth ? (
        <BrowserRouter>
          <div>
            <p>admin</p>
          </div>
          <div>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("ru")}>RU</button>
            <div>{t("text")}</div>
          </div>
          <div className={styles.route_block}>
            <div className={styles.router_checking}>
              <DashboardNavigation />
            </div>
            <div className={styles.route_screens}>
              <RoutesContainer />
            </div>
          </div>
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </Suspense>
  );
};

export default App;
