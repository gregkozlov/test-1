// import Frame from "../Frame";
import styles from "./modal.module.scss";
import { Props } from "./types";

const Modal1: React.FC<Props> = ({ modalActive, setModalActive, children }) => {
  return (
    <div
      className={modalActive ? `${styles.modal} ${styles.modal__active}` : styles.modal}
      onClick={() => setModalActive(false)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};
export default Modal1;
