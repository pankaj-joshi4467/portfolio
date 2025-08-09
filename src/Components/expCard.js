import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodSoft from "../res/experience/codsoft.png"

export default function MediaControlCard(props) {

  return (
    <Card className='exp-card' sx={{color: "#fff", background: "#5a5a5a", display: "flex", maxWidth: "700px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography sx={{ fontSize: 14, fontFamily: "Roboto Mono" }} color="text.secondary" gutterBottom>
            {props.location}
            </Typography>
            <Typography variant="h5" component="div" sx={{fontFamily: "poppins"}}>
            {props.position} @ {props.organization}
            </Typography>
            <Typography sx={{ mb: 1.5, fontFamily: "Roboto Mono" }} color="text.secondary">
            {props.startYear}
            </Typography>
            <Typography variant="body2" sx={{fontFamily: "Roboto Mono"}}>
            {props.content}
            </Typography>
        </CardContent>
      </Box>
      <img className='exp-img' src={CodSoft} alt='Codsoft'></img>
    </Card>
  );
}
