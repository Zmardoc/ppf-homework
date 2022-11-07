import {
  LinearProgress,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import clsx from 'clsx'
import { currencyFormat, dateFormat } from '../../utils/format'
import styles from './TransactionList.module.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const TransactionList = ({ className, transactions, loading }) => (
  <section className={clsx(className, { [styles.base]: true })}>
    {loading ? (
      <LinearProgress />
    ) : (
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Datum</StyledTableCell>
              <StyledTableCell>Název protiúčtu</StyledTableCell>
              <StyledTableCell align="right">VS</StyledTableCell>
              <StyledTableCell align="right">SS</StyledTableCell>
              <StyledTableCell align="right">Částka</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map(transaction => (
              <TableRow key={transaction.transactionId} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {dateFormat(transaction.bookingDate)}
                </TableCell>
                <TableCell>{transaction.counterPartyAccount.accountName}</TableCell>
                <TableCell align="right">{transaction.variableSymbol}</TableCell>
                <TableCell align="right">{transaction.specificSymbol}</TableCell>
                <TableCell align="right">
                  <b>{currencyFormat(transaction.amount.value, transaction.amount.currency)}</b>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )}
  </section>
)

export { TransactionList }
