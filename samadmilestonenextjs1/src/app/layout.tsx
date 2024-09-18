// src/app/layout.tsx
import './globals.css'; // Global styles
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
        <header style={{ padding: '10px', background: '#ddd' }}>
          <nav>
            <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '10px', background: '#ddd', marginTop: '20px' }}>
          <p>© 2024 My Next.js App</p>
        </footer>
      </body>
    </html>
  );
}
