import "./style/main.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LINKS_BOTTOM, LINKS_TOP } from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardNavigation } from "./shared/";
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
          <div className="route-block">
            <div className="router-checking">
              <DashboardNavigation />
            </div>
            <div className="route-screens">
              <Routes>
                {[...LINKS_TOP, ...LINKS_BOTTOM].map((el) => (
                  <Route key={el.title} path={el.url} element={<el.component />} />
                ))}
              </Routes>
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
