import Link from "next/link";
import styles from "../app/Home.module.css"


export default function Home() {
    return (
        <div>
           <h1 className={styles.helloWorld}>this is my homepage</h1>

            <Link href="/about">
                About
            </Link>

        </div>
    )


}


