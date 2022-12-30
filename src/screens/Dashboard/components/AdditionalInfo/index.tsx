import { Text } from "../../../../shared/index";

import styles from "./styles.module.scss";

const AdditionalInfo = () => {
  return (
    <div className={styles.additional_info_container}>
      <div>
        <Text color="#93939D">Загрузка клуб</Text>
        <Text bold size={"extra-large"}>
          13 / 70
        </Text>
      </div>
      <div className={styles.additional_info_footer}>
        <div className={styles.additional_info_item}>
          <Text color="#93939D">VIP</Text>
          <Text>13 / 70</Text>
        </div>
        <div className={styles.additional_info_item}>
          <Text color="#93939D">Стандарт</Text>
          <Text>13 / 70</Text>
        </div>
        <div className={styles.additional_info_item}>
          <Text color="#93939D">Бюдежет</Text>
          <Text>13 / 70</Text>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
