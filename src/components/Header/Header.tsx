import rocketLogo from '../../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocketLogo} alt="rocket" />
        <div className={styles.title}>
          <span>to</span>
          <span>do</span>
        </div>
      </div>
    </header>
  )
}