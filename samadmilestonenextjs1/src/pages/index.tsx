import Link from "next/link";


export default function Home() {
    return (
        <div>
           <h1>this is my homepage</h1>

            <Link href="/about">
                About
            </Link>

        </div>
    )


}


