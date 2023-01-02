import { DashboardContainer, Grid, Row, Col, Text, Button } from "../../shared";
import { useTheme } from "../../shared/hooks";
import DashboardTable from "./components/Table";
import AdditionalInfo from "./components/AdditionalInfo";
import Statistics from "./components/Statistics";
import styles from "./dashboard.module.scss";
import InCashRegister from "./components/InCashRegister";
import ClubLoad from "./components/ClubLoad";
import Notes from "./components/Notes";
import Chart from "./components/Charts";
import { t } from "i18next";

const DashboardScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <div className={`${styles.dashboard} ${styles[theme]}`}>
      <Grid>
        <Row bottomSpace={20}>
          <Col size={7} rightSpace={10}>
            <DashboardContainer>
              <Statistics />
            </DashboardContainer>
          </Col>
          <Col size={5} leftSpace={10}>
            <Row customStyles={{ flex: 1 }}>
              <Col contentFullHeight size={7}>
                <DashboardContainer>
                  <Chart />
                </DashboardContainer>
              </Col>
              <Col contentFullHeight size={5} leftSpace={20}>
                <DashboardContainer>
                  <InCashRegister />
                </DashboardContainer>
                <DashboardContainer topSpace={20}>
                  <ClubLoad />
                </DashboardContainer>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col size={7} rightSpace={10} customStyles={{}}>
            <DashboardContainer>
              {/* Client screen modal */}
              <DashboardTable />
            </DashboardContainer>
          </Col>
          <Col size={5} leftSpace={10} contentFullHeight>
            <DashboardContainer>
              <Notes />
            </DashboardContainer>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default DashboardScreen;
