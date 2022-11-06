import { accountResponse, balanceResponse, transactionResponse } from './__mocks'

const timeout = (prom, time) => {
  let timer
  return Promise.race([prom, new Promise((_r, rej) => (timer = setTimeout(rej, time)))]).finally(() =>
    clearTimeout(timer),
  )
}

export const fetchAccounts = () => {
  return timeout(Promise.resolve({ status: 200, data: accountResponse }), 2000)
}
export const fetchBalance = () => {
  return Promise.resolve({ status: 200, data: balanceResponse })
}
export const fetchTransactions = () => {
  return Promise.resolve({ status: 200, data: transactionResponse })
}
