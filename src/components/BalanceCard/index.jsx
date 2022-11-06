import { CardContent, Skeleton, Typography } from '@mui/material'
import clsx from 'clsx'
import { currencyFormat } from '../../utils/format'
import CardInfo from '../CardInfo'
import styles from './BalanceCard.module.css'

const LoadingSkeleton = () => (
  <div>
    <Skeleton variant="text" />
    <Skeleton variant="rounded" />
  </div>
)

const Balance = ({ className, amount }) => {
  const formatted = currencyFormat(amount.value, amount.currency)
  return <div className={clsx(className, { [styles.balance]: true })}>{formatted}</div>
}

const BalanceInfo = ({ balance }) => (
  <div>
    <Typography variant="h5" component="h2" className={styles.balanceInfo}>
      Aktuální zůstatek
    </Typography>
    {balance ? (
      <div>
        <Balance className="" amount={balance.amount}></Balance>
        <CardInfo label="Ke dni" value={'15.2.2001'} />
      </div>
    ) : (
      <div>Informace o zůstatku nejsou dostupné</div>
    )}
  </div>
)

const BalanceCard = ({ className, balance, loading }) => (
  <section className={clsx(className, { [styles.base]: true })}>
    <CardContent>{loading ? <LoadingSkeleton /> : <BalanceInfo balance={balance} />}</CardContent>
  </section>
)

export { BalanceCard }
