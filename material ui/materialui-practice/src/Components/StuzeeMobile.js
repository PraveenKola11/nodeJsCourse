import React, { Component, }  from 'react';
import { Box,Button, Typography,styled } from '@mui/material';  


import "./style.css"
function StuzeeMobile(){
    const StyledBox = styled(Box)(({theme}) =>({ 
        width:'100%',
        height:'80vh',
        display:'flex',
        alignItems:'center',
        [theme.breakpoints.down('md')]:{
           display:'flex',
           flexDirection:'column',
           height:'auto',
           width:'auto',  
        }
         }))
         const StyledBoxImg = styled(Box)(({theme}) =>({ 
            display:'flex',
            width:'50%',
            height:'50%',
            justifyContent:'space-around',
            [theme.breakpoints.down('md')]:{
                display:'flex',
                width:'70%',
                height:'90%',
                justifyContent:'space-around',
              marginTop:'100px'
            }
        }))
        const StyledHeading= styled(Typography)(({theme}) =>({ 
            fontFamily:'poppins, sans-serif',
            fontSize:'40px',
            [theme.breakpoints.down('md')]:{
               fontSize:'6vw',
               textAlign:'center'
            }
        }))
        const StyledPara= styled(Typography)(({theme}) =>({ 
            color:'#D3264C',
            display:'flex',
            marginBottom:'18px',
            fontFamily:'muliesh',
            fontSize:'17px',
            mt:'300px',
            fontWeight:'bold',
            marginTop:'300px',
            
            [theme.breakpoints.down('md')]:{
               textSize:'3vw',
              width:'auto',
             justifyContent:'center',
               textAlign:'center',
               marginTop:'100px',
               marginLeft:'auto',
               marginBottom:'13px',
            }
        }))
        const StyledPlaystore= styled(Box)(({theme}) =>({ 
            marginTop:'30px',
            gap:'20px',
            display:'flex',
            [theme.breakpoints.down('md')]:{
               display:'flex',
               marginTop:'50px',
                justifyContent:'center',
            }
        }))
    return(
        
< StyledBox >
    <StyledBoxImg >
    <img src="Group 2537.png" style={{ height:'150%',width:'70%'}}/>
    </StyledBoxImg>
    
    <Box sx={{height:'90vh',width:'50%'}}>
        <StyledPara varient="p">Download Stuzee Mobile App</StyledPara>
        <Box>
        <StyledHeading varient="h3" >Abroad Education is easy with<br></br>Stuzee </StyledHeading>
        </Box>
        <StyledPlaystore >
            <img src="playstore.png"></img>
            <img src="appstore.png"></img>
        </StyledPlaystore>
         </Box>
</StyledBox>

    );
}
export default StuzeeMobile