import './App.css';
import Carlist from './components/Carlist';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist/>
    </div>
  );
}

export default App;
