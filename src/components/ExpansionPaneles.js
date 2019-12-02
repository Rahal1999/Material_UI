import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';

const useStyles = makeStyles(theme => ({
    root: {
        width: '40%',
        paddingTop:'10px',
        left:'50px',
        position: 'relative',
    },
    root2: {
        width: '40%',

        left:'730px',
        position: 'relative',
        top:'-112px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ExpansionPanels() {
    const classes = useStyles();
    return(
        <div>
            <div  className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >

                    <Typography variant={"h6"} color={"secondary"}>What is Material UI</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        React components for faster and easier web development. Build your own design system, or start with Material Design
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant={"h6"} color={"primary"}>Usage</Typography>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Material-UI components work without any additional setup, and don't pollute the global scope.
                        <br/>
                        <Typography>
                        import React from 'react';
                        </Typography>
                            <Typography>
                        import Button from '@material-ui/core/Button';

                            </Typography>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            </div>

            <div className={classes.root2}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant={"h6"} color={"secondary"}>Installation</Typography>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Install Material-UI's source files via npm. We take care of injecting the CSS needed.
                            $ npm install @material-ui/core
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant={"h6"} color={"primary"}>Premium themes</Typography>

                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Take Material-UI to the next level with premium themes from our official marketplace – all built on Material-UI.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        </div>
    );

}
