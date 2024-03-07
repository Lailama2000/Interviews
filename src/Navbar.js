import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import logo from './Media/Group 66.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from '@mui/material';
import {useMediaQuery} from '@mui/material'


const pages = ['Our Service', 'Packages', 'Book A demo' , 'Reasons' , 'FAQs' , 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [contact,setContact] = React.useState({})
  const navigate = useNavigate();
  const matches = useMediaQuery('(min-width:1100px)');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if(page === 'HOME'){
      navigate('/')
    }
    if(page === 'PRICE LIST'){
      navigate('/pricelist')
    }
    if(page === 'GALLERY'){
      navigate('/gallery')
    }
  };

  return (
    <AppBar position="fixed" sx={{bgcolor:'white',borderBottom:'1px solid #707070',boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              padding:'20px'
            }}
          >
            {/* <img src={logo} style={{width:'100px',height:'50px',objectFit:'contain'}}/> */}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },'.MuiPaper-root':{
                  width:'100%',bgcolor:'white',border:'1px solid gray',mt:'5px'
                }
              }}
            >
                 <MenuItem>
               <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' }
            }}
          >
            {/* <img src={logo} style={{width:'60px',height:'70px',objectFit:'contain'}}/> */}
          </Typography>

          </MenuItem>
              {pages.map((page) => (
                <MenuItem key={page} onClick={()=>{handleCloseNavMenu(page)}}>
                  <Typography textAlign="center" sx={{color:'#333134'}}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },flexWrap:'wrap'
          ,justifyContent:'center',alignItems:'center',gap:matches?'80px':''}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{handleCloseNavMenu(page)}}
                sx={{ my: 2, color: '#333134', display: 'block', fontSize:'12px' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow:0 }}>
            <Tooltip title="CALL US NOW">
            <Link href={`tel:${contact.phone_number}`} style={{textDecoration: 'none'}}>
               <Button sx={{color:'white',bgcolor:'#6CD6A9','&:hover':{color:'white',bgcolor:'#6CD6A9'}
            ,padding:'5px 30px 5px 30px'}}>PORTAL</Button>
            </Link>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;