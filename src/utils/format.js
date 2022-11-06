export const currencyFormat = (value, currency) => {
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency }).format(value)
}
