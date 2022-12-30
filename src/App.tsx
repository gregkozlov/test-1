import styles from "./style/main.module.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { DashboardNavigation, Header, RoutesContainer, Grid, Col, Row } from "./shared/";
import { LINKS_BOTTOM, LINKS_TOP } from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginScreen } from "./screens";
import { RootState } from "./store";
import { useTheme } from "./shared/hooks";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const theme = useTheme();
  const isAuth = useSelector<RootState>((state) => state.rootReducer.userSliceReducer.isAuth);
  // const isAuth = true;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      {isAuth ? (
        <BrowserRouter>
          <Header />
          <Grid>
            <Row>
              <Col size={2}>
                <div className={`${styles.router_checking} ${styles[theme]}`}>
                  <DashboardNavigation />
                </div>
              </Col>
              <Col size={10}>
                <div className={`${styles.route_screens} ${styles[theme]}`}>
                  <RoutesContainer />
                </div>
              </Col>
            </Row>
          </Grid>
        </BrowserRouter>
      ) : (
        <LoginScreen />
      )}
    </Suspense>
  );
};

export default App;
