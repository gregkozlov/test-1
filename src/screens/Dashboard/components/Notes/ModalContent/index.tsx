import { t } from "i18next";
import { useState } from "react";
import { Button, DashboardContainer, Input } from "../../../../../shared";
import { useTheme } from "../../../../../shared/hooks";
import styles from "./styles.module.scss";
const NotesModalContent = ({
  isNew = false,
  onSave,
  currentNote,
  onCancel,
  onDelete
}: {
  onCancel: () => void;
  currentNote: CurrentNoteType;
  isNew: boolean;
  onSave: (isNew: boolean, arg: CurrentNoteType) => void;
  onDelete?: (id: string | number) => void;
}) => {
  const theme = useTheme();
  const [user, setUser] = useState(currentNote.username);
  const [message, setMessage] = useState(currentNote.note);
  return (
    <div className={`${styles.modal_content} ${styles[theme]}`}>
      <DashboardContainer>
        <div className={styles.modal_content__body}>
          <Input
            type="text"
            value={user}
            placeholder={t("dashboard.title") as string}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={t("dashboard.note") as string}
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button
            styletype={"primary"}
            onClick={() => {
              const note = {
                ...currentNote,
                username: user,
                note: message
              };
              onSave(isNew, note);
            }}>
            {t("dashboard.save") as string}
          </Button>
          <Button styletype={"secondary"} onClick={onCancel}>
            {t("dashboard.cancel") as string}
          </Button>

          {!isNew && (
            <Button styletype={"secondary"} border={false} onClick={() => onDelete && onDelete(currentNote.id)}>
              {t("dashboard.delete") as string}
            </Button>
          )}
        </div>
      </DashboardContainer>
    </div>
  );
};

export default NotesModalContent;
