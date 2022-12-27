import { useTranslation } from "react-i18next";
import { Text } from "../../shared";

const useClientsTable = () => {
  const { t } = useTranslation();

  const table = {
    header: [
      {
        title: t("tables.clients.header.login"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.name"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.phoneNumber"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.email"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.registratonDate"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.lastVisit"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.balance"),
        rightIcon: true
      },
      {
        title: t("tables.clients.header.discount"),
        rightIcon: true
      }
      // {
      //   title: "",
      //   rightIcon: false
      // }
    ].map((el) => ({ ...el, title: el.title.toUpperCase() })),
    body: [
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ],
      [
        {
          content: (
            <Text align="center" size={"medium"}>
              Vodopadik
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              Владислав
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              +375297777777
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              vl.karol@gmail.com
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              01.11.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              25.12.2022
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              1234567
            </Text>
          )
        },
        {
          content: (
            <Text align="center" size={"medium"}>
              20%
            </Text>
          )
        }
      ]
    ]
  };

  return table;
};

export default useClientsTable;
