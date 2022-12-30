import { useTranslation } from "react-i18next";
import { Button, Input } from "../../../../shared";
import { useTheme } from "../../../../shared/hooks";
import { Formik } from "formik";
import styles from "./form.module.scss";
import useLoginSchema from "./useLoginSchema";
import { useDispatch } from "react-redux";
import { logIn } from "../../../../appSlices";

const Form: React.FC = () => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const validationSchema = useLoginSchema();

  // temporary
  const login = (values: { login: string; password: string }) => {
    if (values.login === "login" && values.password === "password") {
      dispatch(logIn());
    }
  };

  return (
    <div className={`${styles.form} ${styles[theme]}`}>
      <h1>{t("login.authorization")}</h1>
      <Formik
        initialValues={{ login: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          login(values);
        }}>
        {({ values, errors, handleChange, handleSubmit, handleBlur, touched }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input}>
              <Input
                placeholder={t("placeholders.login") as string}
                name="login"
                label={t("labels.login") as string}
                value={values.login}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={touched.login && errors.login ? errors.login : null}
              />
              <Input
                type="password"
                placeholder={t("placeholders.password") as string}
                name="password"
                label={t("labels.password") as string}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={touched.password && errors.password ? errors.password : null}
              />
            </div>
            <div className={styles.btn}>
              <Button styletype="primary" type="submit">
                {t("buttons.login") as string}
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
