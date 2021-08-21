import React from "react";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import Image from 'material-ui-image';
import { makeStyles, Card, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bannerCard: {
        position: "relative",
        height: "600px",
        marginBottom: "1rem"
    },
    cardMedia: {
        position: "relative",
        height: "600px",
    },
    cardMediaOverlay: {
        position: "absolute",
        top: "10%",
        width: "100%",
        textAlign: "center",
        color: "white",
        backgroundColor: "none",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "75px",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        height: "auto"
    },
    mainLeftContent: {
        float: "left",
        width: "30%",
        padding: "20px",
        //Remove this crap below later
        height: "800px", 
        borderStyle: "solid",
        borderColor: "black",
    },
    mainRightContent: {
        float: "left",
        padding: "20px",
        width: "70%",
        //Remove this crap below later
        height: "800px", 
        borderStyle: "solid",
        borderColor: "black",
    },
}));

export const HomeIndex = () => {
    const classes = useStyles();

    return (
        <div>
            <header>
                <Header />
            </header>

            <body className={classes.body}>

                <article className={classes.bannerCard}>
                    <Card >
                        <CardMedia className={classes.cardMedia} >
                            <Image src="homebanner.jpg" imageStyle={{ height: "35%", width: "100%" }} />
                        </CardMedia>
                        <Typography gutterBottom variant="h1" component="h1" className={classes.cardMediaOverlay}>
                            Welcome to CryptoFasion!
                        </Typography>
                    </Card>
                </article>

                <section>

                <article className={classes.mainLeftContent}>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </article>

                <article className={classes.mainRightContent}>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                    <div>test</div>
                </article>

                </section>

            </body>

            <footer>
                <Footer />
            </footer>
        </div>

    );
}