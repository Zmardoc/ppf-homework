import parse from 'date-fns/parse'
import format from 'date-fns/format'

export const currencyFormat = (value, currency) => {
  return new Intl.NumberFormat('cs-CZ', { style: 'currency', currency }).format(value)
}

export const DATE_FORMAT = {
  API: 'yyyy-MM-dd',
  COMPONENT: 'd. M. yyyy',
}

export const isoDateFormat = isoDate => {
  return format(new Date(isoDate), DATE_FORMAT.COMPONENT)
}

export const dateFormat = apiDate => {
  const date = parse(apiDate, DATE_FORMAT.API, new Date())
  return format(date, DATE_FORMAT.COMPONENT)
}
