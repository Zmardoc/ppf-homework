import clsx from 'clsx'
import styles from './CardInfo.module.css'

const CardInfo = ({ className, label, value }) => (
  <div className={clsx(className, { [styles.base]: true })}>
    <span className={styles.label}>{label}:</span>
    <b>{value}</b>
  </div>
)

export default CardInfo
