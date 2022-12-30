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
            placeholder={"Title"}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <Input
            type="text"
            placeholder={"Note"}
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
            Save
          </Button>
          <Button styletype={"secondary"} onClick={onCancel}>
            Cancel
          </Button>

          {!isNew && (
            <Button styletype={"secondary"} border={false} onClick={() => onDelete && onDelete(currentNote.id)}>
              Delete
            </Button>
          )}
        </div>
      </DashboardContainer>
    </div>
  );
};

export default NotesModalContent;
