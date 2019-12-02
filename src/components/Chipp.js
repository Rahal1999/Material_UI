import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import pic from './bike.jpeg';


const useStyles = makeStyles(theme =>({
    root : {
        display :'flex',
        justifyContent : 'center',
        flexWrap : 'wrap',
        '&>*' :{
            margin : theme.spacing(0.5),
        },
    },
}));


export default function OutlinedChips() {
    const classes = useStyles();

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const onSubmit = () => {
        console.log("ssddsadsad");
    }

    return(
        <div className={classes.root}>
            <Chip label="Basic" variant="outlined"/>


            <Chip
                avatar={<Avatar>R</Avatar>}
                label="+++++Rahal+++++"
                onClick={handleClick}
                variant="contained"
                color = "secondary"

            />

            <Chip
                avatar={<Avatar alt="Natacha" src={pic} />}
                label="Deletable"
                onDelete={handleDelete}
                variant="outlined"
            />

            <Chip
                icon = {<DirectionsBikeOutlinedIcon/>}
                label = "....Bike"
                onClick = {onSubmit}
            />
        </div>
    );

}
