import { useSelector } from "react-redux";

import Grid, { Row, Col } from "../GridContainer";
import { RootState } from "../../../store";

import Time from "./components/Time";

import styles from "./header.module.scss";
import { Logo } from "./images";

const Header: React.FC = () => {
  const pageTitle = useSelector<RootState>((state) => state.rootReducer.layoutSliceReducer.title) as string;

  return (
    <div className={styles.header}>
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
              <Col size={10}>
                <></>
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
