import clsx from 'clsx'
import styles from './BaseContainer.module.css'

const BaseContainer = ({ className, children }) => (
  <section className={clsx(className, { [styles.base]: true })}>{children}</section>
)

export default BaseContainer
