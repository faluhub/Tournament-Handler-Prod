import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Main.module.css';
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Tournament Handler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign In</button>
        </>}
        {session && <>
          Signed in as {session.user?.name} <br/>
          <button onClick={() => signOut()}>Sign Out</button>
        </>}
      </main>
    </div>
  );
}

export default Home;
