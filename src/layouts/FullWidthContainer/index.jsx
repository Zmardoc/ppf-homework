import styles from './FullWidthContainer.module.css'
import clsx from 'clsx'

const FullWidthContainer = ({ children, className }) => (
  <section className={clsx(className, { [styles.fullWidth]: true })}>{children}</section>
)

export default FullWidthContainer
