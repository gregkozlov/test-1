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

const Header: React.FC = () => {
  const pageTitle = useSelector<RootState>((state) => state.rootReducer.layoutSliceReducer.title) as string;
  const theme = useTheme();
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
            <h3 className={styles.header__title}>{pageTitle}</h3>
          </Col>
          <Col size={6}>
            <Row>
              <Col size={5}>
                <></>
              </Col>
              <Col size={5} rightSpace={15}>
                <div className={styles.header__dropdown_container}>
                  <div className={styles.plus_button_container}>
                    <Button size="small">
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
      </Grid>
    </div>
  );
};

export default Header;
