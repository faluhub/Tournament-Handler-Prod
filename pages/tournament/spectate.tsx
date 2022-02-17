import { Button, TextField } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styles from '../../styles/Main.module.css';

const Spectate: NextPage = () => {
    const [id, setID] = React.useState("");
    const [pass, setPass] = React.useState();

    function handleID(e: any) { setID(e.target.value); }
    function handlePass(e: any) { setPass(e.target.value); }

    function handleSubmit() {
        console.log({
            id,
            pass
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Spectate Tournament</title>
                <meta name="description" content="Spectate a tournament!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main} style={{ textAlign: "center" }}>
                <h1 className={styles.title}>Spectate a Tournament</h1>
                <div>
                    <p>
                        <TextField
                            label="Tournament ID"
                            variant="filled"
                            style={{ backgroundColor: "white" }}
                            onChange={handleID}
                        />
                    </p>
                    <p>
                        <TextField
                            label="Tournament Password"
                            variant="filled"
                            style={{ backgroundColor: "white" }}
                            onChange={handlePass}
                        />
                    </p>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        // disabled={!id || id.length === 0}
                    >Confirm</Button>
                </div>
            </main>
        </div>
    )
}

export default Spectate;
