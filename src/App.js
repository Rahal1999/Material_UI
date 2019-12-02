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

        <Typography variant='display1' align='center' gutterBottom>        Exercises      </Typography>

        <Box component="span" m={10}>
            <Button>sadsda</Button>
        </Box>



        <OutlinedChips/>

        <Test/>

        <BottonNavigationBar/>


        <HorizontalLinearStepper/>

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
