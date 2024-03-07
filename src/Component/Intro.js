import React from 'react'
import { Container, Stack, Typography, useMediaQuery } from '@mui/material'
import pic from '../Media/Group 9756.png'

export default function Intro() {
    const matches = useMediaQuery('(min-width:500px)');

  return (
    <div style={{marginTop:matches?'150px':'50px'}}>
        <Stack direction='row' sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
            <Container maxWidth='xs'>
                <Typography sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold'}}>
                The Best AI Powered Tool For 
                Job Interviews
                </Typography>
                <Typography sx={{color:'#6A6A6A',fontSize:'20px'}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                </Typography>
            </Container>

            <img src={pic} style={{height:'300px' ,width:matches?'':'300px', objectFit:matches?'':'contain'}}/>
        </Stack>
    </div>
  )
}
