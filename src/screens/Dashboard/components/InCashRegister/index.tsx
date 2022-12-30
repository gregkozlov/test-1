import { useEffect, useState } from "react";
import Modal1 from "../../../../shared/components/Modal1";
import { ButtonArrow } from "../../../../shared/images";
import styles from "./in-cash-register.module.scss";
import ModalContent from "./ModalContent";

const InCashRegister = () => {
  const [modalActive, setModalActive] = useState<boolean>(false);

  const cash = localStorage.getItem("cashValue");
  const [cashValue, setCashValue] = useState<number>(cash ? +cash : 0);

  useEffect(() => {
    localStorage.setItem("cashValue", "14522");
  }, []);

  return (
    <div className={styles.in_cash_register}>
      <h3 className={styles.in_cash_register__heading}>В кассе:</h3>
      <div className={styles.balance}>
        <p className={styles.balance__value}>{cashValue} &#8381;</p>
        <button className={styles.balance__btn} onClick={() => setModalActive(!modalActive)}>
          <ButtonArrow className={styles.balance__arrow} />
        </button>
      </div>
      <Modal1 modalActive={modalActive} setModalActive={setModalActive}>
        <ModalContent setModalActive={setModalActive} setCashValue={setCashValue} />
      </Modal1>
    </div>
  );
};
export default InCashRegister;
