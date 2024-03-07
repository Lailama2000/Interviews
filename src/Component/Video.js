import React, { useRef, useState } from 'react'
import { Container, Typography } from '@mui/material'
import vid from '../Media/video.mp4'
import pic from '../Media/Group 9755.png'

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying(!isPlaying);
      };
  return (
    <div style={{marginTop:'90px'}}>
       <Container sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Typography  sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold'}}>
      So Simple. So Efficient.
      </Typography>
      </Container>
        <div style={{position:'relative',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}> 
       <video ref={videoRef} src={vid} style={{height:'',width:'75%',borderRadius:'50px',marginTop:'40px'}} />
       {isPlaying ? '' : <img src={pic}  onClick={handlePlayPause} style={{height:'50px',position:'absolute'
       ,top:'50%',right:'45%',cursor:'pointer'}}/>}
    </div>
    </div>
  )
}
