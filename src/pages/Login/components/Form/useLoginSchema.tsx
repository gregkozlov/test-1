import { useTranslation } from "react-i18next";
import * as Yup from "yup";

const useLoginSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    login: Yup.string()
      .required(t("formikErrors.emptyLogin") as string)
      .min(3, t("formikErrors.shortLogin") as string)
      .max(16, t("formikErrors.longLogin") as string)
      .matches(/^[a-zA-Z0-9]+$/, { excludeEmptyString: true, message: t("formikErrors.invalidLogin") }),
    password: Yup.string()
      .min(8, t("formikErrors.shortPassword") as string)
      .max(24, t("formikErrors.longPassword") as string)
      .required(t("formikErrors.emptyPassword") as string)
  });
};

export default useLoginSchema;
