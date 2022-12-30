import { useTranslation } from "react-i18next";
import { Button, SearchBar } from "../../../../shared";
import styles from "./header.module.scss";
import { Plus } from "../../../../shared/images";
import { HeaderProps } from "./types";

const Header: React.FC<HeaderProps> = ({ handleToggleModal }) => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.input_container}>
        <SearchBar placeholder={t("placeholders.search") as string} />
      </div>
      <div className={styles.button_container}>
        <Button styletype="secondary" onClick={handleToggleModal}>
          <>
            {t("clients.buttons.createClient") as string}
            <div className={styles.button_container__icon}>
              <Plus />
            </div>
          </>
        </Button>
      </div>
    </header>
  );
};

export default Header;
