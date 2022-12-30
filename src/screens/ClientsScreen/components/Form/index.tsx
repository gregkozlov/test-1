import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, Col, DashboardContainer, Grid, Input, Row } from "../../../../shared";
import styles from "./user_form.module.scss";

const Form: React.FC = () => {
  const { t } = useTranslation();

  const baseSpace = 20;

  return (
    <DashboardContainer>
      <Grid>
        <Row>
          <Col size={2}>content</Col>
          <Col size={10}>
            <Row>
              <Col size={6} leftSpace={baseSpace}>
                <Input
                  placeholder={t("clients.form.placeholders.login") as string}
                  name="login"
                  label={t("clients.form.labels.login") as string}
                  //   value={values.login}
                  //   onChange={handleChange}
                  //   onBlur={handleBlur}
                  //   errors={touched.login && errors.login ? errors.login : null}
                />
              </Col>
              <Col size={6} leftSpace={baseSpace}>
                <Input
                  placeholder={t("clients.form.placeholders.name") as string}
                  name="name"
                  label={t("clients.form.labels.name") as string}
                />
              </Col>
            </Row>
            <Row>
              <Col size={6} leftSpace={baseSpace}>
                <Input
                  placeholder={t("clients.form.placeholders.password") as string}
                  name="password"
                  label={t("clients.form.labels.password") as string}
                />
              </Col>
              <Col size={6} leftSpace={baseSpace}>
                <Input
                  placeholder={t("clients.form.placeholders.surname") as string}
                  name="surname"
                  label={t("clients.form.labels.surname") as string}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Input
          placeholder={t("clients.form.placeholders.phoneNumber") as string}
          name="phoneNumber"
          type="tel"
          label={t("clients.form.labels.phoneNumber") as string}
        />
        <Input
          placeholder={t("clients.form.placeholders.email") as string}
          name="email"
          type="email"
          label={t("clients.form.labels.email") as string}
        />
        <Input
          placeholder={t("clients.form.placeholders.dateOfBirth") as string}
          name="dateOfBirth"
          type="date"
          label={t("clients.form.labels.dateOfBirth") as string}
        />
        <div className={styles.button_container}>
          <Button styletype="primary" type="submit">
            {t("clients.buttons.create") as string}
          </Button>
        </div>
      </Grid>
    </DashboardContainer>
  );
};

export default Form;
