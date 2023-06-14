import React from "react";
import { FaEllipsisV } from "react-icons/fa";

interface TableProps {
  headers: string[];
  data: any[];
}

interface RowProps {
  cells: string[];
}

interface CellProps {
  value: string;
  isStatusColumn?: boolean;
  actionsCell?: React.ReactNode;
}

const Cell: React.FC<CellProps> = ({ value, isStatusColumn }) => {
  const getStatusColor = (status: any) => {
    switch (status) {
      case "Completed":
        return "bg-green-900 text-white";
      case "Processing":
        return "bg-orange-500 text-white";
      case "Cancelled":
        return "bg-red-600 text-white";
      case "available":
        return "bg-green-900 text-white";
      case "not Available":
        return "bg-red-600 text-white";
      default:
        return "";
    }
  };

  if (isStatusColumn) {
    return (
      <td
        className={`py-2 px-4 text-sm text-center ${getStatusColor(value)} p-2`}
      >
        <span className="text-[0.65rem] ml-1">{value}</span>
      </td>
    );
  }

  return <td className="py-2 px-4 text-sm text-center">{value}</td>;
};

const Row: React.FC<RowProps> = ({ cells }) => {
  return (
    <tr className="border-b">
      {cells.map((cell, cellIndex) => (
        <Cell key={cellIndex} value={cell} isStatusColumn={cellIndex === 5} />
      ))}
    </tr>
  );
};

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="mt-4 w-full border border-gray-300">
      <thead>
        <tr className="bg-zinc-100 text-sm">
          {headers.map((header, index) => (
            <th key={index} className="py-2 px-4 text-xs font-semibold">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <Row key={index} cells={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
