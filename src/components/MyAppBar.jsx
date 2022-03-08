import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const MyAppBar = () => {


    return (
    <AppBar position="static" color="primary" style={{position:"fixed",top:0,zIndex: "1", paddingRight:50}}>
        <Toolbar variant="dense">
            <Typography variant="h5" style={{flex:1}}>
                <a href="/Bilgehanaygn.github.io/website" style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c", }}>
                    Home
                </a>
            </Typography>
            <Typography variant="h5">
                <a href="/Bilgehanaygn.github.io/website" style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c"}}>
                    Articles
                </a>
            </Typography>
            <Typography variant="h5">
                <a href="/Bilgehanaygn.github.io/website/about" style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c"}}>
                    About Me
                </a>
            </Typography>
        </Toolbar>
    </AppBar>
    );

}

export default MyAppBar;
