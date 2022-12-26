import { Printer, Recoveryconvert, Repeat } from "../../images";
import { Text, Table } from "../../../../shared/";
import styles from "./styles.module.scss";

const DashBoardTable = () => {
  const table = {
    header: [
      {
        title: "ВРЕМЯ",
        rightIcon: true
      },
      {
        title: "НОМЕР ЧЕКА",
        rightIcon: false
      },
      {
        title: "ИМЯ ПОЛЬЗОВАТЕЛЯ",
        rightIcon: false
      },
      {
        title: "ОПИСАНИЕ",
        rightIcon: false
      },
      {
        title: "ТИП",
        rightIcon: true
      },
      {
        title: "СУММА",
        rightIcon: true
      },
      {
        title: "",
        rightIcon: false
      }
    ],
    body: [
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#F5847D"}>
              Возврат
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#F5847D"}>
              Возврат
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              13:26
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              13371488
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Semonidze
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"} color={"#58F596"}>
              Оплачено
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Наличные
            </Text>
          )
        },
        {
          content: (
            <Text size={"medium"} align={"center"}>
              4000 руб
            </Text>
          )
        },
        {
          content: (
            <div className={styles.flex_nowrap}>
              <Printer className={styles.icon} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15}`} />
              <Repeat className={styles.icon} />
            </div>
          )
        }
      ]
    ]
  };
  return (
    <Table
      table={table}
      rowStyles={{
        border: "1px solid $table-border",
        marginBottom: 10,
        borderRadius: 10,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
      }}
    />
  );
};

export default DashBoardTable;
