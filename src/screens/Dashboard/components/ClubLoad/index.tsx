import { useEffect, useState } from "react";
import styles from "./club-load.module.scss";

const ClubLoad = () => {
  const [currentLoad, setCurrentLoad] = useState(0);

  const barLoad = (currentLoad / 70) * 100;

  useEffect(() => {
    setCurrentLoad(50);
  }, []);

  return (
    <div className={styles.club_load}>
      <h3 className={styles.club_load__heading}>Загрузка клуба:</h3>
      <div className={styles.club_load__progress}>
        <div className={styles.bar}>
          <div className={styles.bar__progress} style={{ width: `${barLoad}%` }}>
            <div className={styles.bar__dot}></div>
          </div>
        </div>
        <p className={styles.club_load__text}>{currentLoad}/70</p>
      </div>
    </div>
  );
};
export default ClubLoad;
