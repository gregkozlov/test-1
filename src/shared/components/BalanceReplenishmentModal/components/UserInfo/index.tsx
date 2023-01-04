import styles from "./user-info.module.scss";
import { UserAvatar } from "../../../../images";
import { useTranslation } from "react-i18next";

const UserInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.info}>
      <div className={styles.avatar}>
        <UserAvatar className={styles.avatar__img} />
        <div className={styles.status}>
          <h3 className={styles.status__name}>Username</h3>
          <div className={styles.status__value}>{t("dashboard.banned")}</div>
        </div>
      </div>

      <div className={styles.balance}>
        <p className={styles.balance__text}>{t("dashboard.balance")}:</p>
        <p className={styles.balance__value}>5 489 030 &#8381;</p>
      </div>

      <div className={styles.user_data}>
        <p>Semen Popov</p>
        <p>20%</p>
        <p>12.12.2022</p>
      </div>

      <div className={styles.user_misc}>
        <p>
          {t("dashboard.age")}: 17 {t("dashboard.years")}
        </p>
        <p>{t("dashboard.registered")} 12.12.2022</p>
      </div>
    </div>
  );
};
export default UserInfo;
