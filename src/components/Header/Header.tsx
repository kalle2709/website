import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';

import './Header.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPageItemSelected, setSelectedButton } from '../Store/websiteSlice';


const avatarStyle = {
  background: '#f384bb',
  width: '35px',
  height: '35px',
  fontSize: '1rem',
};

const Header = () => {

  const buttonSelected = useSelector((state:any) => state.website.buttonSelected);
  const bagCount = useSelector((state:any) => state.website.items);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getButtonStyle = (buttonValue: string) => ({
    textTransform: 'none',
    color: 'black',
    fontFamily: 'cursive',
    backgroundColor: buttonSelected === buttonValue ? '#f384bb' : 'inherit',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: buttonSelected === buttonValue ? '#f384bb' : 'inherit',
    },
  });

  const handleHomeButton = (value:string) =>
    {
      dispatch(setSelectedButton(value));
      navigate('/Homepage');
      dispatch(setPageItemSelected(''));
    }
  const handleShopnowButton = (value:string) =>
    {
      dispatch(setSelectedButton(value));
      navigate('/Shopnowpage');
      dispatch(setPageItemSelected(''));
    }
  const handleBagButton = (value:string) =>
    {
      dispatch(setSelectedButton(value));
      navigate('/Bagpage');
      dispatch(setPageItemSelected(''));
    }
  const handleAboutButton = (value:string) =>
    {
      dispatch(setSelectedButton(value));
      navigate('/Aboutpage');
      dispatch(setPageItemSelected(''));
    }
  const handleContactButton = (value:string) =>
    {
      dispatch(setSelectedButton(value));
      navigate('/Contactpage');
      dispatch(setPageItemSelected(''));
    }

  const logouthandler = (value:string)=>
    {
        dispatch(setSelectedButton(value));
        navigate('/');
        dispatch(setPageItemSelected(''));
    }

  return (
    <Grid>
      <Grid item className="headergrid">
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontFamily: 'cursive', color: '#f384bb', fontSize: '1.5rem' }}>SI</Typography>
          <Typography sx={{ fontFamily: 'cursive', color: '#f384bb', fontSize: '1.5rem' }}>SHOP.IN</Typography>
          <Stack direction='row' spacing={3}>
            <Avatar sx={avatarStyle} >M</Avatar>
            <Button sx={getButtonStyle('logout')} onClick={()=>{logouthandler('logout')}}>Logout</Button>
          </Stack>
          
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row" justifyContent="center" spacing={5}>
          <Button sx={getButtonStyle('home')} onClick={() => handleHomeButton('home')}>Home</Button>
          <Button sx={getButtonStyle('shopnow')} onClick={() => handleShopnowButton('shopnow')}>Shop Now</Button>
          <Button sx={getButtonStyle('bag')} onClick={() => handleBagButton('bag')}>{`Cart(${bagCount.length})`}</Button>
          <Button sx={getButtonStyle('about')} onClick={() => handleAboutButton('about')}>About Us</Button>
          <Button sx={getButtonStyle('contact')} onClick={() => handleContactButton('contact')}>Contact Us</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
