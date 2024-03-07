import { Container, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation } from 'swiper/modules'; 
import '../App.css'
import 'swiper/css/navigation';
import pic from '../Media/Icons.png'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function Features() {
    const matches = useMediaQuery('(min-width:1000px)');
  return (
    <div style={{marginTop:matches?'':'50px',position:'relative'}}>
        <Container sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Typography  sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold'}}>
      Why Is *Name* Needed
      </Typography>
      </Container>
<Container maxWidth='md' >
      <Swiper
      modules={[Autoplay,Navigation]} 
      centeredSlides={true}
      loop={true}
      autoplay={{
       delay: 5000,
       disableOnInteraction: false,
        }}
        navigation={{
            prevEl: '.custom-swiper-prev',
            nextEl: '.custom-swiper-next',
          }}
        slidesPerView={matches?3:1}
        spaceBetween={30}
        style={{paddingBottom:'50px',paddingTop:'55px',paddingLeft:'10px',paddingRight:'10px' }}
      >
        <SwiperSlide>
        <div class="card-container">
            <Stack gap={1} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <img  src={pic} alt="user" style={{width:'80px',height:'80px'}}/><br/>
        <Typography sx={{color:'#7B3AE2',fontSize:'15px'}}>
        Feature 1
        </Typography>
	<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </p>
    </Stack>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card-container">
            <Stack gap={1} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <img  src={pic} alt="user" style={{width:'80px',height:'80px'}}/><br/>
        <Typography sx={{color:'#7B3AE2',fontSize:'15px'}}>
        Feature 2
        </Typography>
	<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </p>
    </Stack>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="card-container">
            <Stack gap={1} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <img  src={pic} alt="user" style={{width:'80px',height:'80px'}}/><br/>
        <Typography sx={{color:'#7B3AE2',fontSize:'15px'}}>
        Feature 3
        </Typography>
	<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </p>
    </Stack>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card-container">
            <Stack gap={1} sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <img  src={pic} alt="user" style={{width:'80px',height:'80px'}}/><br/>
        <Typography sx={{color:'#7B3AE2',fontSize:'15px'}}>
        Feature 4
        </Typography>
	<p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </p>
    </Stack>
</div>
        </SwiperSlide>
        </Swiper>
        </Container>


        {matches && <><div className="custom-swiper-prev">
        <ArrowLeftIcon
          style={{
            color: '#7B3AE2',
            fontSize: '70px',
            position: 'absolute',
            top: '50%',
            left: '40px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div>
      <div className="custom-swiper-next">
        <ArrowRightIcon
          style={{
            color: '#7B3AE2',
            fontSize: '70px',
            position: 'absolute',
            top: '50%',
            right: '40px',
            zIndex: '1',
            cursor: 'pointer',
          }}
        />
      </div></>}
    </div>
  )
}
