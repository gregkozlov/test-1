import { Table } from "../../../../shared";
import useClientsTable from "../../useClientsTable";

const ClientsTable: React.FC = () => {
  const table = useClientsTable();
  return (
    <Table
      height={`calc(100vh - 260px)`}
      table={table}
      rowStyles={{
        border: "1px solid $table-border",
        marginBottom: 10,
        borderRadius: 10
      }}
    />
  );
};
export default ClientsTable;
