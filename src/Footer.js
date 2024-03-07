import { Box, Container, Link, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
// import logo from './Media/Group 371.png'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const matches = useMediaQuery('(min-width:960px)')
    const navigate = useNavigate()
  return (
    <>
    <div style={{height:matches?'80px':'250px',position:'relative'
    ,display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center',backgroundImage:' linear-gradient(to right, #7B3AE2, #6CD6A9)'}}>
      <div style={{position:"absolute",bottom:'0px'}}>
              <Box sx={{padding:'0px',marginTop:'10px'}} >
      <Stack direction={matches?'row' : 'column'} gap={matches?10:2} sx={{marginBottom:'22px'}}>
   {/* <img src={logo} style={{height:'50px',width:'80px',objectFit:matches?'contain':'contain'}}/> */}
              <Typography sx={{color:'white',fontSize:'14px',mt:'10px'}}>CopyRight2023, All Rights Reserved</Typography>
              <Typography sx={{color:'white ' ,fontSize:'14px',mt:'10px'}}>
              <Link  onClick={()=>{navigate('/PrivacyPolicy')}}
              style={{color:'white' ,fontSize:'14px', textDecoration: 'none',cursor:'pointer',
               borderBottom: '1px solid white' ,marginTop:'10px'}} >Privacy Policy</Link>
              </Typography>
              <Typography sx={{color:'white ' ,fontSize:'14px',mt:'10px'}}>
              <Link  onClick={()=>{navigate('/PrivacyPolicy')}}
              style={{color:'white' ,fontSize:'14px', textDecoration: 'none',cursor:'pointer',
               borderBottom: '1px solid white' ,marginTop:'10px'}} >Terms & Conditions</Link>
              </Typography>
              <Typography sx={{color:'white ' ,fontSize:'14px',mt:'10px'}}>
              <Link  onClick={()=>{navigate('/PrivacyPolicy')}}
              style={{color:'white' ,fontSize:'14px', textDecoration: 'none',cursor:'pointer',
               borderBottom: '1px solid white' ,marginTop:'10px'}} >Refund Policy</Link>
              </Typography>
              <Typography sx={{color:'white ' ,fontSize:'14px',mt:'10px'}}>Powered By {" "}
                <Link href='https://smartedge.me' style={{color:'white' ,marginTop:'10px',
                fontSize:'14px', textDecoration: 'none',fontWeight:'bold'}} >SmartEdge</Link>
              </Typography>
      </Stack>
      </Box>
      </div>
    </div>
    </>
  )
}
