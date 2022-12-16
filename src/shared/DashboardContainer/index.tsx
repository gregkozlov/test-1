import React from "react";
import styles from "./styles.module.scss";
type DashboardContainerType = {
  children: React.ReactNode;
};
const DashboardCommonContainer: React.FC<DashboardContainerType> = ({ children }) => {
  return <div className={styles.dashboardContainer}>{children}</div>;
};

export default DashboardCommonContainer;
