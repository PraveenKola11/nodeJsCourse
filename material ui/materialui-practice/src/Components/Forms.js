import * as React from 'react'
import { Box, Typography, TextField, Button,styled} from '@mui/material'
import {useForm} from 'react-hook-form'
import {nav} from '@mui/material'


function Forms() {


    const {handleSubmit, register} = useForm()


    const onSubmit = (formData) => {
        console.log(formData)
    }
    
        const MainBox= styled(Box)(({theme}) =>({ 
            display:'flex',
          [theme.breakpoints.down('md')]:{
           flexDirection:'column-reverse',
           width:'100%'
          }
      }))
      const ChildBox= styled(Box)(({theme}) =>({ 
        width:'60%',
        height:'90vh',
        marginLeft:'70px',
      [theme.breakpoints.down('md')]:{
          width:'auto', 
       marginLeft:'0px',
      
      }
  }))
  const TextTypography= styled(Typography)(({theme}) =>({ 
    color:'#D3264C',
    fontWeight:'bold',
    marginBottom:'25px',
    display:'flex',
  [theme.breakpoints.down('md')]:{
      width:'100%',
      display:'flex',
       justifyContent:'center',
       alignItems:'center',
      
      
  }
}))
const HeadingTypography= styled(Typography)(({theme}) =>({ 
    fontFamily:'san-sarif,poppins',
    fontSize:'40px',
  [theme.breakpoints.down('md')]:{
   fontSize:'6vw',
   display:'flex',
   flexDirection:'column',
   alignItems:'center',
   textAlign:'center'
  
  
  }
}))
const FormStack= styled(Typography)(({theme}) =>({ 
    marginBottom:'40px',
    marginTop:'50px',
   display:'flex',
   gap:'30px',
  [theme.breakpoints.down('md')]:{
  display:'flex',
  flexDirection:'column',
  gap:'50px',
 alignItems:'center',
  
  
  }
}))
const ImageBox= styled(Box)(({theme}) =>({ 
    width:'40%',
    height:'90vh',
    display:'flex',
    alignItems:'center',
  [theme.breakpoints.down('md')]:{
   width:'auto',
   
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
  marginTop:'200px',
  }
}))
const ButBox= styled(Box)(({theme}) =>({ 
    display:'flex',
    flexDirection:'row',
  [theme.breakpoints.down('md')]:{
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  
  }
}))




  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <MainBox>
            <ChildBox>
          <TextTypography varient='p' gutterBottom='40px'> Get in Touch</TextTypography>
          <HeadingTypography varient='h2'>Work anywhere <br></br>in the world</HeadingTypography>
                <FormStack   direction='row' spacing={3}>
                <TextField label='Name' sx={{height:'35px',width:'47%',
            '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },
            }}
            {...register("name")}   
                />
                <TextField label='E-mail ID(Optional)*'  sx={{height:'35px',width:'47%',backgroundColor:'#f5f5f5', '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },}}  {...register("email")}/>
                </FormStack>
                <FormStack direction='row' spacing={3} sx={{marginBottom:'40px'}}>
                <TextField label='Mobile Number *'  sx={{height:'35px',width:'47%',backgroundColor:'#f5f5f5', '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },}}  {...register("mobile")}/>
                <TextField label='What do you want study?'  sx={{height:'35px',width:'47%',backgroundColor:'#f5f5f5', '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },}}{...register('want to study')}/>
                </FormStack>
                <FormStack direction='row' spacing={3}>
                <TextField label='Country Intersted' sx={{height:'35px',width:'47%',backgroundColor:'#f5f5f5', '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },}}{...register('cuntry intersted')}/>
                <TextField label='Prefferd Field Of Study'  sx={{height:'35px',width:'47%',backgroundColor:'red', '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
                backgroundColor: '#F3F4F6'
            },
            "& fieldset": { border: 'none' },}}{...register('prefferd Field of study')}/>
                </FormStack>
                <ButBox>
                <Button color="warning" variant="contained" sx={{ height:'45px', width:'210px',borderRadius:'30px',backgroundColor:'#f50057',textAlign:'center', marginTop:'40px',textTransform:'none', boxShadow:'6px 6px  9px #F1BBC7',}} >Get a Call Back</Button>
                </ButBox>
           </ChildBox>
             <ImageBox >
             <img src="landing-rocket.png"  style={{height:'70%',width:'90%'}}/>
               </ImageBox>
      </MainBox>

      </form>

  );
}

export default Forms
