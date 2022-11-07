import { accountResponse, balanceResponse, transactionResponse } from './__mocks'

const timeout = (prom, time) => {
  let timer
  return Promise.race([prom, new Promise((_r, rej) => (timer = setTimeout(rej, time)))]).finally(() =>
    clearTimeout(timer),
  )
}

export const fetchAccounts = async () => {
  //GET '/accounts'
  return timeout(Promise.resolve({ status: 200, data: accountResponse }), 2000)
}
export const fetchBalance = accountId => {
  //GET `/accounts/${accountId}/balance`
  return timeout(Promise.resolve({ status: 200, data: balanceResponse }), 2000)
}
export const fetchTransactions = accountId => {
  //GET `/accounts/${accountId}/transactions`
  return timeout(Promise.resolve({ status: 200, data: transactionResponse }), 2000)
}
