import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '../Components/AppBar';
import FirstPart from '../Components/FirstPart';        
import Grid from '@mui/material/Grid';
import SecondPart from '../Components/SecondPart';
import ThardPart from '../Components/ThardPart';
import ForthPart from '../Components/ForthPart';
import SixImages from '../Components/SixImages';
import StuzeeMobile from '../Components/StuzeeMobile';
import Scholarship from '../Components/Scholarship';
import Testimonials from '../Components/Testimonials';
import Forms from '../Components/Forms';
import Footer from '../Components/Footer';

function HomePage() {
    return (
        <Box sx={{ flexGrow: 1}}> 
            <AppBar />
            <FirstPart />
            <SecondPart />
              <ThardPart/>
              <ForthPart/>
              <SixImages />
              <StuzeeMobile/>
              <Scholarship/>
              <Testimonials/>
              <Forms/>
              <Footer/>
        </Box>
      );

}

export default HomePage
