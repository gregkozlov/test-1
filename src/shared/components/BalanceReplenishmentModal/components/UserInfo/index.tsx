import styles from "./user-info.module.scss";
import { UserAvatar } from "../../../../images";

const UserInfo = () => {
  return (
    <div className={styles.info}>
      <div className={styles.avatar}>
        <UserAvatar className={styles.avatar__img} />
        <div className={styles.status}>
          <h3 className={styles.status__name}>Username</h3>
          <div className={styles.status__value}>Забанен</div>
        </div>
      </div>

      <div className={styles.balance}>
        <p className={styles.balance__text}>Баланс:</p>
        <p className={styles.balance__value}>5 489 030 &#8381;</p>
      </div>

      <div className={styles.user_data}>
        <p>Семён Попов</p>
        <p>20%</p>
        <p>12.12.2022</p>
      </div>

      <div className={styles.user_misc}>
        <p>Возраст: 17 лет</p>
        <p>Зарегистрирован 12.12.2022</p>
      </div>
    </div>
  );
};
export default UserInfo;
