import React from 'react'
import { AppBar, Card, CardContent, CardHeader, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';

const AuthLayout = ({ children, color }) => {
  
  const background = {
    position: 'absolute',
    opacity: .3,
    right: '10%',
    top: '10%'
  }

  const centerGrid = {
    pl: 10, 
    pr: 10, 
  }

  return (
    <>
      <img
        src={'/img/escudo_unicauca.png'}
        style={background}
      />
      <AppBar position="relative" sx={{ mb: 5 }} color={color} >
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <CurrencyExchangeRoundedIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            UNICAUCA TRUEQUE
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container spacing={2} sx={centerGrid} >
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }} >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Typography variant='h4'>U-TRUEQUE</Typography>
              <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, eligendi at officia officiis consequatur labore. Soluta quo repellendus neque tenetur odio laborum, distinctio corrupti quos laboriosam ipsa dolores molestiae quis.</Typography>
              <img
                src='/img/logo.png'
                className='mainImg'
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} >
          {children}
        </Grid>

      </Grid>
    </>
  )
}

export default AuthLayout