import React, { useState } from 'react'
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Container, Stack } from '@mui/material';
import pic from '../Media/faqs.png'
import db from '../DbFile.json'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Faqs() {
    const[questions,setQuestions]=useState(db.SMarket_Q)
    const toggleQuestion = (index) => {
        const newQuestions = [...questions];
        newQuestions[index].isOpen = !newQuestions[index].isOpen;
        setQuestions(newQuestions);
      };
     
  return (
    <div style={{marginTop:'90px',display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
       <Container sx={{ display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
      <Typography  sx={{color:'#7B3AE2',fontSize:'30px',fontWeight:'bold'}}>
      FAQs
      </Typography>
      </Container>
        <Container>
      <Stack direction='row' sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
        <Stack gap={1}>
        {questions.map((q, index) => (
      <Accordion
        elevation={0}
        expanded={q.isOpen}
        onChange={() => toggleQuestion(index)}
       
      >
        <AccordionSummary  sx={{
          bgcolor: '#6CD6A9',
          borderRadius:'20px',
          '&:before': { display: 'none' },
          padding: '20px',  
          width:'600px'     
        }}>
          {q.isOpen ? (
            <RemoveIcon sx={{ color: 'white', marginRight: '20px', marginTop: '5px' }} />
          ) : (
            <AddIcon sx={{ color: 'white', marginRight: '20px', marginTop: '5px' }} />
          )}
          <Typography sx={{ color: 'white', fontSize: '15px', fontWeight: 'bold' }}>
            {q.Question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border:'1px solid #7B3AE2'}}>
          <Typography sx={{ color: '#7D4896', fontSize: '15px' }}>
            {q.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
  ))}
</Stack>
        <img src={pic} style={{width:'500px',height:'500px'}} />
      </Stack>
      </Container>

    </div>
  )
}
