import { CashIcon, CreditCardIcon, PointsIcon } from "../../../../images";
import Button from "../../../Button";
import Input from "../../../Input";
import styles from "./payment.module.scss";
import { Props } from "./types";

const Payment: React.FC<Props> = ({ setModalActive }) => {
  return (
    <div className={styles.payment}>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <h3 className={styles.info__item__header}>Пользователь:</h3>
          <Input />
        </div>
        <div className={styles.info__item}>
          <h3 className={styles.info__item__header}>Сумма пополнения:</h3>
          <Input />
        </div>
      </div>

      <div className={styles.payment_method}>
        <h3 className={styles.payment_method__header}>Способ оплаты:</h3>
        <div className={styles.buttons}>
          <div className={styles.buttons__item}>
            <Button>
              <CashIcon />
            </Button>
            <p className={styles.buttons__item__text}>Наличные</p>
          </div>
          <div className={styles.buttons__item}>
            <Button>
              <CreditCardIcon />
            </Button>
            <p className={styles.buttons__item__text}>Картой</p>
          </div>
          <div className={styles.buttons__item}>
            <Button>
              <PointsIcon />
            </Button>
            <p className={styles.buttons__item__text}>Баллы</p>
          </div>
        </div>
      </div>

      <div className={styles.pay}>
        <h3 className={styles.pay__header}>К оплате: 550 руб</h3>
        <Button onClick={() => setModalActive(false)}>Оплатить</Button>
      </div>
    </div>
  );
};
export default Payment;
