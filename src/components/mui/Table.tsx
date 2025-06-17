import { invoices } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function MuiTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell align="right">Total Amount</TableCell>
            <TableCell>Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((row) => (
            <TableRow
              key={row.key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.invoice}
              </TableCell>
              <TableCell>{row.paymentStatus}</TableCell>
              <TableCell align="right">{row.totalAmount}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">$2,500.00</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
