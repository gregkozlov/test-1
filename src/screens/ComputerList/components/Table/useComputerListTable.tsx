import { useTranslation } from "react-i18next";
import { Text } from "../../../../shared";

const useComputerListTable = () => {
  const { t } = useTranslation();

  const table = {
    header: [
      { title: t("tables.computerList.header.name"), rightIcon: true },
      { title: t("tables.computerList.header.status"), rightIcon: true },
      { title: t("tables.computerList.header.reserved"), rightIcon: true },
      { title: t("tables.computerList.header.user"), rightIcon: true },
      { title: t("tables.computerList.header.tax"), rightIcon: true },
      { title: t("tables.computerList.header.start"), rightIcon: true },
      { title: t("tables.computerList.header.end"), rightIcon: true },
      { title: t("tables.computerList.header.left"), rightIcon: true },
      { title: t("tables.computerList.header.app"), rightIcon: true }
    ],
    body: [
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Активен
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              DOTA 2
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Активен
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Drug
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Double
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              11:30
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:30
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              CS:GO
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Активен
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              DOTA 2
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Активен
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Drug
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Double
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              11:30
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:30
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              CS:GO
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Активен
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              DOTA 2
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              ПК 1
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              -
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Да
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              BossOfTheGym
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Triple
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              12:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              15:00
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              3:00
            </Text>
          )
        }
      ]
    ]
  };
  return table;
};

export default useComputerListTable;
