import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../firebase/useAuth';


const ResponsiveAppBar = () => {
   const { logOut, account } = useAuth();
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [anchorElUser, setAnchorElUser] = React.useState(null);

   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };
   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <AppBar style={{ backgroundColor: '#333333' }} position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
               >
                  <Link className='text-decoration-none text-light fw-bold' to={'/home'}><span style={{ color: '#ffd001' }}>Hero</span> Rider</Link>
               </Typography>

               <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
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
                        display: { xs: 'block', md: 'none' },
                     }}
                  >
                     <MenuItem>
                        <Typography textAlign="center">
                           {
                              account?.email ?
                                 <><Link className='text-decoration-none fw-bold text-dark' to={'/services'}>Services</Link></>
                                 :
                                 <><Link className='text-decoration-none fw-bold text-dark' to={'/login'}>Log In</Link></>
                           }
                        </Typography>
                     </MenuItem>
                  </Menu>
               </Box>
               <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
               >
                  <Link className='text-decoration-none text-light fw-bold' to={'/home'}>Hero Rider</Link>
               </Typography>
               <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                  {
                     account?.email ?
                        <><Button
                           sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                           <Link className='text-decoration-none fw-bold text-light' to={'/services'}>Services</Link>
                        </Button>
                           {
                              account.information.role === 'admin' && <Button
                                 sx={{ my: 2, color: 'white', display: 'block' }}
                              >
                                 <Link className='text-decoration-none fw-bold text-light ms-4' to={'/allusers'}>All Users</Link>
                              </Button>
                           }
                        </>
                        :
                        <><Link className='text-decoration-none fw-bold text-light' to={'/login'}>Log In</Link></>
                  }

               </Box>

               <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                     <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        {
                           account?.email ?
                              <><h4 className='text-light pe-4'>{account.information.name}</h4>
                                 <img className='border rounded-circle' width={'50px'} height={'50px'} alt="" src={`data:image/png;base64,${account.profilePic}`} />
                              </>
                              :
                              <> <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /></>
                        }
                     </IconButton>
                  </Tooltip>
                  <Menu
                     sx={{ mt: '45px' }}
                     id="menu-appbar"
                     anchorEl={anchorElUser}
                     anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                     }}
                     open={Boolean(anchorElUser)}
                     onClose={handleCloseUserMenu}
                  >
                     {
                        account?.email && <MenuItem onClick={handleCloseNavMenu}>
                           <Typography onClick={() => logOut()} textAlign="center">Log Out</Typography>
                        </MenuItem>
                     }
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
};
export default ResponsiveAppBar;
