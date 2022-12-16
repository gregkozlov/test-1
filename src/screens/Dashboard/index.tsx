import DashboardContainer from "../../shared/DashboardContainer";
import Grid, { Row, Col } from "../../shared/GridContainer";

const DashboardScreen: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Grid>
        <Row bottomSpace={20}>
          <Col size={6} rightSpace={10}>
            <DashboardContainer>
              <>Выручка</>
            </DashboardContainer>
          </Col>
          <Col size={6} leftSpace={10}>
            <Row>
              <Col size={4}>
                <DashboardContainer>
                  <>Наличные</>
                </DashboardContainer>
              </Col>
              <Col size={4} leftSpace={20} rightSpace={20}>
                <DashboardContainer>
                  <>Безналичные</>
                </DashboardContainer>
              </Col>
              <Col size={4}>
                <DashboardContainer>
                  <>Загрузка клуб</>
                </DashboardContainer>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size={6} rightSpace={10}>
            <DashboardContainer>
              <>Пополнения</>
            </DashboardContainer>
          </Col>
          <Col size={6} leftSpace={10}>
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
