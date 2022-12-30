import { DashboardContainer, Grid, Row, Col, Text } from "../../../../shared";
import styles from "./styles.module.scss";
const Statistic = () => {
  return (
    <>
      <div className={styles.statistics_container}>
        <div>
          <div className={styles.employee_label}>
            <Text color="#93939D">Сотрудник:</Text>
            <Text bold size="large">
              Admin T.
            </Text>
          </div>
          <div className={styles.profit_label}>
            <Text color="#93939D">Выручка:</Text>
            <Text bold size="extra-large">
              0 ₽
            </Text>
          </div>
        </div>
        <div className={styles.shift_container}>
          <div className={styles.shift_label}>
            <Text>Смена открыта</Text>
          </div>
          <div className={styles.shift_item}>
            <Text color="#93939D">Наличных в кассе:</Text>
            <Text bold color="#93939D">
              0₽
            </Text>
          </div>
          <div className={styles.shift_item}>
            <Text color="#93939D">На начало смены:</Text>
            <Text bold color="#93939D">
              0₽
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.statistics_footer}>
        <Text color="#93939D">На начало смены:</Text>
        <Text>25.11.2022 0:37</Text>
      </div>
    </>
  );
};

export default Statistic;
