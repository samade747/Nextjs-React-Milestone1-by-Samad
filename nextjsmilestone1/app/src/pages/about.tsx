import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>Hello WORLD BY SAMAD</h1>
      <h2>ABOUT PAGE</h2>
      <Link href="/home">
        <div>
          <p>Home</p>
        </div>
      </Link>
    </div>
  );
}
