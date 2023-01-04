import { useTranslation } from "react-i18next";
import styles from "./balance-replenishment.module.scss";
import Notes from "./components/Notes";
import Payment from "./components/Payment";
import UserInfo from "./components/UserInfo";
import { Props } from "./types";

const BalanceReplenishment: React.FC<Props> = ({ setModalActive }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.replenish}>
      <h3 className={styles.replenish__header}>{t("dashboard.balance_replenishment")}</h3>
      <div className={styles.content}>
        <div className={styles.content__left}>
          <UserInfo />
          <Notes />
        </div>
        <div className={styles.content__right}>
          <Payment setModalActive={setModalActive} />
        </div>
      </div>
    </div>
  );
};
export default BalanceReplenishment;
