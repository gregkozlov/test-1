export type ModalProps = {
  isOpened: boolean;
  onBackdropClick: () => void;
  width?: number;
  children: React.ReactNode;
};
