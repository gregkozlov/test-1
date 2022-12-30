import React, { useState } from "react";
import styles from "./modal-content.module.scss";

import { Props } from "./type";

const ModalContent: React.FC<Props> = ({ setModalActive, setCashValue }) => {
  const [inputCash, setInputCash] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCashValue((prev) => prev - +inputCash);
    setInputCash("");
    setModalActive(false);
  };

  return (
    <div className={styles.content}>
      <h3 className={styles.content__heading}>Изъятие из кассы</h3>
      <form className={styles.form}>
        <input
          className={styles.form__input}
          onChange={(e) => {
            setInputCash(e.target.value);
          }}
          value={inputCash}
          type="text"
          placeholder="Введите сумму"
          name="Input sum"
        />
        <input className={styles.form__input} type="text" placeholder="Комментарий" name="Input comment" />
        <button className={styles.form__button} type="submit" onClick={handleSubmit}>
          Изъять
        </button>
      </form>
    </div>
  );
};
export default ModalContent;
