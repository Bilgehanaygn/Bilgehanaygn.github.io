import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const MyAppBar = () => {


    return (
    <AppBar position="static" color="primary" style={{position:"fixed",top:0,zIndex: "1", paddingRight:50}}>
        <Toolbar variant="dense">
            <Typography style={{flex:1}}>
                <a href="https://bilgehanaygn.github.io/" style={{fontWeight:"bold",textDecoration: "none", marginRight: "1em", fontSize: "1.5em", color:"#13110c", }}>
                    Home
                </a>
            </Typography>
            <Typography>
                <a href="https://bilgehanaygn.github.io/" style={{fontWeight:"bold",textDecoration: "none", marginRight: "1em", fontSize: "1.5em", color:"#13110c"}}>
                    Articles
                </a>
            </Typography>{/*
            <Typography>
                <a href="https://bilgehanaygn.github.io/projects" style={{fontWeight:"bold",textDecoration: "none", marginRight: "1em", fontSize: "1.5em", color:"#13110c"}}>
                    Projects
                </a>
            </Typography>*/}
            <Typography>
                <a href="https://bilgehanaygn.github.io/about/" style={{fontWeight:"bold",textDecoration: "none", marginRight: "1em", fontSize: "1.5em", color:"#13110c"}}>
                    About Me
                </a>
            </Typography>
        </Toolbar>
    </AppBar>
    );

}

export default MyAppBar;
