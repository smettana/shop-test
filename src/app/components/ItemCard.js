import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}));



const ItemCard = ({ title, price, descr, img, deleteProduct, id, admin }) => {
    const classes = useStyles();
    return (
        <Card className="card">
            <CardHeader
                className="card-header"
                title={title}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title={title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {
                        descr
                    }
                </Typography>
                <div className="item-price">
                    {
                        `${price} грн`
                    }
                </div>
            </CardContent>
            <CardActions disableSpacing>
                {admin &&
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    onClick={()=>deleteProduct(id)}
                >
                    Delete
                </Button>
                }
            </CardActions>
        </Card>
    )

};

ItemCard.propTypes = {
    title : PropTypes.string,
    price : PropTypes.number,
    descr : PropTypes.string,
    img : PropTypes.string,
    id: PropTypes.number,
    admin: PropTypes.bool,
    deleteProduct: PropTypes.func,
};

ItemCard.defaultProps = {
    title : '',
    price : 0,
    descr : '',
    img : '',
    id: 0,
    admin: true,
    deleteProduct: ()=>{},
};

export default ItemCard;