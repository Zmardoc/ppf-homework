import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchAccounts, fetchBalance, fetchTransactions } from '../api'
import { AccountCard } from '../components/AccountCard'
import { BalanceCard } from '../components/BalanceCard'
import { TransactionList } from '../components/TransactionList'
import styles from './TransparentAccount.module.css'

const TransparentAccount = () => {
  const [account, setAccount] = useState(null)
  const [loadingAccount, setLoadingAccount] = useState(true)

  const [balance, setBalance] = useState(null)
  const [loadingBalance, setLoadingBalance] = useState(true)

  const [transactions, setTransactions] = useState(null)
  const [loadingTransactions, setLoadingTransactions] = useState(true)

  useEffect(() => {
    fetchAccounts()
      .then(response => setAccount(response.data[0]))
      .finally(() => {
        setLoadingAccount(false)
      })

    fetchBalance()
      .then(response => setBalance(response.data))
      .finally(() => {
        setLoadingBalance(false)
      })
    fetchTransactions()
      .then(response => setTransactions(response.data))
      .finally(() => {
        setLoadingTransactions(false)
      })
  }, [])
  return (
    <div>
      <Typography variant="h4" component="h1" className={styles.header}>
        Pohyby na transparentním účtu
      </Typography>
      <div className={styles.accountContainer}>
        <AccountCard account={account} loading={loadingAccount} />
        <BalanceCard balance={balance} loading={loadingBalance} />
      </div>
      <TransactionList transactions={transactions} loading={loadingTransactions} className={styles.transactionList} />
    </div>
  )
}

export { TransparentAccount }
