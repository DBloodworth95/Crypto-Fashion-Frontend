import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { React, Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: "#000000",
    },
    root: {
        flexGrow: 1,
        marginTop: "1rem",
        padding: "2rem",
        backgroundColor: "#000000",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
    },
    footerContainer: {
        width: "25%",
        textAlign: "left",
        marginRight: "50%",
    },
    footerHeader: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "700",
        fontSize: "16px",
        color: "#FFFFFF",
    },
    footerContent: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "100",
        fontSize: "14px",
        color: "#FFFFFF",
    }
}));

const footerTitles = [

];

export const Footer = () => {
    const classes = useStyles();

    const FooterHeaderRow = () => {
        return (
            <Fragment>
                <Grid item xs={4}>
                    <Typography className={classes.footerHeader}>About</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.footerHeader}>Services</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography className={classes.footerHeader}>Other</Typography>
                </Grid>
            </Fragment>
        );
    }

    return (
        <div className={classes.root}>
            <Container className={classes.footerContainer}>
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={4}>
                            <Typography className={classes.footerHeader}>About</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.footerHeader}>Services</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.footerHeader}>Other</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>
                        <Grid item xs={4}>
                            <Typography className={classes.footerContent}>About</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.footerContent}>Services</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography className={classes.footerContent}>Other</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={1}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    );

}