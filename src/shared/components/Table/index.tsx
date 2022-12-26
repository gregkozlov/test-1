import { useEffect, useState } from "react";
import { Text } from "..";
import { ChevronDown } from "../../images";

import styles from "./styles.module.scss";

const Table: React.FC<TableType> = ({ table, rowStyles }) => {
  const [rowWidth, setRowWidth] = useState(`calc(100% / 6`);
  const createFlexRowGridStyle = (count: number) => {
    return `calc(100% / ${count})`;
  };
  useEffect(() => {
    const rowWidthStyle = createFlexRowGridStyle(table.header.length);
    setRowWidth(rowWidthStyle);
  }, [table]);
  return (
    <div className={styles.table}>
      <div className={styles.table_container} role="table" aria-label="Destinations">
        <div className={`${styles.flex_table} ${styles.header}`} role="rowgroup">
          {table.header.map((item) => {
            return (
              <div
                // todo
                key={JSON.stringify(item)}
                className={`${styles.flex_row}`}
                style={{ width: rowWidth }}
                role="columnheader">
                <Text align="center" bold size={"small"}>
                  {item.title}
                </Text>
                {(item.rightIcon && <ChevronDown className={styles.right_icon} />) || null}
              </div>
            );
          })}
        </div>
        {table.body.map((bodyRow, i) => (
          // todo
          <div key={i} className={`${styles.flex_table} ${styles.row}`} style={{ ...rowStyles }} role="rowgroup">
            {bodyRow.map((bodyRowItem, i) => (
              <div
                // todo
                key={i}
                className={`${styles.flex_row} ${i === 0 && styles.first}`}
                style={{ width: rowWidth }}
                role="cell">
                {bodyRowItem.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
