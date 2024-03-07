import { Button, Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import pic from '../Media/service.png'

export default function Services() {
    const matches = useMediaQuery('(min-width:800px)');

  return (
    <div style={{marginTop:'100px'}}>
      <Stack direction='row' >
       {matches && <img src={pic} style={{height:'500px',objectFit:'cover'}}/>}

        <Container maxWidth='sm' sx={{marginTop:matches?'100px':''}}>
        <Typography sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold'}}>
        Our Service
                </Typography>
                <Typography sx={{color:'#6A6A6A',fontSize:'15px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>

                <Button  sx={{color:'white',bgcolor:'#6CD6A9','&:hover':{color:'white',bgcolor:'#6CD6A9'}
            ,padding:'5px 30px 5px 30px', mt:'30px', fontSize:'14px'}} >BOOK A DEMO</Button>
        </Container>
      </Stack>
    </div>
  )
}
