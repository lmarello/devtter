
import styles from './AppLayout.module.css';
import Link from 'next/link';

export default function ({ children }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Devtter!</a>
      </h1>
      <nav className={styles.nav}>
        <Link href="/timeline">Timeline</Link>
      </nav>
      {children}
    </main>
  );
}
