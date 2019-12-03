
import Snackbar from '@material-ui/core/Snackbar';
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {red} from "@material-ui/core/colors";
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';

function GrowTransition(props) {
    return <Grow {...props} />;
}


const useStyles = makeStyles(theme => ({
    root: {

        '& > *': {
            margin: theme.spacing(2),
            width: 200,
            marginRight: theme.spacing(5),

        },


    },
}));





export default function BasicTextFields() {

//snackbar
    const [state, setState] = React.useState({
        open: false,
        Transition: Fade,
    });

    const [open, setOpen] = React.useState(false);

    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);

    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    const handleClicksnack = Transition => () => {
        setState({
            open: true,
            Transition,
        });
    };

    const handleClosesnack = () => {
        setState({
            ...state,
            open: false,
        });
    };

    return (
        <div >





        <form className={classes.root} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Standard" variant="standard" />
            <TextField id="outlined-basic2" label="Outlined" variant="outlined" />
            <TextField label="Filled" variant="filled"/>


        </form >

            <div className={classes.root}>


            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            Dialog BTN
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>--- Material UI Dialog TEST ---</DialogTitle>

                    <DialogContent >

                        <DialogContentText >
                            dadasdsadsad dfdcdscd dsds sdcsd cds d sd vsd sd vss sd sd cd ef  f fuhd sfh o fsd f
                        </DialogContentText>
                    </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color="primary">Close</Button>
                    <Button onClick={handleClose} color="secondary">Agree</Button>


                </DialogActions>

            </Dialog>

            <Button onClick={handleClicksnack(GrowTransition)}>Grow Transition</Button>
            <Snackbar
                className={classes.root}
                open={state.open}
                onClose={handleClosesnack}
                TransitionComponent={state.Transition}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Hello!!!</span>}
            />

            </div>

            <FormControl component="fieldset">
                <RadioGroup >

                    <FormControlLabel
                        value="start"
                        control={<Radio color="primary" />}
                        label="Start"
                        labelPlacement="start"
                    />

                    <FormControlLabel
                        control={<Radio color={"secondary"}/>}
                        label="End"
                        value={"end"}
                        labelPlacement={"end"}
                    />

                    <FormControlLabel
                        control={<Radio color={"default"}/>}
                        label="Top"
                        labelPlacement={"top"}
                        value={"top"}
                    />
                </RadioGroup>
            </FormControl>


        </div>

    );
}
