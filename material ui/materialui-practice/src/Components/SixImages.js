import { Box,Button,Grid } from '@mui/material';
import * as React from 'react';
import "./style.css"
import StudyImg from './StudyImg';

function SixImages(){
 
    return (
<div>
<Grid container spasing={3} sx={{marginTop:'75px'}}>
  <Grid item xs={6}  sm={6} md={4}  sx={{display:'flex',justifyContent:'center',}}>
  <StudyImg image= "evaluation.png" text = 'Profile evalution in 24 Hours'sx={{color:'#374151'}}/>
  </Grid>
  <Grid item xs={6} sm={6} md={4}  sx={{display:'flex',justifyContent:'center'}} >
  <StudyImg image= "expert.png" text = '1 on 1 expert Counciling' sx={{color:'#374151'}}/> 
  </Grid>
  <Grid item xs={6} sm={6} md={4} sx={{display:'flex',justifyContent:'center'}} >
  <StudyImg image= "find.png" text ='Find the Best Universities for you'sx={{color:'#374151'}}/>
   </Grid>
  <Grid item xs={6}  sm={6} md={4} sx={{display:'flex',justifyContent:'center'}}  >
  <StudyImg image="scholarship.png" text = 'Scholorship Assistance'sx={{color:'#374151'}} />
  </Grid>
  <Grid item xs={6}  sm={6} md={4} sx={{display:'flex',justifyContent:'center'}}  >
  <StudyImg image= "financial.png" text = 'Expert Financial Guidance'sx={{color:'#374151'}}/> 
  </Grid>
  <Grid item xs={6}  sm={6} md={4} sx={{display:'flex',justifyContent:'center'}}  >
  <StudyImg image= "admission.png" text ='Post admission Visa Assistance'sx={{color:'#374151'}}/>
  </Grid>
</Grid> 
   
     
     <Box sx={{display: 'flex', justifyContent:'center'}}>
       <Button color="warning" variant="contained"  style={{height:'45px',width:'250px',borderRadius:'30px',backgroundColor:'#f50057',marginTop:100,textTransform:'none', boxShadow:'6px 6px  9px #F1BBC7',}}>Book Free 30 Minutes Call</Button>
     </Box>
     </div>
    );
  }
  export default SixImages
