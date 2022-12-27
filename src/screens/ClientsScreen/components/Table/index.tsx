import { Table } from "../../../../shared";
import useClientsTable from "../../useClientsTable";

const ClientsTable: React.FC = () => {
  const table = useClientsTable();
  // TODO: table height
  return (
    <Table
      table={table}
      rowStyles={{
        border: "1px solid $table-border",
        marginBottom: 10,
        borderRadius: 10,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
      }}
    />
  );
};
export default ClientsTable;
