import React from "react";
import styles from "./grid.module.scss";

const createStyles = (spaces: SpacesType) => {
  const { topSpace, bottomSpace, leftSpace, rightSpace } = spaces;
  const normalizedSpacesStyles = {
    marginTop: topSpace,
    marginBottom: bottomSpace,
    marginLeft: leftSpace,
    marginRight: rightSpace
  };

  return normalizedSpacesStyles;
};

const Grid = ({ children }: GridType) => {
  return <div className={styles.grid_container}>{children}</div>;
};

const Col = ({ children, size, topSpace, bottomSpace, leftSpace, rightSpace }: ColType) => {
  return (
    <div
      className={styles[`col__${size}`]}
      style={{ ...createStyles({ topSpace, bottomSpace, leftSpace, rightSpace }) }}>
      {children}
    </div>
  );
};

const Row = ({ children, topSpace, bottomSpace }: RowType) => {
  return (
    <div className={styles.row} style={{ ...createStyles({ bottomSpace, topSpace }) }}>
      {children}
    </div>
  );
};

export { Grid as default, Col, Row };
