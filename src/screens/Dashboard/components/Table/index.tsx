import { Printer, Recoveryconvert, Repeat } from "../../images";
import { Text, Table, Button, Row } from "../../../../shared/";
import styles from "./styles.module.scss";
import { useTheme } from "../../../../shared/hooks";
import { useTranslation } from "react-i18next";

const DashBoardTable = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const table = {
    header: [
      {
        title: t("tables.dashboard.time"),
        rightIcon: false
      },
      {
        title: t("tables.dashboard.ckeck"),
        rightIcon: false
      },
      {
        title: t("tables.dashboard.user"),
        rightIcon: false
      },
      {
        title: t("tables.dashboard.description"),
        rightIcon: false
      },
      {
        title: t("tables.dashboard.type"),
        rightIcon: false
      },
      {
        title: t("tables.dashboard.amount"),
        rightIcon: false
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusReturned") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusReturned") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
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
              {t("tables.dashboard.statusPaid") as string}
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              {t("tables.dashboard.chashPayment") as string}
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
              <Printer className={`${styles.icon} ${styles[theme]}`} />
              <Recoveryconvert className={`${styles.icon} ${styles.m_horizontal_15} ${styles[theme]}`} />
              <Repeat className={`${styles.icon} ${styles[theme]}`} />
            </div>
          )
        }
      ]
    ]
  };

  const printImg = (url: string) => {
    const win = window.open("");
    if (win) {
      win.document.write('<img src="' + url + '" onload="window.print();window.close()" />');
      win.focus();
    }
  };

  return (
    <>
      <Row leftSpace={10}>
        <Text bold size={"large"}>
          {t("dashboard.replenishments") as string}
        </Text>
        <div className={styles.table_header_buttons_container}>
          <Button
            styletype={"secondary"}
            onClick={() => {
              printImg("https://spb-kassa.ru/images/wab-08rk/wab-08rk-x-%D0%BE%D1%82%D1%87%D0%B5%D1%82.jpg");
            }}>
            <Text size="small">{t("dashboard.z-report") as string}</Text>
          </Button>
          <Button
            onClick={() => {
              printImg("https://spb-kassa.ru/images/wab-08rk/wab-08rk-x-%D0%BE%D1%82%D1%87%D0%B5%D1%82.jpg");
            }}>
            <Text size="small">{t("dashboard.x-report") as string}</Text>
          </Button>
        </div>
      </Row>
      <Table
        height={`calc(100vh - 490px)`}
        table={table}
        rowStyles={{
          border: "1px solid $table-border",
          marginBottom: 10,
          borderRadius: 10,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
        }}
      />
    </>
  );
};

export default DashBoardTable;
