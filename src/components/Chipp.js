import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
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

    chipss:{
        position:'relative',

    }
}));

// const [chipData, setChipData] = React.useState([
//     { key: 0, label: 'Angular' },
//     { key: 1, label: 'jQuery' },
//     { key: 2, label: 'Polymer' },
//     { key: 3, label: 'React' },
//     { key: 4, label: 'Vue.js' },
// ]);

export default function OutlinedChips() {
    const classes = useStyles();

    // const handleDeletechip = chipToDelete => () => {
    //     setChipData(chips => chips.filter(chip => chip.key !== chipToDelete.key));
    // };

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
            <Typography className={classes.chipss}>Chips -----------------------------></Typography>
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
