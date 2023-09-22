import { Box, Button, Typography ,styled} from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


function SecondPart() {
    const StyledTextBox = styled(Box)(({theme}) =>({ 
        textAlign: 'center',
        marginTop:'150px',
        fontFamily:'poppins, sans-serif',
        [theme.breakpoints.down('md')]:{ 
            textAlign:'center',
            marginTop:'100px'
        }
         }))
         const StyledText = styled(Typography)(({theme}) =>({ 
           
            fontFamily:'poppins, sans-serif',
            [theme.breakpoints.down('md')]:{ 
               fontSize:'6vw'
            }
             }))
      
    return (
        
        <StyledTextBox>
        <StyledText variant="h3" >
               Join free Live Webinars on
        </StyledText>
        </StyledTextBox>
      
    );  
}

export default SecondPart
