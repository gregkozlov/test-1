import React from "react";
import styles from "./grid.module.scss";

const createStyles = (spaces: SpacesType) => {
  const { topSpace, bottomSpace, leftSpace, rightSpace } = spaces;
  const normalizedSpacesStyles = {
    paddingTop: topSpace,
    paddingBottom: bottomSpace,
    paddingLeft: leftSpace,
    paddingRight: rightSpace
  };

  return normalizedSpacesStyles;
};

const Grid = ({ children, fullHeight = false, customStyles = {} }: GridType) => {
  return (
    <div style={customStyles} className={`${styles.grid_container} ${(fullHeight && styles.full_height) || ""}`}>
      {children}
    </div>
  );
};

const Col = ({
  children,
  size,
  topSpace,
  bottomSpace,
  leftSpace,
  rightSpace,
  contentFullHeight = false,
  customStyles
}: ColType) => {
  return (
    <div
      className={`${styles[`col__${size}`]} ${styles.col} ${contentFullHeight && styles.full_height__inner_content}`}
      style={{ ...createStyles({ topSpace, bottomSpace, leftSpace, rightSpace }), ...customStyles }}>
      {children}
    </div>
  );
};

const Row = ({ children, topSpace, bottomSpace, customStyles, leftSpace, rightSpace }: RowType) => {
  return (
    <div
      className={styles.row}
      style={{ ...createStyles({ bottomSpace, topSpace, leftSpace, rightSpace }), ...customStyles }}>
      {children}
    </div>
  );
};

export { Grid as default, Col, Row };
