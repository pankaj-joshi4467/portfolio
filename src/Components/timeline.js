import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import WebIcon from '@mui/icons-material/Web';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
      fontFamily: ['"Roboto Mono"', 'monospace'].join(','),
      h6 : {
        fontWeight: "bold",
      }
    },
    breakpoints: {
      values : {
        xs : 0,
        sm : 300,
        lg : 800,
      }
    }
});

export default function CustomizedTimeline() {
  return (
    <ThemeProvider theme={theme}>
    <Timeline position="alternate">
      <TimelineItem className='timelineitem' sx={{height : { sm : "210px", lg : "170px"}}}>
        <TimelineOppositeContent
          className='timelinefont'
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
          2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontSize : { sm : '15px', lg : '1.25rem'}}}>
            Udemy / MERN Stack Development
          </Typography>
          <Typography sx={{fontSize : { sm : '12px', lg : '1rem'}}}>ReactJs, Node.JS, Express.JS, MongoDB, EJS</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem'  sx={{height : { sm : "210px", lg : "170px"}}}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          AUG'2024 - SEP'2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <WebIcon />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontSize : { sm : '15px', lg : '1.25rem'}}}>
            Vilearnx Advanced Technologies / Internship
          </Typography>
          <Typography sx={{fontSize : { sm : '12px', lg : '1rem'}}}>MERN Stack Developer</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem'  sx={{height : { sm : "210px", lg : "170px"}}}>
        <TimelineOppositeContent
          className='timelinefont'
          sx={{ m: 'auto 0' }}
          variant="body2"
        >
          2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontSize : { sm : '15px', lg : '1.25rem'}}}>
            Internshala / Web Development Training 
          </Typography>
          <Typography sx={{fontSize : { sm : '12px', lg : '1rem'}}}>HTML,CSS,JavaScript,Bootstrap,ReactJS,NodeJS,MongoDB</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='timelineitem' sx={{height : { sm : "235px", lg : "170px"}}}>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          SEP'2021 - MAY'2025
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector/>
          <TimelineDot sx={{color: "#9c27b0", margin: 0, backgroundColor: "transparent", borderColor: "#9c27b0"}}>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timelinecontentbox' sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" sx={{fontSize : { sm : '15px', lg : '1.25rem'}}}>
            Ch.Devi Lal State Institute of Engineering & Technology / B.tech
          </Typography>
          <Typography sx={{fontSize : { sm : '12px', lg : '1rem'}}}>NAAC accredited Government University</Typography>
          <Typography sx={{fontSize : { sm : '12px', lg : '1rem'}}}>Computer Science Engineering, CGPA: 8.2</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </ThemeProvider>
  );
}

