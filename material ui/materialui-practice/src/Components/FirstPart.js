import { Box, Button, Typography,Divider, } from '@mui/material'
import React from 'react'
import "./style.css"
import {styled} from '@mui/material/styles'
import { red } from '@mui/material/colors';
import { wrap } from 'yargs';
function FirstPart() {

  const StyledBox = styled(Box)(({theme}) => ({
    display:'flex',
    height:'90vh',
    width:'100%',
    alignItems:'center',

    [theme.breakpoints.down('md')]:{
      marginTop: '80px',
      flexDirection: 'column-reverse'
    }

  }))
  const StyledButton = styled(Button)(({theme}) =>({
    height:'45px',
    width:'250px',
    borderRadius:'30px',
    backgroundColor:'#f50057',
    marginTop:'40px',
    textTransform: 'none',
    boxShadow:'6px 6px  9px #F1BBC7',
  [theme.breakpoints.down('md')]:{
width:'190px',
fontSize:'10px',
whiteSpace: 'nowrap',
  }

}))
const StyledTextBox = styled(Box)(({theme}) =>({ 
  marginLeft:'70px',
  width:'50%',
  flexGrow:7,
  [theme.breakpoints.down('md')]:{
    marginLeft:'0px',
   
    width:'100%',
    fontSize:'15px'
  }
}))
const StyledHeding = styled(Typography)(({theme}) =>({ 
  fontFamily:'poppins, sans-serif',
  [theme.breakpoints.down('md')]:{
    fontSize:'6vw',
    textAlign:'center'
  }
}))
const StyledImg = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]:{
    display:'flex',
    justifyContent:'center',
    marginLeft:'0px'
  }

}))
const ImgCenter = styled(Box)(({theme}) =>({
  [theme.breakpoints.down('md')]:{
    display:'flex',
    justifyContent:'center'
  }
}))
const Services = styled(Box)(({theme}) =>({
  display:'flex',
   gap:'20px',
   marginTop:'40px',
  [theme.breakpoints.down('md')]:{
    width:'100%',
    display:'flex',
      textAlign:'center',
      justifyContent:'center',
      gap:'7px',
      paddingLeft:'20px',
      paddingRight:'20px',
      
  }
}))
  return (
    
      <StyledBox>
        <StyledTextBox>
        <StyledHeding variant = "h3" >Education is all about 
        <br></br>travelling.
         <br></br> World is one.</StyledHeding>
          <Services>
         <Typography variant="p" sx={{color:'#6B7280'}} >
         22+ Countries
         </Typography>
         <Divider sx={{height:'25px',width:2,backgroundColor:'red'}} orientation="vertical"/>
         <Typography variant="p" sx={{color:'#6B7280'}} >
         personalized service
         </Typography>
        <Divider sx={{height:'25px',width:2,backgroundColor:'red'}} orientation="vertical"/>
          <Typography variant="p" sx={{color:'#6B7280'}}>
             Top Notch Consultants
          </Typography>
          </Services>
          <ImgCenter>
          <StyledButton color="warning" variant="contained">Book Free Counselling</StyledButton>
          </ImgCenter>

          </StyledTextBox>
          <StyledImg sx={{flexGrow:7}}>
            
          <img src = "banner-hero (1).png" alt = "image" style={{ width:"80%",height:"100%"}} />
          </StyledImg>
      </StyledBox>
       
  );
}

export default FirstPart
