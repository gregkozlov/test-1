import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <div>{t("text")}</div>
    </div>
  );
};

export default Header;
