import React from 'react'
import bg from '../Media/reviews.png'
import { Container, Stack, Typography, useMediaQuery } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Pagination } from 'swiper/modules'; 
import '../App.css'
import 'swiper/css/pagination';
import pic from '../Media/Ellipse 137.png'
import q1 from '../Media/qoute.png'
import q2 from '../Media/qoute2.png'

export default function Reviews() {
    const matches = useMediaQuery('(min-width:800px)');

  return (
    <div style={{backgroundImage:`url(${bg})` ,backgroundSize:'cover',backgroundPosition:'center'
    ,marginTop:'60px',position:'relative',minHeight:'600px'}}>
      <Container sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Typography  sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold',mt:'30px'}}>
      What Has Been Said About *NAME*
      </Typography>
      </Container>
      <Container maxWidth='md'>
      <Swiper
      modules={[Autoplay,Pagination]} 
      centeredSlides={true}
      loop={true}
      autoplay={{
       delay: 5000,
       disableOnInteraction: false,
        }}
        slidesPerView={matches?3:1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        style={{paddingBottom:'50px',paddingTop:'55px',paddingLeft:'10px',paddingRight:'10px' }}
        className="custom-swiper"
      >
        <SwiperSlide >
        <div class="Reviews-card">
        <img src={q1} style={{position:'absolute',top:'5px',left:'1px',width:'70px'}}/>
        <img src={q2} style={{position:'absolute',bottom:'5px',right:'1px',width:'70px'}}/>
        <Stack sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
	<img  src={pic} alt="user" style={{borderRadius:'100%',width:'100px',height:'100px'}}/><br/>
	<p>“Lorem ipsum dolor sit amet, consetetur.</p>
	<p style={{color:'#7B3AE2',fontWeight:'normal'}}>Jesika Lynn - 2/5/2024</p>
    </Stack>
</div>
        </SwiperSlide>
        <SwiperSlide >
        <div class="Reviews-card">
        <img src={q1} style={{position:'absolute',top:'5px',left:'1px',width:'70px'}}/>
        <img src={q2} style={{position:'absolute',bottom:'5px',right:'1px',width:'70px'}}/>
        <Stack sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
	<img  src={pic} alt="user" style={{borderRadius:'100%',width:'100px',height:'100px'}}/><br/>
	<p>“Lorem ipsum dolor sit amet, consetetur.</p>
	<p style={{color:'#7B3AE2',fontWeight:'normal'}}>Jesika Lynn - 2/5/2024</p>
    </Stack>
</div>
        </SwiperSlide>
        <SwiperSlide >
        <div class="Reviews-card">
        <img src={q1} style={{position:'absolute',top:'5px',left:'1px',width:'70px'}}/>
        <img src={q2} style={{position:'absolute',bottom:'5px',right:'1px',width:'70px'}}/>
        <Stack sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
	<img  src={pic} alt="user" style={{borderRadius:'100%',width:'100px',height:'100px'}}/><br/>
	<p>“Lorem ipsum dolor sit amet, consetetur.</p>
	<p style={{color:'#7B3AE2',fontWeight:'normal'}}>Jesika Lynn - 2/5/2024</p>
    </Stack>
</div>
        </SwiperSlide>
        <SwiperSlide >
        <div class="Reviews-card">
        <img src={q1} style={{position:'absolute',top:'5px',left:'1px',width:'70px'}}/>
        <img src={q2} style={{position:'absolute',bottom:'5px',right:'1px',width:'70px'}}/>
        <Stack sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
	<img  src={pic} alt="user" style={{borderRadius:'100%',width:'100px',height:'100px'}}/><br/>
	<p>“Lorem ipsum dolor sit amet, consetetur.</p>
	<p style={{color:'#7B3AE2',fontWeight:'normal'}}>Jesika Lynn - 2/5/2024</p>
    </Stack>
</div>
        </SwiperSlide>
      </Swiper>
      </Container>
    </div>
  )
}
