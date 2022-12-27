import { ModalProps } from "./types";
import styles from "./modal.module.scss";
import { useTheme } from "../../hooks";

const Modal: React.FC<ModalProps> = ({ isOpened, onBackdropClick = () => null, children }) => {
  const theme = useTheme();

  return isOpened ? (
    <div className={`${styles.container} ${styles[`container__${theme}`]}`} onClick={onBackdropClick}>
      {children}
    </div>
  ) : null;
};

export default Modal;
