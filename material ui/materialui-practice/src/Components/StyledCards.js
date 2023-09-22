import { Card, CardMedia, CardContent, Typography,Button} from '@mui/material'
import React from 'react'

function StyledCards({image, text}) {
  return (
    <Card sx={{ width: '250px',  marginTop:'100px'}}>
    <CardMedia
      sx={{ height: 200}}
      image={image}
      
    />
    <CardContent>
      <Typography gutterBottom component="div" style={{textAlign:"center"}}>
        {text}
      </Typography>
     
    </CardContent>
   
  </Card>
  )
}

export default StyledCards
