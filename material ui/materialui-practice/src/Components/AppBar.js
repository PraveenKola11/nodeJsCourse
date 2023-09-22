import * as React from 'react';
import{ AppBar as MuiAppBar} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css"
import {styled} from '@mui/material/styles'
function AppBar() {
 
  return (
    <div>
      <Typography className= "hello"></Typography>
        <MuiAppBar position="static" iconElementLeft = {<img src='logo.png' alt="Logo"  style={{marginLeft:'70px'}} />}>
          <Toolbar sx={{backgroundColor: 'white'}}>
            
        
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'black' }}>
          
            <img src={'logo.png'} width={'120px'} height={'30px'}/> 
            </Typography>
            <Button color="inherit" sx={{color:'black' }}>Login</Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2  }}
              sx={{color:'black'}}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </MuiAppBar>
    </div>
  )
}

export default AppBar
