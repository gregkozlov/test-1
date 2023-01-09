import { useTheme } from "../../../../../shared/hooks";
import { ChevronDown } from "../../../../../shared/images";
import styles from "./select.module.scss";
import { SelectProps } from "./types";

const Select: React.FC<SelectProps> = ({
  size = "medium",
  label = "",
  disabled = false,
  placeholder = "",

  options
}) => {
  const theme = useTheme();
  return (
    <div className={styles.select}>
      {label && <h2 className={`${styles.select__label} ${styles[theme]}`}>{label}</h2>}
      <div className={styles.relative}>
        <select className={`${styles.field} ${styles[size]} ${styles[theme]} `} disabled={disabled}>
          <option value="" className={styles.field__placeholder} disabled selected hidden>
            {placeholder}
          </option>
          {options.map((el) => (
            <option className={`${styles.field__option} ${styles[theme]}`} value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <ChevronDown className={`${styles.field__chevron} ${styles[theme]}`} />
      </div>
    </div>
  );
};
export default Select;
