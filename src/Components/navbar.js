import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: 'Roboto Mono' }}>
        Pankaj;
      </Typography>
      <Divider />
      <ul className='drawer-list'>
        <li><a href="#Home">Home</a></li>
        <li><a href="#Skills">Skills</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Work">Work</a></li>
        <li><a href="#Contact">Contact</a></li>
       
      </ul>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', height: "100px"}} >
      <CssBaseline />
      <AppBar component="nav" style={{background: "transparent"}} elevation={0}>
        <Toolbar style={{margin: "20px 0", boxShadow: "0 0px"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: "Roboto Mono" }}
          >
            <span></span>
          </Typography>
          <Box className="nav-items" sx={{display: { xs: 'none', sm: 'block' }, transform: "translate(-50%)", position: "absolute", left: "50%" }}>
            <nav>
              <ul className='nav-item-list'>
                <li><a href="#Home">Home</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Education">Education</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Work">Work</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>
            </nav>
          </Box>
          <Box sx={{display: { xs: 'none', sm: 'block' }}}>
            <a className='resume-button' href={"https://drive.google.com/file/d/1HBMFvfGVU-S0Av0SPc_3SkiwmiFjKfNp/view"}><span class="text">Resume</span><span>Resume</span></a>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
export default DrawerAppBar;