import { t } from "i18next";
import { PieChart } from "react-minimal-pie-chart";

import { Row, Text } from "../../../../shared";
import { Computer, Star, Store } from "../../../../shared/images";
import styles from "./styles.module.scss";

const Chart = () => {
  return (
    <div className={styles.chart_container}>
      <div className={styles.chart_container__left}>
        <div className={styles.chart_header}>
          <Text color="#93939D">{t("dashboard.revenue") as string}</Text>
        </div>
        {/* <Row> */}
        {/* <Col size={7}> */}
        <div className={styles.chart}>
          <div className={styles.total}>
            <Text bold>15354₽</Text>
          </div>
          <PieChart
            lineWidth={35}
            // totalValue={2000}
            // label={({ dataEntry }) => `${Math.round(dataEntry.value)} ₽`}
            data={[
              { value: 1000, color: "#58F596" },
              { value: 600, color: "#4B47FF" }
            ]}
            style={{ height: 150, width: 150 }}
            labelStyle={{
              fontSize: "15px",
              fontFamily: "sans-serif",
              fill: "#E38627"
            }}
            labelPosition={0}
          />
        </div>
      </div>
      <div className={styles.chart_container__right}>
        <div className={styles.row}>
          <div className={styles.shift_label}>
            <Text size={"small"} color="#000">
              {t("dashboard.cash") as string}
            </Text>
          </div>
          <Text>15354₽</Text>
        </div>
        <div className={styles.row}>
          <div className={styles.shift_label}>
            <Text size={"small"} color="#fff">
              {t("dashboard.card") as string}
            </Text>
          </div>
          <Text>15354₽</Text>
        </div>
        <div className={styles.row} style={{ marginTop: 20 }}>
          <div className={styles.resourse_item}>
            <Store />
          </div>
          <Text>940 ₽ </Text>
        </div>
        <div className={styles.row}>
          <div className={styles.resourse_item}>
            <Computer />
          </div>
          <Text>400 ₽ </Text>
        </div>
        <div className={styles.row}>
          <div className={styles.resourse_item}>
            <Star />
          </div>
          <Text>400 ₽ </Text>
        </div>
      </div>
    </div>
  );
};

export default Chart;
