import { ButtonCross } from "../../../../images";
import styles from "./notes.module.scss";

const Notes = () => {
  const items = [1, 2, 3];

  return (
    <div className={styles.notes}>
      <div className={styles.header}>
        <h3 className={styles.header__text}>Заметки</h3>
        <button className={styles.header__button}>
          <ButtonCross />
        </button>
      </div>
      <div className={styles.content}>
        {items.map((item) => (
          <div className={styles.content__item} key={item}>
            <p>
              <b>Admin T.</b> 12.12.2022
            </p>
            <p>Угрожает админам</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notes;
