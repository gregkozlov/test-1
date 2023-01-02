import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Button, Col, DashboardContainer, Grid, Input, Row } from "../../../../shared";
import { UserAvatar } from "../../../../shared/images";
import Select from "./Select";
import styles from "./user_form.module.scss";

const Form: React.FC = () => {
  const { t } = useTranslation();
  const roles = [t("clients.form.role.client"), t("clients.form.role.operator")];
  const gender = [t("clients.form.gender.male"), t("clients.form.gender.female")];
  const baseSpace = 20;

  return (
    <DashboardContainer>
      <Grid>
        <Row>
          <Col size={3}>
            <UserAvatar className={styles.avatar} />
            <Row>
              <Select options={gender} placeholder={t("clients.form.placeholders.gender") as string} />
            </Row>
          </Col>
          <Col size={9}>
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
        <Row>
          <Col size={6} rightSpace={baseSpace / 2}>
            <Input
              placeholder={t("clients.form.placeholders.phoneNumber") as string}
              name="phoneNumber"
              type="tel"
              label={t("clients.form.labels.phoneNumber") as string}
            />
            <Input
              placeholder={t("clients.form.placeholders.dateOfBirth") as string}
              name="dateOfBirth"
              type="date"
              label={t("clients.form.labels.dateOfBirth") as string}
            />
          </Col>
          <Col size={6} leftSpace={baseSpace / 2}>
            <Input
              placeholder={t("clients.form.placeholders.email") as string}
              name="email"
              type="email"
              label={t("clients.form.labels.email") as string}
            />
            <Select
              options={roles}
              placeholder={t("clients.form.placeholders.role") as string}
              label={t("clients.form.labels.role") as string}
            />
            {/* <Input
              placeholder={t("clients.form.placeholders.dateOfBirth") as string}
              name="dateOfBirth"
              type="date"
              label={t("clients.form.labels.dateOfBirth") as string}
            /> */}
          </Col>
        </Row>
        {/* <Input
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
        <Input
          placeholder={t("clients.form.placeholders.dateOfBirth") as string}
          name="dateOfBirth"
          type="date"
          label={t("clients.form.labels.dateOfBirth") as string}
        /> */}
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
