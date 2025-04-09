import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICategoryHead } from "@/types";

type TProps = {
  tableHead: [];
  children: React.ReactNode;
};

const TableForDashboard = ({ tableHead, children }: TProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {tableHead.map((head: ICategoryHead, index: number) => (
            <TableHead key={index}>{head.categoryFieldName}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>{children}</TableBody>
    </Table>
  );
};

export default TableForDashboard;
