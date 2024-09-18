import Link from 'next/link';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p>This is my about page by smad.</p>
      <Link href="/">Home</Link>
    </div>
  );
}
