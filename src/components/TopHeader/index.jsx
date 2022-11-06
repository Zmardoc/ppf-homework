import BaseContainer from '../../layouts/BaseContainer'
import FullWidthContainer from '../../layouts/FullWidthContainer'
import styles from './TopHeader.module.css'

const TopHeader = () => (
  <FullWidthContainer className={styles.topHeader}>
    <BaseContainer className={styles.baseContainer}>
      <div>PPF logo</div>
      <div>neco jineho</div>
    </BaseContainer>
  </FullWidthContainer>
)

export { TopHeader }
