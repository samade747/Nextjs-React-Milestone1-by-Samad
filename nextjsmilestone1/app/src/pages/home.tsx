import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Hello WORLD BY SAMAD</h1>
      <h2>HOME PAGE</h2>
      <Link href="/about">
        <div>
          <p>Move me to About page</p>
        </div>
      </Link>
    </div>
  );
}
