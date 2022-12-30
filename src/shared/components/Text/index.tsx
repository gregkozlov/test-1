import styles from "./input.module.scss";
import { TextProps } from "./types";
import { useTheme } from "../../hooks";

const Text: React.FC<TextProps> = ({
  bold = false,
  size = "medium",
  onClick = () => null,
  children = "",
  color,
  align
}) => {
  const theme = useTheme();
  return (
    <p
      onClick={onClick}
      className={`${styles[theme]} ${styles[size]} ${bold && styles.bold}`}
      style={{
        textAlign: align,
        ...((theme == "light" && { color: color }) || { color: "#fff" })
      }}>
      {children}
    </p>
  );
};

export default Text;
