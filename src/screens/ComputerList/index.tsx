import { DashboardContainer } from "../../shared";
import ComputerListTable from "./components/Table";
import styles from "./computer-list-screen.module.scss";

const ComputerListScreen: React.FC = () => {
  return (
    <div className={styles.container}>
      <DashboardContainer>
        <ComputerListTable />
      </DashboardContainer>
    </div>
  );
};

export default ComputerListScreen;
