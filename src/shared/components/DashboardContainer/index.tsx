import React from "react";
import { useTheme } from "../../hooks";
import styles from "./styles.module.scss";
type DashboardContainerType = {
  children: React.ReactNode;
};
const DashboardCommonContainer: React.FC<DashboardContainerType> = ({ children }) => {
  const theme = useTheme();
  return <div className={`${styles.dashboardContainer} ${styles[theme]}`}>{children}</div>;
};

export default DashboardCommonContainer;
