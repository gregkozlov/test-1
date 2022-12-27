import { DashboardContainer, Grid, Row, Col, Text } from "../../shared";
import { useTheme } from "../../shared/hooks";
import DashBoardTable from "./components/Table";
import styles from "./dashboard.module.scss";

const DashboardScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <div className={`${styles.dashboard} ${styles[theme]}`}>
      <Grid>
        <Row bottomSpace={20}>
          <Col size={7} rightSpace={10}>
            <DashboardContainer>
              <Text color="#93939D">Выручка:</Text>
              <Text bold size="extra-large">
                0 ₽
              </Text>
              <Text bold size="large">
                Admin T.
              </Text>
            </DashboardContainer>
          </Col>
          <Col size={5} leftSpace={10}>
            <Row customStyles={{ flex: 1 }}>
              <Col contentFullHeight size={4}>
                <DashboardContainer>
                  <>Наличные</>
                </DashboardContainer>
              </Col>
              <Col contentFullHeight size={4} leftSpace={20} rightSpace={20}>
                <DashboardContainer>
                  <>Безналичные</>
                </DashboardContainer>
              </Col>
              <Col contentFullHeight size={4}>
                <DashboardContainer>
                  <>Загрузка клуба</>
                </DashboardContainer>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size={7} rightSpace={10} customStyles={{}}>
            <DashboardContainer>
              <DashBoardTable />
            </DashboardContainer>
          </Col>
          <Col size={5} leftSpace={10} contentFullHeight>
            <DashboardContainer>
              <>Выручка</>
            </DashboardContainer>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardScreen;
