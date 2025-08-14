import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


export default function WorkCard(props) {
  return (
    <Card sx={{ maxWidth: 356, borderRadius: "3%", backgroundColor: "#363636", color: "#fff" }}>
      <CardActionArea>
        <img src={props.imgURL} alt='University Website' className='work-img' />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "poppins"}}>
            {props.projectName}
          </Typography>
          <Typography variant="body2" sx={{fontFamily: "Roboto mono", color: "#9c9c9c"}}>
            {props.projectCategory}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a className="robotomonoFamily work-card-btn" href={props.projectURL}>
          Show Project <OpenInNewIcon sx={{fontSize: "17px", mx: "3px"}} />
        </a>
      </CardActions>
    </Card>
  );
}
