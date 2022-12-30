import { DashboardContainer, Grid, Row, Col, Text } from "../../shared";
import { useTheme } from "../../shared/hooks";
import DashboardTable from "./components/Table";
import AdditionalInfo from "./components/AdditionalInfo";
import Statistics from "./components/Statistics";
import styles from "./dashboard.module.scss";
import { PieChart } from "react-minimal-pie-chart";
import InCashRegister from "./components/InCashRegister";
import ClubLoad from "./components/ClubLoad";
import Notes from "./components/Notes";

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
                  <div className={styles.chart_header}>
                    <Text color="#93939D">Выручка</Text>
                  </div>
                  <div className={styles.chart}>
                    <div className={styles.total}>
                      <Text bold>15354₽</Text>
                    </div>
                    <PieChart
                      lineWidth={35}
                      // totalValue={2000}
                      // label={({ dataEntry }) => `${Math.round(dataEntry.value)} ₽`}
                      data={[
                        { value: 1000, color: "#58F596" },
                        { value: 600, color: "#4B47FF" }
                      ]}
                      style={{ height: 150, width: 150 }}
                      labelStyle={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        fill: "#E38627"
                      }}
                      labelPosition={0}
                    />
                  </div>
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
