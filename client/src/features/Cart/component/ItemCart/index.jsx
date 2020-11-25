import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonBase, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

ItemCart.propTypes = {

};

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 600,
        position: "relative",
        overflow: "auto",
        maxHeight: 600

    },

    image: {
        width: 128,
        height: 100,
    },
    img: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    tittle: {
        fontSize: 13,
        padding: 0
    }

})


function ItemCart(props) {
    const classes = useStyles();
    const { it, OnClickDeleteItemCart } = props;
    const handleDeleteItemCart = () => {
        if (OnClickDeleteItemCart)
            OnClickDeleteItemCart(it)

    }
    return (
        <div>
            <Grid container>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={it.image[0].url} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={1} padding={1}>
                        <Grid item xs>
                            <CardContent gutterBottom variant="subtitle1" className={classes.tittle}>
                                {it.tittle}
                                <br />
                                {it.gia.toLocaleString()} x {it.slmua}
                            </CardContent>
                            <Button onClick={handleDeleteItemCart} style={{ cursor: 'pointer' }}>
                                <DeleteIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
        </div>
    );
}

export default ItemCart;