import { ModalProps } from "./types";
import styles from "./modal.module.scss";
import { useTheme } from "../../hooks";

const Modal: React.FC<ModalProps> = ({ isOpened, onBackdropClick = () => null, width = 60, children }) => {
  const theme = useTheme();

  return isOpened ? (
    <div className={`${styles.container} ${styles[`container__${theme}`]}`} onClick={onBackdropClick}>
      <div
        style={{ width: `${width}%` }}
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;