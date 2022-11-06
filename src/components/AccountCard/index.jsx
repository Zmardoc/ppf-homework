import { CardContent, Skeleton, Typography } from '@mui/material'
import clsx from 'clsx'
import CardInfo from '../CardInfo'
import styles from './AccountCard.module.css'

const LoadingSkeleton = () => (
  <div>
    <Skeleton variant="text" />
    <Skeleton variant="rounded" />
  </div>
)

const AccountInfo = ({ account }) => (
  <div>
    <Typography variant="h5" component="h2" className={styles.accountInfo}>
      Informace o účtu
    </Typography>
    {account ? (
      <div>
        <CardInfo label="Název účtu" value={account.name} />
        <CardInfo
          label="Číslo účtu"
          value={`${account.identification.otherAccountNumber} / ${account.servicer.bankCode}`}
        />
        <CardInfo label="IBAN" value={account.identification.iban} />
      </div>
    ) : (
      <div>Informace o účtu nejsou dostupné</div>
    )}
  </div>
)

const AccountCard = ({ className, account, loading }) => (
  <section className={clsx(className, { [styles.base]: true })}>
    <CardContent>{loading ? <LoadingSkeleton /> : <AccountInfo account={account} />}</CardContent>
  </section>
)

export { AccountCard }
