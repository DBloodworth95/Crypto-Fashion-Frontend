import { AppBar, Toolbar, Typography, makeStyles, Button } from "@material-ui/core";
import { React } from "react";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#FFFFFF",
        paddingLeft: "10px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#000000",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "700",
        size: "18px",
        color: "#000000"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }
}));

const headerTitles = [
    {
        label: "Shirts",
        href: "/shirts",
    },
    {
        label: "Trousers",
        href: "/trousers",
    },
    {
        label: "Shoes",
        href: "/shoes",
    },
    {
        label: "Accessories",
        href: "/accessories",
    },
    {
        label: "New",
        href: "/newclothes",
    },
    {
        label: "Sale",
        href: "/sale",
    },
    {
        label: "Login",
        href: "/login",
    },

]

export const Header = () => {
    const { header, logo, menuButton, toolbar } = useStyles();

    const displayDesktop = () => {
        return <Toolbar className={toolbar}>
            {cryptoFashionLogo}
            {getMenuButtons()}
            </Toolbar>
    };

    const cryptoFashionLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            CryptoFashion
        </Typography>
    )

    const getMenuButtons = () => {
        return headerTitles.map(({ label, href }) => {
            return (
                <Button key={label} color="inherit" to={href} component={RouterLink} >
                    <Typography className={menuButton}>
                        {label}
                    </Typography>
                </Button>
            )
        })
    }

    return (
        <AppBar className={header}>{displayDesktop()}</AppBar>
    );
}