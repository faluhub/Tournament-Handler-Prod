import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/Main.module.css';

import { Checkbox, TextField, Button } from "@mui/material";
import React from 'react';

const Host: NextPage = () => {
    const [name, setName] = React.useState();
    const [pub, setPub] = React.useState(true);
    const [random, setRandom] = React.useState(true);
    const [glitchless, setGlitchless] = React.useState(true);

    function handleName(e: any) { setName(e.target.value); }
    function handlePub() { setPub(!pub); }
    function handleRandom() { setRandom(!random); }
    function handleGlitchless() { setGlitchless(!glitchless); }

    function handleSubmit() {
        console.log({
            name,
            pub,
            random,
            glitchless
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Host Tournament</title>
                <meta name="description" content="Host a tournament!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main} style={{ textAlign: "center" }}>
                <h1 className={styles.title}>Host a Tournament</h1>
                <p>
                    <TextField
                        label="Tournament Name"
                        variant="filled"
                        style={{ backgroundColor: "white" }}
                        onChange={handleName}
                    />
                    <p>
                        Public
                        <Checkbox defaultChecked={true} onChange={handlePub} />
                        Random
                        <Checkbox defaultChecked={true} onChange={handleRandom} />
                        Glitchless
                        <Checkbox defaultChecked={true} onChange={handleGlitchless} />
                    </p>
                    <Button variant="contained" onClick={handleSubmit}>Confirm</Button>
                </p>
            </main>
        </div>
    )
}

export default Host;
