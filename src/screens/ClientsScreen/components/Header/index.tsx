import { useTranslation } from "react-i18next";
import { Button, SearchBar } from "../../../../shared";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className={styles.input_container}>
        <SearchBar placeholder={t("placeholders.search") as string} />
      </div>
      <div className={styles.button_container}>
        <Button styletype="secondary">{t("clients.buttons.createClient") as string}</Button>
      </div>
    </header>
  );
};

export default Header;
