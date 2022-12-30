import { DashboardContainer } from "../../shared";
import { ClientsTable, Header } from "./components";
import styles from "./clients-screen.module.scss";
import Modal from "../../shared/components/Modal";
import { useState } from "react";

const ClientsScreen: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleModal = () => {
    setIsOpened((state) => !state);
  };

  return (
    <div className={styles.container}>
      <DashboardContainer>
        <Header handleToggleModal={handleToggleModal} />
        <ClientsTable />
      </DashboardContainer>
      <Modal isOpened={isOpened} onBackdropClick={handleToggleModal}>
        <DashboardContainer>some content</DashboardContainer>
      </Modal>
    </div>
  );
};

export default ClientsScreen;
