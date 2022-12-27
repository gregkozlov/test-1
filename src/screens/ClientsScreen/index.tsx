import { DashboardContainer } from "../../shared";
import { ClientsTable, Header } from "./components";
import styles from "./clients-screen.module.scss";

const ClientsScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardContainer>
        <Header />
        <ClientsTable />
      </DashboardContainer>
    </div>
  );
};

export default ClientsScreen;
