import styles from "./input.module.scss";
import { InputProps } from "./types";
import { useState } from "react";
import { useTheme } from "../../hooks";
import InputEye from "./images/input_eye.svg";

const Input: React.FC<InputProps> = ({
  size = "medium",
  type = "text",
  placeholder = "",
  disabled = false,
  value = "",
  onChange = () => null,
  onBlur = () => null,
  name = "",
  label = "",
  errors = ""
}) => {
  const theme = useTheme();

  const [fieldType, setFieldType] = useState(type);

  const handleHidePassword = () => {
    fieldType == "password" ? setFieldType("text") : setFieldType("password");
  };

  return (
    <div className={styles.input}>
      {label && <h2 className={`${styles.input__label} ${errors ? styles.error : ""} ${styles[theme]}`}>{label}</h2>}
      <div className={styles.relative}>
        <input
          disabled={disabled}
          type={type == "password" ? fieldType : type}
          className={`${styles.field} ${styles[size]} ${styles[theme]} ${errors ? styles.error : ""}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {type == "password" && (
          <img
            className={`${styles.eye_icon}  ${errors ? styles?.eye_icon__error_img : ""}`}
            src={InputEye}
            onClick={() => {
              handleHidePassword();
            }}></img>
        )}
      </div>
      {errors && <div className={`${styles[size]} ${styles.error__label}`}>{errors}</div>}
    </div>
  );
};

export default Input;
