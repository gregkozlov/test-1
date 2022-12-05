import "./style/main.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>
        <p>admin</p>
      </div>
      <div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
        <div>{t("text")}</div>
      </div>
    </Suspense>
  );
};

export default App;
