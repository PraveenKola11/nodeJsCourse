import React from 'react'
import { Box,Button, Typography,styled } from '@mui/material'; 



import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Avatar from '@mui/material/Avatar';

function Testimonials() {
  const MainBox= styled(Box)(({theme}) =>({ 
    height:'90vh',
    display:'flex',
    width:'100%',

  [theme.breakpoints.down('md')]:{
    display:'flex',
   flexDirection:'column',
  }
  }))
    const HeadingBox= styled(Box)(({theme}) =>({ 
      fontFamily:'poppins,sans-serif',
      fontSize:'40px',
  
    [theme.breakpoints.down('md')]:{
      fontSize:'5vw',
      marginTop:'270px',
    }
    }))
    const MainHeadingBox= styled(Box)(({theme}) =>({ 
      width:'48%',
      height:'90vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
  
    [theme.breakpoints.down('md')]:{
      width:'auto',
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
    }
    }))
      const IconsBox= styled(Box)(({theme}) =>({ 
        display:'flex',
        flexDirection:'column',
        gap:'30px',
        justifyContent:'center',
       marginLeft:'27px',
      [theme.breakpoints.down('md')]:{
        display:'flex',
       marginLeft:'0px',
      flexDirection:'row-reverse',
      marginTop:'50px',
      }
      }))
      const AvatarBox= styled(Box)(({theme}) =>({ 
        display:'flex',
        paddingLeft:'30px',
        paddingTop:'20px',
     width:'100%',
      [theme.breakpoints.down('md')]:{
       display:'none',
       width:'100%'
      }
      }))
      const CardBox= styled(Box)(({theme}) =>({ 
        width:'52%',
        height:'90vh',
        display:'flex',
        alignItems:'center',
    
      [theme.breakpoints.down('md')]:{
       height:'70vh',
       width:'auto',
       justifyContent:'center',
       alignItems:'center'
      }
      }))
      const SquareBox= styled(Box)(({theme}) =>({ 
        width:'80%',
        height:'45%',
        backgroundColor:'white',
        borderRadius:'15px',
        boxShadow:'1px 1px 1px 1px #bdbdbd',
    
      [theme.breakpoints.down('md')]:{
        width:'80%',
        height:'auto',
       display:'flex',
       flexDirection:'colomn',
       justifyContent:'center',
       alignItems:'center',
       marginTop:'100px'

      }
      }))
  return (
  
   <MainBox sx={{height:'90vh',display:'flex',width:'100%'}}>
       <MainHeadingBox>
          <HeadingBox varient="h3" >Student Testimonials</HeadingBox>
         
          <IconsBox >
            <Button color="warning" variant="contained"  style={{height:'50px',width:'10px',borderRadius:'80px',backgroundColor:'#f50057',textAlign:'center'}}> <ArrowForwardIosIcon/></Button>
            
            <Button color="warning" variant="contained"  style={{height:'50px',width:'10px',borderRadius:'80px',backgroundColor:'#f50057',textAlign:'center'}}><ArrowBackIosIcon/></Button>
            </IconsBox>
        </MainHeadingBox>
      <CardBox>
        
          <SquareBox >
              <Typography sx={{paddingLeft:'30px',paddingTop:'25px',paddingRight:'20px'}}>
              My experience with Stuzee was amazing. They 
              have been very helpful, friendly and provided 
              me with all the right information and guided me
               throughout the process. Right from my applications
                to my visa, everything was done precisely without 
                any worries. They have the best mobile app in abroad
                 eduction space and the interface of the app is very
                  user friendly, all the required information can be
                   obtained in just few minutes. Stuzee provided me with excellent service.
              </Typography>
              <AvatarBox >
              <Avatar alt="Travis Howard" src="testimonial1.png" />
              <Box sx={{paddingLeft:'10px'}}>
              <Typography sx={{fontWeight:'bold',width:'100%'}}>Revoori Neha Reddy</Typography>
              <Typography sx={{fontSize:'11px',width:'100%'}}>London ,kings college </Typography>
              </Box>
              <Box sx={{paddingLeft:30}}>
              <img src="quote.png"/>
              </Box>
              </AvatarBox>
          </SquareBox>
      </CardBox>
         
    </MainBox>
  );
  
}
export default Testimonials

