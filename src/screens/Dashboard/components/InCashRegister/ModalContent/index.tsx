import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./modal-content.module.scss";

import { Props } from "./type";

const RegisterModalContent: React.FC<Props> = ({ setModalActive, setCashValue }) => {
  const { t } = useTranslation();

  const [inputCash, setInputCash] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCashValue((prev) => prev - +inputCash);
    setInputCash("");
    setModalActive(false);
  };

  return (
    <div className={styles.content}>
      <h3 className={styles.content__heading}>{t("dashboard.cash_withdrawal")}</h3>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          onChange={(e) => {
            setInputCash(e.target.value);
          }}
          value={inputCash}
          type="text"
          placeholder={t("dashboard.amount") as string}
          name="Sum"
        />
        <input
          className={styles.form__input}
          type="text"
          placeholder={t("dashboard.comment") as string}
          name="Comment"
        />
        <button className={styles.form__button} type="submit" onClick={handleSubmit}>
          {t("dashboard.withdraw")}
        </button>
      </form>
    </div>
  );
};
export default RegisterModalContent;
