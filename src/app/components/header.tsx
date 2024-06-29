// src/app/components/Header.js
import Link from 'next/link';
import styles from '../home.module.css';
import { useAuth } from '../../contexts/AuthContext';

export default function Header() {
  const { isLoggedIn, login, logout } = useAuth();
  console.log('isLoggedIn', isLoggedIn)
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/" className={styles.navbarLink}>HOME</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about" className={styles.navbarLink}>ABOUT</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/action" className={styles.navbarLink}>TAKE ACTION</Link>
          </li>
          {isLoggedIn && (
            <li className={styles.navbarItem}>
              <Link href="/doctors" className={styles.navbarLink}>DOCTORS</Link>
            </li>
          )}
          <li className={styles.navbarItem}>
            <Link href="/appoint" className={styles.navbarLink}>APPOINT</Link>
          </li>
          <li className={`${styles.navbarItem} ${styles.loginItem}`}>
            {isLoggedIn ? (
              <button onClick={logout} className={styles.navbarLink}>LOG OUT</button>
            ) : (
              <Link href="/login" className={styles.navbarLink}>LOG IN</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
