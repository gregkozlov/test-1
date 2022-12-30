import React from "react";
import { useTheme } from "../../hooks";
import styles from "./styles.module.scss";
type DashboardContainerType = {
  children: React.ReactNode;
  leftSpace?: number;
  rightSpace?: number;
  topSpace?: number;
  bottomSpace?: number;
};
const DashboardCommonContainer: React.FC<DashboardContainerType> = ({
  children,
  leftSpace,
  rightSpace,
  topSpace,
  bottomSpace
}) => {
  const theme = useTheme();
  return (
    <div
      style={{
        marginBottom: bottomSpace,
        marginTop: topSpace,
        marginRight: rightSpace,
        marginLeft: leftSpace
      }}
      className={`${styles.dashboardContainer} ${styles[theme]}`}>
      {children}
    </div>
  );
};

export default DashboardCommonContainer;
