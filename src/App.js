import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from "./components/Test";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import NavBar from "./components/NavBar";
import CoursesList from "./components/CourseList";
import BottonNavigationBar from "./components/BottonNavigationBar";
import HorizontalLinearStepper from "./components/Stepper";
import CustomizedSlider from "./components/Sliderr";
import MenuAppBar from "./components/AppBarWithLogin";
import OutlinedChips from "./components/Chipp";
import BasicTextFields from "./components/Formm";
import LinearBuffer from "./components/LinearBufferr";
import ExpansionPanels from "./components/ExpansionPaneles";
import OpenIconSpeedDial from "./components/SpeedDiall";

import { ThemeProvider, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
        background: theme.background,
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}));


function DeepChild() {
    const classes = useStyles();

    return (
        <button type="button" className={classes.root}>
            Theming
        </button>
    );
}


const themeInstance = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};




function App() {
  return (
    <div className="App">

      <header >
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
      </header>
        <body>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </body>



      {/*<Test/>*/}

      {/*<Pricing/>*/}


        {/*<NavBar/>*/}


        <MenuAppBar/>
        <ExpansionPanels/>


<br/>
        <Tooltip title="hey hey!!!" enterDelay={500} leaveDelay={300}>
        <Button  variant="contained" color="primary" font-color='red'>

            Hello World
        </Button>
        </Tooltip>
        <br/>

        <Typography variant='display1' align='center' gutterBottom>        Typography TEXT      </Typography>

        <Box component="span" m={10}>
            <Button>Test Box </Button>
        </Box>

        <ThemeProvider theme={themeInstance}>
            <DeepChild />
        </ThemeProvider>



        <OutlinedChips/>

        <Test/>


        <BottonNavigationBar/>


        <HorizontalLinearStepper/>
        <OpenIconSpeedDial/>
        <CustomizedSlider/>

<BasicTextFields/>


        <LinearBuffer/>


      </div>


  );
}

export default App;




{/*<img src={logo} className="App-logo" alt="logo" />*/}
{/*<p>*/}
{/*Edit <code>src/App.js</code> and save to reload.*/}
{/*</p>*/}
{/*<a*/}
{/*className="App-link"*/}
{/*href="https://reactjs.org"*/}
{/*target="_blank"*/}
{/*rel="noopener noreferrer"*/}
{/*>*/}
{/*Learn React*/}
{/*</a>*/}
