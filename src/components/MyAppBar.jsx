import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MyAppBar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/about`);
    }


    return (
    <AppBar position="static" color="primary" style={{position:"fixed",top:0,zIndex: "1", paddingRight:50}}>
        <Toolbar variant="dense">
            <Typography variant="h5" style={{flex:1}}>
                <a href="https://bilgehanaygn.github.io/" style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c", }}>
                    Home
                </a>
            </Typography>
            <Typography variant="h5">
                <a href="https://bilgehanaygn.github.io/articles" style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c"}}>
                    Articles
                </a>
            </Typography>
            <Typography variant="h5">
                <a onClick={()=>{handleClick()}} style={{fontWeight:"bold",textDecoration: "none", marginRight: 20, color:"#13110c"}}>
                    About Me
                </a>
            </Typography>
        </Toolbar>
    </AppBar>
    );

}

export default MyAppBar;
