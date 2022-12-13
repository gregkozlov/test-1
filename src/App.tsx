import styles from "./style/main.module.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { DashboardNavigation, Header, Rotes } from "./shared/";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
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
          <div className={styles.route_checker}>
            <DashboardNavigation />
          </div>
          <div className={styles.route_screens}>
            <Rotes />
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
