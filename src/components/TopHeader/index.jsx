import BaseContainer from '../../layouts/BaseContainer'
import FullWidthContainer from '../../layouts/FullWidthContainer'
import styles from './TopHeader.module.css'

const TopHeader = () => (
  <FullWidthContainer className={styles.topHeader}>
    <BaseContainer className={styles.baseContainer}>
      <img src="/img/logo.svg" width="159" height="53" alt="ppf-bank-logo" className={styles.logo} />
      <div>CZ</div>
    </BaseContainer>
  </FullWidthContainer>
)

export { TopHeader }
