import Link from 'next/link';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <p>This is my contact page by smad.</p>
      <Link href="/">Home</Link>
    </div>
  );
}
