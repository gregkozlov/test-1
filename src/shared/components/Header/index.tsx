import { useSelector } from "react-redux";

import Grid, { Row, Col } from "../GridContainer";
import { RootState } from "../../../store";

import Time from "./components/Time";

import styles from "./header.module.scss";
import { Logo } from "./images";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Text from "../Text";
import { useTheme } from "../../hooks";
import { t } from "i18next";
import { useState } from "react";
import Modal from "../Modal";
import BalanceReplenishmentModal from "../BalanceReplenishmentModal/";

const Header: React.FC = () => {
  const pageTitle = useSelector<RootState>((state) => state.rootReducer.layoutSliceReducer.title) as string;
  const theme = useTheme();

  const [modalActive, setModalActive] = useState<boolean>(false);

  return (
    <div className={`${styles.header}  ${styles[theme]}`}>
      <Grid fullHeight>
        <Row customStyles={{ alignItems: "center" }}>
          <Col size={2}>
            <div className={styles.logo_container}>
              <Logo className={styles.logo_container__icon} />
            </div>
          </Col>
          <Col size={4}>
            <h3 className={styles.header__title}>{t(pageTitle)}</h3>
          </Col>
          <Col size={6}>
            <Row>
              <Col size={5}>
                <></>
              </Col>
              <Col size={5} rightSpace={15}>
                <div className={styles.header__dropdown_container}>
                  <div className={styles.plus_button_container}>
                    <Button size="small" onClick={() => setModalActive(true)}>
                      <Text size="large">+</Text>
                    </Button>
                  </div>
                  <Dropdown />
                </div>
              </Col>
              <Col size={2}>
                <div className={styles.header__date_time_container}>
                  <Time />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Modal isOpened={modalActive} onBackdropClick={() => setModalActive(false)}>
          <BalanceReplenishmentModal setModalActive={setModalActive} />
        </Modal>
      </Grid>
    </div>
  );
};

export default Header;
