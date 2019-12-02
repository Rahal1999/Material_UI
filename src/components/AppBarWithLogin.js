import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MenuAppBar() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleChange = event => {
        setAuth(event.target.checked);
    };

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className={classes.root}>
            <FormGroup>
                <FormControlLabel control={<Switch checked={auth} onChange={handleChange} aria-label="LOGIN"/>}
                                  label={auth ? 'LOGOUT...' : 'LOGIN...'}/>
            </FormGroup>
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FavoriteIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        <FlightTakeoffIcon />
                        ---------- React Material-UI ----------
                        <FlightLandIcon/>
                    </Typography>
                    {auth &&(
                        <div>
                            <IconButton>
                                <AccountCircle/>
                            </IconButton>
                        </div>
                    )}
                </Toolbar>

            </AppBar>
        </div>
    );



}
