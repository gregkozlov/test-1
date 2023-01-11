import { Text, Table } from "../../../../shared/";
import useComputerListTable from "./useComputerListTable";

const ComputerListTable = () => {
  const table = useComputerListTable();
  return (
    <Table
      table={table}
      height="calc(100vh - 200px)"
      rowStyles={{
        border: "1px solid $table-border",
        marginBottom: 10,
        borderRadius: 10,
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
      }}
    />
  );
};
export default ComputerListTable;
