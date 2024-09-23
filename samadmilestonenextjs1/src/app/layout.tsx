// src/app/layout.tsx
import './globals.css'; // Global styles
import styles from './layout.module.css'; 
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
      </head>
      <body>
        <header className={styles.header}>
          <nav>
            <Link href="/">Home</Link> 
            <Link href="/about">About</Link> 
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.footer}>
          <p>© 2024 Samad Next.js App</p>
          <p className={styles.footw}>
            Visit  <a href="https://www.linkedin.com/in/samaddeveloper/" target="_blank" rel="noopener noreferrer" >LinkedIn</a>
            </p>
            <p className={styles.footw}>
            Visit  <a href="https://github.com/samade747/" target="_blank" rel="noopener noreferrer" >Github</a>
            </p>
            <p className={styles.footw}>
            Visit  <a href="https://linktr.ee/samade747" target="_blank" rel="noopener noreferrer" >Linktree</a>
            </p>
        </footer>
      </body>
    </html>
  );
}
