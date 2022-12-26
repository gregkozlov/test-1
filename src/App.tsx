import styles from "./style/main.module.scss";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { DashboardNavigation, Header, RoutesContainer, Grid, Col, Row } from "./shared/";
import { LINKS_BOTTOM, LINKS_TOP } from "./constants/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { LoginPage } from "./pages";
import { RootState } from "./store";

const App: React.FC = () => {
  const { t, i18n } = useTranslation();

  const isAuth = useSelector<RootState>((state) => state.rootReducer.userSliceReducer.isAuth);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Suspense fallback={<div>loading...</div>}>
      {isAuth ? (
        <BrowserRouter>
          <Header />
          <Grid fullHeight>
            <Row>
              <Col size={2}>
                <div className={styles.router_checking}>
                  <DashboardNavigation />
                </div>
              </Col>
              <Col size={10}>
                <div className={styles.route_screens}>
                  <RoutesContainer />
                </div>
              </Col>
            </Row>
          </Grid>
        </BrowserRouter>
      ) : (
        <LoginPage />
      )}
    </Suspense>
  );
};

export default App;
