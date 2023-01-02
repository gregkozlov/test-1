export type ModalProps = {
  isOpened: boolean;
  onBackdropClick: () => void;
  width?: number;
  maxWidth?: number;
  children: React.ReactNode;
};
