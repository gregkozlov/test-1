import { Row, Text } from "../../../../shared";
import { Edit } from "../../../../shared/images";
import styles from "./styles.module.scss";
const Notes = () => (
  <>
    <div className={styles.notes__header}>
      <Row>
        <Text bold size={"large"}>
          Заметки
        </Text>
        <Edit />
      </Row>
    </div>
    {[
      {
        username: "Admin T.",
        date: "12.12.2022",
        note: "Угрожает админам",
        checked: false
      },
      {
        username: "Admin G.",
        date: "12.12.2022",
        note: "Угрожает админам битой",
        checked: true
      }
    ].map(({ username, date, note, checked }) => {
      return (
        <div className={styles.notes__row} key={username}>
          <Row>
            <div className={""}>
              <div className={styles.notes__row__title}>
                <Text bold size={"small"}>
                  {`${username}: `}
                </Text>
                <Text size={"small"}>{date}</Text>
              </div>
              <Text size={"small"}>{note}</Text>
            </div>
            <div className={`${styles.circle} ${checked && styles.checked}`}></div>
          </Row>
        </div>
      );
    })}
  </>
);

export default Notes;
