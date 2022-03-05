import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../../styles/Main.module.css";
import { Backdrop } from "@mui/material";

import People from "@mui/icons-material/People";
import AccountBox from "@mui/icons-material/AccountBox";
import Lightbulb from "@mui/icons-material/Lightbulb";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import Search from "@mui/icons-material/Search";
import Block from "@mui/icons-material/Block";
import IntegrationInstructions from "@mui/icons-material/IntegrationInstructions";
import AcUnit from "@mui/icons-material/AcUnit";
import React from "react";

const SpectateID: NextPage = () => {
    const id = useRouter().query.id;

    const backdrops = {
        "AccountBoxIcon": React.useState(false),
        "LightbulbIcon": React.useState(false),
        "PeopleIcon": React.useState(false),
        "MoreHorizIcon": React.useState(false),
        "SearchIcon": React.useState(false),
        "BlockIcon": React.useState(false),
        "IntegrationInstructionsIcon": React.useState(false),
        "AcUnitIcon": React.useState(false)
    };

    function handleIconClick(e: any) {
        if (!getAnyBackdropOpen()) {
            var target = e.target.dataset.testid;
            if (!target) { target = e.target.farthestViewportElement.dataset.testid; }
    
            const [bd, setBd] = backdrops[target];
            setBd(!bd);
        }
    }

    function getBackdropOpen(icon: any) {
        const [bd, setBd] = backdrops[icon];
        return bd;
    }

    function getAnyBackdropOpen() {
        for (const backdrop in backdrops) {
            const [bd, setBd] = backdrops[backdrop];

            if (bd) {
                return true;
            }
        }
        return false;
    }

    function closeBackdrop(e: any) {
        for (const backdrop in backdrops) {
            const [bd, setBd] = backdrops[backdrop];

            if (bd) {
                setBd(false);
                break;
            }
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Spectating {id}</title>
                <meta name="description" content={`Spectate ${id}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className={styles.navigation}>
                    <div className={styles.leftnav} hidden={getAnyBackdropOpen()}>
                        <AccountBox onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("AccountBoxIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <Lightbulb onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("LightbulbIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <People onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("PeopleIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <MoreHoriz onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("MoreHorizIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>
                    </div>
                    <div className={styles.rightnav}>
                        <Search onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("SearchIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <Block onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("BlockIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <IntegrationInstructions onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("IntegrationInstructionsIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>

                        <AcUnit onClick={handleIconClick} className={styles.navitem} />
                        <Backdrop
                            sx={{ zIndex: 3 }}
                            open={getBackdropOpen("AcUnitIcon")}
                            onClick={closeBackdrop}
                        ></Backdrop>
                    </div>
                </div>
                <div className={styles.povcontainer}>
                    <h1 className={styles.pov}>screen 1</h1>
                    <h1 className={styles.pov}>screen 2</h1>
                    <h1 className={styles.pov}>screen 3</h1>
                    <h1 className={styles.pov}>screen 4</h1>
                </div>
            </main>
        </div>
    )
}

export default SpectateID;
