import { useState } from "react";
import { Button, Row, Text } from "../../../../shared";
import { useTheme } from "../../../../shared/hooks";
import { ChevronDown, Edit } from "../../../../shared/images";
import styles from "./styles.module.scss";
const Notes = () => {
  const theme = useTheme();
  const [isEdit, setIsEdit] = useState(false);
  const hardcodedNotes = [
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
    },
    {
      username: "Admin G.",
      date: "12.12.2022",
      note: "Угрожает админам битой 2",
      checked: true
    },
    {
      username: "Admin G.",
      date: "12.12.2022",
      note: "Угрожает админам битой 3",
      checked: true
    },
    {
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 4",
      checked: true
    },
    {
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 4",
      checked: true
    },
    {
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 4",
      checked: true
    }
  ];
  return (
    <div className={`${styles.notes} ${styles[theme]}`} style={{ height: `calc(100vh - 430px)` }}>
      <div className={styles.notes__header}>
        <Row>
          <Text bold size={"large"}>
            Заметки
          </Text>
          {!isEdit ? (
            <Edit className={styles.edit} onClick={() => setIsEdit(true)} />
          ) : (
            <div className={styles.edit_container}>
              <ChevronDown className={styles.chevron_left} onClick={() => setIsEdit(false)} />
              <a className={styles.plus_icon}>+</a>
            </div>
          )}
        </Row>
      </div>
      <div className={styles.notes__description}>
        {hardcodedNotes?.length &&
          hardcodedNotes.map(({ username, date, note, checked }) => {
            return (
              (
                <div className={styles.notes__row} key={note}>
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
                    {isEdit ? (
                      <Edit className={styles.edit} />
                    ) : (
                      <div className={`${styles.circle} ${checked && styles.checked}`}></div>
                    )}
                  </Row>
                </div>
              ) || <Text>Пока заметок нет</Text>
            );
          })}
      </div>
    </div>
  );
};

export default Notes;
