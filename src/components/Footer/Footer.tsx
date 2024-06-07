import React from 'react'
import { Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { Facebook, Twitter, Instagram, WidthFull } from '@mui/icons-material';

import './Footer.css';
import { useNavigate } from 'react-router-dom';


const textFieldStyle={
    
}
const buttonStyle={
    fontFamily:'cursive',
    background:'black',
    color:'#f18dbf',
    '&: hover':{
        background:'black',
    }
    
}


const Footer = () => {

    const navigate = useNavigate();

    const facebookLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
    const instaLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
    const twitterLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
  return (
    <Grid className="footergrid">
        <Stack direction='row' justifyContent='space-between' className="footer">
            <Typography sx={{fontFamily:'cursive',fontSize:'1.5rem'}}>Follow Us On....</Typography>
            <Stack direction='row' spacing={2}>
                <Facebook sx={{color:'black',cursor:'pointer'}} onClick={()=>{facebookLinkHandler('https://www.facebook.com/')}}/>
                <Instagram sx={{color:'black',cursor:'pointer'}} onClick={()=>{instaLinkHandler('https://www.instagram.com/')}}/>
                <Twitter sx={{color:'black',cursor:'pointer'}} onClick={()=>{twitterLinkHandler('https://x.com/i/flow/login')}}/>
            </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between' className="footer">
            <Stack spacing={0.5}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive', paddingLeft:'1.5rem'}}>POLICIES</Typography>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Search</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Privacy Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Refund Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Shipping Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Terms of Service</Button>
            </Stack>
            <Stack spacing={0.5}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive',paddingLeft:'1.5rem'}}>QUICK LINKS</Typography>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Home</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Shop Now</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>About Us</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Contact Us</Button>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive'}}>SUBSCRIBE</Typography>
                <TextField placeholder='Email' sx={textFieldStyle}/>
                <Button sx={buttonStyle}>Subscribe</Button>
            </Stack>

        </Stack>
        
      
    </Grid>
  )
}

export default Footer
