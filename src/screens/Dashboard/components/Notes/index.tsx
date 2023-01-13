import { useEffect, useState } from "react";
import { Button, DashboardContainer, Input, Row, Text } from "../../../../shared";
import { useTheme } from "../../../../shared/hooks";
import { ChevronDown, Edit } from "../../../../shared/images";
import Modal from "../../../../shared/components/Modal";
import styles from "./styles.module.scss";
import NotesModalContent from "./ModalContent";
import { t } from "i18next";

const Notes = () => {
  const hardcodedNotes = [
    {
      id: 1,
      username: "111.",
      date: "12.12.2022",
      note: "Угрожает админам",
      checked: false
    },
    {
      id: 2,
      username: "Admin G.",
      date: "12.12.2022",
      note: "Угрожает админам битой",
      checked: true
    },
    {
      id: 3,
      username: "Admin G.",
      date: "12.12.2022",
      note: "Угрожает админам битой 2",
      checked: true
    },
    {
      id: 4,
      username: "Admin G.",
      date: "12.12.2022",
      note: "Угрожает админам битой 3",
      checked: true
    },
    {
      id: 5,
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 4",
      checked: true
    },
    {
      id: 6,
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 5",
      checked: true
    },
    {
      id: 7,
      username: "Admin G.",
      date: "12.02.2022",
      note: "Угрожает админам битой 6",
      checked: true
    }
  ];

  const handleGetNotesFromLocalStorage = () => {
    const storedNotes = localStorage.getItem("notes");

    return (storedNotes && JSON.parse(storedNotes)) || [];
  };

  const theme = useTheme();
  const [isOpened, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [notes, setNotes] = useState<CurrentNoteType[] | []>(handleGetNotesFromLocalStorage());
  const [currentNote, setCurrentNote] = useState<CurrentNoteType>({
    id: 228,
    username: "",
    date: "",
    note: "",
    checked: false
  });

  const handleToggleModal = () => {
    setIsOpen(!isOpened);
  };

  const handleModalOpen: handleModalOpenType = (isNew = false, note) => {
    setIsNew(isNew);
    setCurrentNote({
      ...note
    });
    setIsNew(isNew);
    handleToggleModal();
  };

  const onDelete = (id: string | number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    handleSaveNotesToLocalStorage(filteredNotes);
    handleToggleModal();
  };

  const onModalSave = (isNew: boolean, newNote: CurrentNoteType) => {
    if (!isNew) {
      const noteIndex = notes.findIndex(({ id }) => id == newNote.id);
      console.log(notes[noteIndex].username);
      notes[noteIndex] = {
        ...notes[noteIndex],
        ...{ username: newNote.username, note: newNote.note }
      };
      console.log(noteIndex);
      handleSaveNotesToLocalStorage([...notes]);
    } else {
      const note = { ...newNote, id: new Date().getTime() / 1000 };
      handleSaveNotesToLocalStorage([...notes, { ...note }]);
    }

    handleToggleModal();
  };

  const handleSaveNotesToLocalStorage = (notes: CurrentNoteType[]) => {
    setNotes([...notes]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  useEffect(() => {
    handleGetNotesFromLocalStorage();
  }, []);

  return (
    <div className={`${styles.notes} ${styles[theme]}`} style={{ height: `calc(100vh - 490px)` }}>
      <div className={styles.notes__header}>
        <Row>
          <Text bold size={"large"}>
            {t("dashboard.notes") as string}
          </Text>
          {!isEdit ? (
            <Edit className={styles.edit} onClick={() => setIsEdit(true)} />
          ) : (
            <div className={styles.edit_container}>
              <ChevronDown className={styles.chevron_left} onClick={() => setIsEdit(false)} />
              <a
                className={styles.plus_icon}
                onClick={() =>
                  handleModalOpen(true, {
                    date: "12.12.2022",
                    note: "",
                    username: "",
                    id: 0,
                    checked: false
                  })
                }>
                +
              </a>
            </div>
          )}
        </Row>
      </div>
      <div className={styles.notes__description}>
        {(notes?.length &&
          notes.map((currentNote) => {
            const { username, date, note, checked } = currentNote;
            return (
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
                  {
                    isEdit && <Edit className={styles.edit} onClick={() => handleModalOpen(false, currentNote)} />
                    //  : (
                    //   <div className={`${styles.circle} ${checked && styles.checked}`}></div>
                    // )
                  }
                </Row>
              </div>
            );
          })) || <Text>Заметок нет</Text>}
      </div>
      <Modal isOpened={isOpened} onBackdropClick={handleToggleModal}>
        <NotesModalContent
          onCancel={handleToggleModal}
          currentNote={currentNote}
          onSave={onModalSave}
          isNew={isNew}
          onDelete={onDelete}
        />
      </Modal>
    </div>
  );
};

export default Notes;
