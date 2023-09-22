import { Box, CardMedia, CardContent, Typography,Button} from '@mui/material'
import React from 'react'

function StudyImg({image,text}) {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <CardMedia 
      sx={{height:'90px',width:'90px'}}
      image={image}
    />
    <CardContent>
      <Typography component="div" sx={{textAlign:'center',justifyContent:'space-evenly'}}>
        {text}
      </Typography>
     
    </CardContent>
   </Box>
  
  );
}
export default StudyImg