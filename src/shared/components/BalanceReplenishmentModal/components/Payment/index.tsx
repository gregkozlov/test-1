import { useTranslation } from "react-i18next";
import { CashIcon, CreditCardIcon, PointsIcon } from "../../../../images";
import Button from "../../../Button";
import Input from "../../../Input";
import styles from "./payment.module.scss";
import { Props } from "./types";

const Payment: React.FC<Props> = ({ setModalActive }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.payment}>
      <div className={styles.info}>
        <div className={styles.info__item}>
          <h3 className={styles.info__item__header}>{t("dashboard.user")}:</h3>
          <Input />
        </div>
        <div className={styles.info__item}>
          <h3 className={styles.info__item__header}>{t("dashboard.replenishment_sum")}:</h3>
          <Input />
        </div>
      </div>

      <div className={styles.payment_method}>
        <h3 className={styles.payment_method__header}>{t("dashboard.payment_method")}:</h3>
        <div className={styles.buttons}>
          <div className={styles.buttons__item}>
            <Button>
              <CashIcon />
            </Button>
            <p className={styles.buttons__item__text}>{t("dashboard.pay_cash")}</p>
          </div>
          <div className={styles.buttons__item}>
            <Button>
              <CreditCardIcon />
            </Button>
            <p className={styles.buttons__item__text}>{t("dashboard.pay_card")}</p>
          </div>
          <div className={styles.buttons__item}>
            <Button>
              <PointsIcon />
            </Button>
            <p className={styles.buttons__item__text}>{t("dashboard.pay_points")}</p>
          </div>
        </div>
      </div>

      <div className={styles.pay}>
        <h3 className={styles.pay__header}>
          {t("dashboard.to_be_paid")}: 550 {t("dashboard.rub")}
        </h3>
        <Button onClick={() => setModalActive(false)}>{t("dashboard.pay") as string}</Button>
      </div>
    </div>
  );
};
export default Payment;
