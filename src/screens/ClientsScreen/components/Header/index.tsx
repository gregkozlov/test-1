import { Input } from "../../../../shared";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.input_container}>
        <Input />
      </div>
    </header>
  );
};

export default Header;
