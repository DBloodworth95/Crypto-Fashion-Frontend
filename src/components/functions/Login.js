import React from "react";
import { Footer } from "../common/Footer";
import { Header } from "../common/Header";
import Image from 'material-ui-image';
import { makeStyles, Card, CardMedia, Typography, Grid } from "@material-ui/core";
import { FeaturedProductsRow } from "./FeaturedProductsRow";

const useStyles = makeStyles(() => ({
    bannerCard: {
        position: "relative",
        height: "800px",
        marginBottom: "1rem"
    },
    cardMedia: {
        position: "relative",
        height: "800px",
    },
    cardMediaOverlay: {
        position: "absolute",
        top: "12%",
        width: "100%",
        textAlign: "center",
        color: "white",
        backgroundColor: "none",
        fontFamily: "Roboto",
        fontSize: "75px",
    },
    mainContent: {
        padding: "20px",
        width: "100%",
    },
    mainContentHeader: {
        textAlign: "center",
        fontSize: "75px",
        fontFamily: "Roboto",
    },
    mainContentCardContainer: {
        flexGrow: 1,
        textAlign: "center",
        width: "100%",
        padding: '100px'
    }
}));

export const Login = () => {
    const classes = useStyles();

    return (
        <div>
            <header>
                <Header />
            </header>
            <article className={classes.bannerCard}>
                <Card >
                    <CardMedia className={classes.cardMedia} >
                        <Image src="homebanner.jpg" imageStyle={{ height: "55%", width: "100%" }} />
                    </CardMedia>
                    <Typography gutterBottom variant="h1" component="h1" className={classes.cardMediaOverlay}>
                        Welcome to CryptoFasion!
                    </Typography>
                </Card>
            </article>

            <section>
                <article className={classes.mainContent}>
                    <Typography gutterBottom variant="h1" component="h1" className={classes.mainContentHeader}>
                        Featured Products
                    </Typography>
                    <div className={classes.mainContentCardContainer}
                    >
                        <Grid container spacing={5}>
                            <Grid container item xs={12} spacing={3}>
                                <FeaturedProductsRow />
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <FeaturedProductsRow />
                            </Grid>
                            <Grid container item xs={12} spacing={3}>
                                <FeaturedProductsRow />
                            </Grid>
                        </Grid>
                    </div>
                </article>
            </section>
            <footer>
                <Footer />
            </footer>
        </div>

    );
}