import { ViewColumnOutlined } from '@mui/icons-material'
import { Box, Divider, Typography,Button,styled ,image} from '@mui/material'
import React from 'react'

function Scholarship() {
  const StyledBox= styled(Box)(({theme}) =>({ 
    display:'flex',
    width:'100%',
    height:'90vh',
    [theme.breakpoints.down('md')]:{
     display:'flex',
     flexDirection:'column-reverse',
     justifyContent:'center'
    }
}))
const StyledimgBox= styled(Box)(({theme}) =>({ 
  width:'50%',
  height:'90vh',
  marginTop:'70px',
  [theme.breakpoints.down('md')]:{
   height:'auto',
   width:'auto',
   display:'flex',
   justifyContent:'center',
  margimTop:'0px',
  }
}))
const StyledTextPara= styled(Typography)(({theme}) =>({ 
  color:'#D3264C',
  fontWeight:'bold',
  marginTop:'50px',
  [theme.breakpoints.down('md')]:{
  textAlign:'center',

  }
}))
const StyledHeading= styled(Typography)(({theme}) =>({ 
  fontFamily:'poppins, sans-serif',
  fontSize:'40px',
  [theme.breakpoints.down('md')]:{
  textAlign:'center',
  fontSize:'6vw',
  paddingLeft:'20px',
  paddingRight:'20px',
  }
}))
const StyledContent= styled(Typography)(({theme}) =>({ 
 
  fontSize:'15px',
  [theme.breakpoints.down('md')]:{
  textAlign:'center',
  paddingLeft:'20px',
  paddingRight:'20px',
  }
}))
const Scholarship= styled(Box)(({theme}) =>({ 
  display:'flex',
  fontFamily:'poppins,sans-serif',
  gap:7,
  marginTop:'25px',
  fontWeight:'bold',
  marginBottom:'30px',
 
  [theme.breakpoints.down('md')]:{
 
 gap:'6',
 marginTop:'25px',
 display:'flex',
 textAlign:'center',
 justifyContent:'center'

  }
}))
const MainBox= styled(Box)(({theme}) =>({ 
  height:'70vh',
  width:'50%',
  display:'flex',
  marginTop:'50px',
  flexDirection:'column',
  justifyContent:'center',
  marginLeft:'70px',
  gap:8,
 
  [theme.breakpoints.down('md')]:{
    width:'100%',
   
  textAlign:'center',
 marginLeft:'0px',

 justifyContent:'center',
 
  }
}))
  return (
    <StyledBox>
        <MainBox >
            <StyledTextPara varient="p" >Scholarship</StyledTextPara>
            < StyledHeading varient="h3" >Best Scholarship Opportunities</ StyledHeading>
            <StyledContent varient="p" sx={{color:'#6B7280'}}>The ULTIMATE GUIDE to Scholarships. What kinds of scholarships are available? Is it<br></br> possible to get 100% scholarships ?</StyledContent>
           <Scholarship >
             <Box>
             <Typography varient="h2" sx={{fontWeight:'bold',fontSize:'18px'}}>$ 250,000</Typography>
             <Typography varient="p" sx={{color:'#6B7280'}}>Worth of scholarships</Typography>
             </Box>
             <Divider sx={{height:'40px',width:3,orientation:'vertical',backgroundColor:'red',margin:'10px'}}/>
             <Box>
             <Typography varient="h2" sx={{fontWeight:'bold',fontSize:'18px'}}>Upto 100%</Typography>
             <Typography varient="p" sx={{color:'#6B7280'}}>Tuition fee coverage</Typography>
             </Box>
             <Divider sx={{height:'40px',width:3,orientation:'vertical',backgroundColor:'red',display:'flex',margin:'10px'}}/>
             <Box>
             <Typography varient="h2" sx={{fontWeight:'bold',fontSize:'18px'}}>5000+</Typography>
             <Typography varient="p" sx={{color:'#6B7280'}}>Courses Covered</Typography>
             </Box>
            </Scholarship>
            <Box>
            <Button color="warning" variant="contained"  style={{height:'45px',width:'210px',borderRadius:'30px',backgroundColor:'#f50057',textAlign:'center',textTransform: 'none', boxShadow:'6px 6px  9px #F1BBC7',}}>Check Your Eligibility</Button>
            </Box>
        </MainBox>
        <StyledimgBox>
        <img src="guy-at-tree.png"  style={{height:'70%',width:'80%'}}/>
        </StyledimgBox>

    </StyledBox>
  );
}
export default Scholarship
