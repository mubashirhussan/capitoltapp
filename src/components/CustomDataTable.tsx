/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from "mui-datatables";
import { useEffect, useState } from "react";

interface CustomDataTableProps {
  title?: string;
  columns: MUIDataTableColumn[];
  data: any[];
  options?: MUIDataTableOptions;
}
const defaultOptions: MUIDataTableOptions = {
  filter: false, // Disable filters
  responsive: "vertical",
  selectableRows: "none",
  print: false,
  search: false,
  download: false,
  sort: true,
};
function CustomDataTable({ title, columns, data }: CustomDataTableProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient ? (
    <MUIDataTable
      title={title}
      data={data}
      columns={columns}
      options={defaultOptions}
    />
  ) : (
    "loading"
  );
}

export default CustomDataTable;
