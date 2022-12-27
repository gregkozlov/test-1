import styles from "./searchbar.module.scss";
import { InputProps } from "./types";
import { useTheme } from "../../hooks";
import SearchIcon from "./images/search.svg";

const Input: React.FC<InputProps> = ({
  size = "medium",
  placeholder = "",
  disabled = false,
  value = "",
  onChange = () => null,
  onIconClick = () => null,
  name = "",
  label = ""
}) => {
  const theme = useTheme();

  return (
    <div className={styles.input}>
      {label && <h2 className={`${styles.input__label} ${styles[theme]}`}>{label}</h2>}
      <div className={styles.relative}>
        <input
          disabled={disabled}
          type="text"
          className={`${styles.field} ${styles[size]} ${styles[theme]}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
        <img className={styles.icon} src={SearchIcon} onClick={onIconClick}></img>
      </div>
    </div>
  );
};

export default Input;
