import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Main.module.css";

const Tournament: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Explore Tournaments</title>
                <meta name="description" content="Explore tournaments!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}></main>
        </div>
    )
}

export default Tournament;
