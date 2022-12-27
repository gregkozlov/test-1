import styles from "./login.module.scss";
import { Form } from "./components";
import { useTheme } from "../../shared/hooks";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { switchTheme } from "../../appSlices";

const LoginPage: React.FC = () => {
  const theme = useTheme();

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = () => {
    if (i18n.language === "ru") {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  };

  const changeTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <div className={`${styles.login} ${styles[theme]}`}>
      <div className={styles.login__background_image}>
        <div className={styles.temporary}>
          <button onClick={changeTheme}>Temporary theme switcher</button>
          <button onClick={changeLanguage}>Temporary lang switcher</button>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default LoginPage;
