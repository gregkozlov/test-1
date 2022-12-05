import "./style/main.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { LINKS } from "./constants/routes";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

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
        <div className="route-block">
          <p>Route check</p>
          <div className="router-checking">
            {LINKS.map((el) => (
              <Link to={el.url} key={el.title}>
                {el.title}
              </Link>
            ))}
          </div>
          <div className="route-screens">
            <Routes>
              {LINKS.map((el) => (
                <Route key={el.title} path={el.url} element={<el.component />} />
              ))}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
