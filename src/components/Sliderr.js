import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
    root: {
        width: 500 + theme.spacing(3) * 2,
    },
    margin: {
        height: theme.spacing(3),
    },
}));


const PrettoSlider = withStyles({
    root: {
        color: '#af078b',
        height: 8,
       left: 350
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus,&:hover,&$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);

export default function CustomizedSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.margin}/>
            <Typography gutterBottom>......slider......</Typography>
            <PrettoSlider valueLabelDisplay="auto" aria-label="..... Slider  ......." defaultValue={50}/>
            <div className={classes.margin}/>

        </div>
    );
}
