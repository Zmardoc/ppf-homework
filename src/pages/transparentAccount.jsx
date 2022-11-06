import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchAccounts, fetchBalance, fetchTransactions } from '../api'
import { AccountCard } from '../components/AccountCard'
import styles from './TransparentAccount.module.css'

const TransparentAccount = () => {
  const [account, setAccount] = useState(null)
  const [loadingAccount, setLoadingAccount] = useState(true)

  useEffect(() => {
    fetchAccounts()
      .then(response => setAccount(response.data[0]))
      .finally(() => {
        setLoadingAccount(false)
      })

    fetchBalance().then(response => console.log(response.data))
    fetchTransactions().then(response => console.log(response.data))
  }, [])
  return (
    <div>
      <Typography variant="h4" component="h1" className={styles.header}>
        Pohyby na transparentním účtu
      </Typography>
      <div className={styles.accountContainer}>
        <AccountCard account={account} loading={loadingAccount} className={styles.accountCard} />
      </div>
    </div>
  )
}

export { TransparentAccount }
