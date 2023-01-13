import { t } from "i18next";
import { DashboardContainer, Grid, Row, Col, Text } from "../../../../shared";
import styles from "./styles.module.scss";
const Statistic = () => {
  return (
    <>
      <div className={styles.statistics_container}>
        <div>
          <div className={styles.employee_label}>
            <Text color="#93939D">{t("dashboard.staff") as string}</Text>
            <Text bold size="large">
              111.
            </Text>
          </div>
          <div className={styles.profit_label}>
            <Text color="#93939D">{t("dashboard.revenue") as string}</Text>
            <Text bold size="extra-large">
              0 ₽
            </Text>
          </div>
        </div>
        <div className={styles.shift_container}>
          <div className={styles.shift_label}>
            <Text size={"small"}>{t("dashboard.shiftOpen") as string}</Text>
          </div>
          <div className={styles.shift_item}>
            <Text color="#93939D">{t("dashboard.cashInHand") as string}</Text>
            <Text bold color="#93939D">
              0₽
            </Text>
          </div>
          <div className={styles.shift_item}>
            <Text color="#93939D">{t("dashboard.atTheBeginningOfShift") as string}</Text>
            <Text bold color="#93939D">
              0₽
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.statistics_footer}>
        <Text color="#93939D">{t("dashboard.beginningOfShift") as string}</Text>
        <Text>25.11.2022 0:37</Text>
      </div>
    </>
  );
};

export default Statistic;
