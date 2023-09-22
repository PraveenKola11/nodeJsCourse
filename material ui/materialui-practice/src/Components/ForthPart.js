
import { Box,Button,Typography,styled,Nav} from '@mui/material';
import * as React from 'react';
import "./style.css";
function ForthPart(){
    const StyledHeading = styled(Typography)(({theme}) =>({
    marginTop:'15%',
    fontFamily:'poppins, sans-serif',
     marginBottom:'20px',

        [theme.breakpoints.down('md')]:{
         fontSize:'6vw',
        }
      }))
      const StyledText = styled(Typography)(({theme}) =>({
        marginTop:'15%',
    
            [theme.breakpoints.down('md')]:{
           marginBottom:'20px',
          
            }
          }))
    return(
<Box sx={{textAlign:'center'}}>
        
    <StyledHeading  variant ="h3">  study Anywhere in the World</StyledHeading>
    < StyledText variant ="p" sx={{color:'#6B7280'}}> 
    Giving you wing to fly accross the world
    </ StyledText>
    </Box>
    );
}
   

export default ForthPart