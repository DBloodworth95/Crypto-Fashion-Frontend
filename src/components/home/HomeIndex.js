import React from "react";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import Image from 'material-ui-image';
import { makeStyles, Card, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    bannerCard: {
        position: "relative",
    },
    cardMedia: {
        height: 0,
        paddingTop: "56.25%",

    },
    cardMediaOverlay: {
        position: "absolute",
        top: "4%",
        width: "100%",
        textAlign: "center",
        color: "white",
        backgroundColor: "none",
        fontFamily: "Open Sans, sans-serif",
        fontSize: "75px",
    }
}));

export const HomeIndex = () => {
    const classes = useStyles();

    return (
        <div>
            <header>
                <Header />
            </header>

            <section>
                <Card className={classes.bannerCard}>
                    <CardMedia  >
                        <Image src="homebanner.jpg" imageStyle={{ height: "35%", width: "100%" }} />
                    </CardMedia>
                    <Typography gutterBottom variant="h1" component="h1" className={classes.cardMediaOverlay}>
                        Welcome to CryptoFasion!
                    </Typography>
                </Card>
            </section>

            <section>
                <div>test</div>
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}