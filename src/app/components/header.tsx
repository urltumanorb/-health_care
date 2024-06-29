import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/slices/authSlice';
import styles from '../home.module.css';
import router from 'next/router';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 标记客户端渲染
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    dispatch(userLogout());
    router.push('/home');
  };

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/home" className={styles.navbarLink}>HOME</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about" className={styles.navbarLink}>ABOUT</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/action" className={styles.navbarLink}>TAKE ACTION</Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/doctors" className={styles.navbarLink}>DOCTORS</Link>
          </li>
          {
            isClient && isLoggedIn && (
            <li className={styles.navbarItem}>
              <Link href="/appoint" className={styles.navbarLink}>APPOINT</Link>
            </li>
          )}
          {
          isClient && isLoggedIn && (
            <li className={styles.navbarItem}>
              <Link href="/profile" className={styles.navbarLink}>PROFILE</Link>
            </li>
            )
          }
          <li className={`${styles.navbarItem} ${styles.loginItem}`}>
            {isClient && isLoggedIn ? (
              <div onClick={handleLogout} className={styles.navbarLink}>LOG OUT</div>
            ) : (
              <Link href="/login" className={styles.navbarLink}>LOG IN</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
