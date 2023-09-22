import { Box,Button,Grid} from '@mui/material';  
import * as React from 'react';
import "./style.css"

import StyledCards from './StyledCards';



function ThardPart(){

  
    return (
    <div> 

<Grid container spasing={3}>
  <Grid item xs={12}  sm={6} md={3}  sx={{display:'flex',justifyContent:'center'}}>
  <StyledCards image= "countries.png" text =  'Trending countries' />
  </Grid>
  <Grid item xs={12} sm={6} md={3}  sx={{display:'flex',justifyContent:'center'}} >
  <StyledCards image= "areas-of-study.png" text =  'Trending Universities' /> 
  </Grid>
  <Grid item xs={12} sm={6} md={3} sx={{display:'flex',justifyContent:'center'}} >
  <StyledCards image= "languages.png" text =  'Trending languages' />
   
  </Grid>
  <Grid item xs={12}  sm={6} md={3} sx={{display:'flex',justifyContent:'center'}}  >
  <StyledCards image= "120.png" text =  'Trending Exams' />
  </Grid>
</Grid>
   
     <Box sx={{display: 'flex', justifyContent:'center'}}>
       <Button color="warning" variant="contained"  style={{height:'45px',width:'170px',borderRadius:'30px',backgroundColor:'#f50057',marginTop:100,textTransform:'none', boxShadow:'6px 6px  9px #F1BBC7',}}>Join Now</Button>
     </Box>
     </div>
    );
  }
  export default ThardPart
