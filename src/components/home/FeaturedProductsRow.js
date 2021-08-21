import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    rootCard: {

    },
    mediaCard: {
        height: 300,
        objectFit: 'contain',
    },
    cardText: {
        fontFamily: "Roboto",
    }
}));

export const FeaturedProductsRow = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Card className={classes.rootCard}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediaCard}
                            image="logo512.png"
                            title=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                                Product
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Description
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Price
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.rootCard}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediaCard}
                            image="logo512.png"
                            title=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                                Product
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Description
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Price
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.rootCard}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.mediaCard}
                            image="logo512.png"
                            title=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.cardText}>
                                Product
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Description
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.cardText}>
                                Product Price
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Buy Now
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>
    );
}
