import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "../../../../shared/components/Modal";
import { ButtonArrow } from "../../../../shared/images";
import styles from "./in-cash-register.module.scss";
import RegisterModalContent from "./ModalContent";

const InCashRegister = () => {
  const { t } = useTranslation();

  const [modalActive, setModalActive] = useState<boolean>(false);

  const cash = localStorage.getItem("cashValue");
  const [cashValue, setCashValue] = useState<number>(cash ? +cash : 0);

  useEffect(() => {
    localStorage.setItem("cashValue", "14522");
  }, []);

  return (
    <div className={styles.in_cash_register}>
      <h3 className={styles.in_cash_register__heading}>{t("dashboard.in_cash_register")}:</h3>
      <div className={styles.balance}>
        <p className={styles.balance__value}>{cashValue} &#8381;</p>
        <button className={styles.balance__btn} onClick={() => setModalActive(!modalActive)}>
          <ButtonArrow className={styles.balance__arrow} />
        </button>
      </div>
      <Modal isOpened={modalActive} onBackdropClick={() => setModalActive(false)}>
        <RegisterModalContent setModalActive={setModalActive} setCashValue={setCashValue} />
      </Modal>
    </div>
  );
};
export default InCashRegister;
