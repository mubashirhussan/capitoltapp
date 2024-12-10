import DataTable from "react-data-table-component";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface CustomReactDataTableProps {
  columns: any;
  data: any[];
}
function CustomReactDataTable({ columns, data }: CustomReactDataTableProps) {
  return (
    <DataTable columns={columns} data={data} pagination highlightOnHover />
  );
}
export default CustomReactDataTable;
