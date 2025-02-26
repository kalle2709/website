import React from 'react'

import { Button, Grid, Stack } from '@mui/material'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import AllPage from './AllPage/AllPage'
import RingsPage from './RingsPage/RingsPage'
import BraceletPage from './BraceletPage/BraceletPage'
import NecklesPage from './NecklesPage/NecklesPage'
import EarringsPage from './EarRingsPage/EarringsPage'
import { useSelector } from 'react-redux'
import ItemPageSelected from './ItemSelectedPage/ItemPageSelected'
import { useDispatch } from 'react-redux'
import { setCategorySelected, setPageItemSelected } from '../../Store/websiteSlice'



const ShopPage = () => {

    const pageItemSelected = useSelector((state:any) => state.website.pageItemSelected);
    const itemSelected = useSelector((state:any) => state.website.itemSelected);
    const selectedValue = useSelector((state:any) => state.website.categorySelected);

    const dispatch = useDispatch();



    const handleAllClick = (value: string)=>
        {
            dispatch(setCategorySelected(value));
            dispatch(setPageItemSelected(''));

        }
    const handleRingsClick = (value: string)=>
        {
            dispatch(setCategorySelected(value));
            dispatch(setPageItemSelected(''));

        }
    const handleBraceletsClick = (value: string)=>
        {
            dispatch(setCategorySelected(value));
            dispatch(setPageItemSelected(''));

        }
    const handleNecklacesClick = (value: string)=>
        {
            dispatch(setCategorySelected(value));
            dispatch(setPageItemSelected(''));

        }
    const handleEarringClick = (value: string)=>
        {
            dispatch(setCategorySelected(value));
            dispatch(setPageItemSelected(''));

        }

    const buttonStyle = (value:string) =>(
        {
            textTransform:'none',
            textDecoration: value === selectedValue ? 'underline':'none',
            color:'black',
            fontFamily:'cursive',
            fontSize:'1rem',
            background:'none',
            '&: hover':{
                background:'none',
                textDecoration:'underline', 
            }
        
        
        })

        const renderContent = () => {
            if (pageItemSelected && itemSelected === 'item') {
                return <ItemPageSelected />;
            }
            switch (selectedValue) {
                case 'rings':
                    return <RingsPage />;
                case 'bracelets':
                    return <BraceletPage />;
                case 'necklaces':
                    return <NecklesPage />;
                case 'earrings':
                    return <EarringsPage />;
                case 'all':
                default:
                    return <AllPage />;
            }
        };

  
  return (
    <Grid container direction='column'>
        <Grid item sx={{paddingBottom:'1rem'}}>
            <Header/>
        </Grid>
        <Grid item sx={{backgroundColor:'whitesmoke', padding:'1rem',paddingTop:'0rem',height:'100vh',overflowY:'scroll',
            '&::-webkit-scrollbar': { width: '8px' }, 
            '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' }, 
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' }, 
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' } 
        }}>
            <Stack direction = 'column' spacing={5} >
                <Stack direction='row' spacing={3} justifyContent='center' sx = {{background:'whitesmoke',padding:'1rem',position: 'sticky',top:0,zIndex:1,overflowY:'hidden'}}>
                    <Button sx={buttonStyle('all')} onClick = {()=>{handleAllClick('all')}}>All</Button>
                    <Button sx={buttonStyle('rings')} onClick = {()=>{handleRingsClick('rings')}}>Rings</Button>
                    <Button sx={buttonStyle('bracelets')} onClick = {()=>{handleBraceletsClick('bracelets')}}>Bracelets</Button>
                    <Button sx={buttonStyle('necklaces')} onClick = {()=>{handleNecklacesClick('necklaces')}}>Necklaces</Button>
                    <Button sx={buttonStyle('earrings')} onClick = {()=>{handleEarringClick('earrings')}}>Earrings</Button>
                </Stack>
                {renderContent()}      
            </Stack>
           
        </Grid>
        <Grid item>
            <Footer/>
        </Grid>

    </Grid>
  )
}

export default ShopPage
