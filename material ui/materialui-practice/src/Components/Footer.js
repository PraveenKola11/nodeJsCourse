import React from 'react'
import Divider from '@mui/material/Divider';
import { Box, Typography,styled} from '@mui/material'

function Footer() {
const StyledIcon = styled(Box)(({theme}) =>({ 
    width:'42px',
    height:'42px',
    borderRadius:'50px',
    backgroundColor:'#f50057', 
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  
  }))
  const InstaIcon = styled(Box)(({theme}) =>({ 
    width:'42px',
    height:'42px',
    borderRadius:'50px',
    backgroundColor:'#f50057',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }))
  const LinkedinIcon = styled(Box)(({theme}) =>({ 
    width:'42px',
    height:'42px',
    borderRadius:'50px',
    backgroundColor:'#f50057 ',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',

  }))
  const LogoBox= styled(Box)(({theme}) =>({ 
    display:'flex',
    
    marginTop:'40px',
  [theme.breakpoints.down('md')]:{
    flexDirection:'column',
    width:'auto',
    alignItems:'center',
    justifyContent:'center',
  }
}))
const LineDivider= styled(Divider)(({theme}) =>({ 
  height:2,
  paddingLeft:'20px',
  backgroundColor:'#D3264C',
  paddingRight:'20px',
[theme.breakpoints.down('md')]:{
 marginTop:'200px',
}
}))
const FooterBox= styled(Box)(({theme}) =>({ 
  display:'flex',
[theme.breakpoints.down('md')]:{
  display:'flex',
 flexDirection:'column',
}
}))

const MiddleBox= styled(Box)(({theme}) =>({ 
  width:'18%',
[theme.breakpoints.down('md')]:{
 width:'auto',
 marginLeft:'35px',

}
}))
const MediaBox= styled(Box)(({theme}) =>({ 
  display:'flex',
  gap:'15px',
  marginTop:'20px',
[theme.breakpoints.down('md')]:{
 width:'auto',

 

}
}))
const MainSocialBox = styled(Box)(({theme}) =>({ 
  width:'37%',
 
[theme.breakpoints.down('md')]:{
 width:'auto',

 marginLeft:'35px',

}
}))
const DetailesBox = styled(Box)(({theme}) =>({ 
  marginLeft:'35px',
  margiBottom:'20px',
  width:'45%',
  
[theme.breakpoints.down('md')]:{
 width:'auto',
}
}))
const BoxLogo = styled(Box)(({theme}) =>({ 
  width:'68%',
  marginLeft:'35px',
[theme.breakpoints.down('md')]:{
  marginLeft:'0px',
 width:'auto',
 
}
}))
const ContactBox = styled(Box)(({theme}) =>({ 
  display:'flex',
   gap:'40px',
   marginBottom:'25px',
   marginTop:'30px',
[theme.breakpoints.down('md')]:{
 flexDirection:'column',
 gap:'10px',
}
}))

  return (
    <div>
        <Box>
        <LineDivider textAlign="right" ></LineDivider>
        </Box>
        <LogoBox>
            <BoxLogo>
             <img src="logo.png"/>
            </BoxLogo>
            <Box>
            <Typography varient="p" sx={{color:'#6B7280',fontSize:'15px',paddingLeft:'25px',paddingRight:'25px'}}>© All Rights reserved to Stuzee Abroad Education at 2021 </Typography>
            </Box>
         </LogoBox>
         <FooterBox>
      <DetailesBox>
          <ContactBox sx={{}} >
          <Typography varient="p"> Phone: </Typography>
          <Typography varient="p"> 8309787267</Typography>
          </ContactBox>
          <ContactBox sx={{display:'flex', gap:'40px',marginBottom:'25px'}}>
          <Typography varient="p">E-mail: </Typography>
          <Typography varient="p">hello@stuzee.com </Typography>
          </ContactBox>
            <ContactBox sx={{ display:'flex', gap:'20px',marginBottom:'25px'}}>
          <Typography varient="p">Address :</Typography>
          <Typography varient="p">Hamzek Solutions <br></br>Pvt.Ltd, Plot no.C-16, IDA,<br></br> Uppal, Hyderabad - <br></br>500039 Telangana - India</Typography>
          </ContactBox>
           </DetailesBox>
           <MiddleBox>
              
           <Typography varient='p' sx={{marginBottom:'30px'}}>Quick links</Typography>
           <Typography varient='p' sx={{marginBottom:'30px'}}>About us</Typography>
           <Typography varient='p' sx={{marginBottom:'30px'}}>Terms of Use</Typography>
           <Typography varient='p' sx={{marginBottom:'30px'}}>Privacy Policy</Typography>
           <Typography varient='p' sx={{marginBottom:'30px'}}>Cookie Policy</Typography>

           </MiddleBox>
           <MainSocialBox >
        <Typography varient="p">Mobile App Links:</Typography>
        <Box sx={{display:'flex',gap:'20px',marginTop:'15px'}}>
        <img src="playstore.png"></img>
            <img src="appstore.png"></img>
           </Box >
           <Typography varient='p' sx={{marginTop:'45px'}}>Follow us:</Typography>
           <MediaBox>
           <StyledIcon>
           <img src="faceBook.svg"></img>
                
           </StyledIcon>
           <InstaIcon>
          
           <img src="instagram.svg"></img>
          
           </InstaIcon>
           <LinkedinIcon>
          
           <img src="linkedin.svg"></img>
           </LinkedinIcon>
           </MediaBox>
          </MainSocialBox>
           </FooterBox>
      </div>
  )
}

export default Footer
