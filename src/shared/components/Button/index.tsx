import { ButtonProps } from "./types";
import styles from "./button.module.scss";
import { useTheme } from "../../hooks";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  styletype = "primary",
  type = "submit",
  border = true,
  onClick = () => null,
  disabled = false,
  children
}) => {
  const theme = useTheme();

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[styletype]} ${styles[size]} ${border ? styles.border : ""} ${
        styles[theme]
      }`}>
      {children}
    </button>
  );
};

export default Button;
