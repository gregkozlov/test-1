type CurrentNoteType = {
  id: number | string;
  username: string;
  date: string;
  note: string;
  checked: boolean;
};
type handleModalOpenType = (isNew: boolean, note: CurrentNoteType) => void;

type handleGetNotesFromLocalStorageType = (callback: call) => void;
