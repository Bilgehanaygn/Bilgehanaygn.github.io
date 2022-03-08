import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { BsLinkedin, BsGithub } from "react-icons/bs";


const useStyles = makeStyles(()=>({
    box: {
        width: "100%",
        height : "100%",
        borderRight: "solid",
    },
    
    profileData: {
        width:"100%",
        position: "sticky",
        top: "30%",
    },
    avatar: {
        height: "100%",
        width: "100%",
    },
    personalInfo:{
        paddingTop:"5%",
        textAlign: "center"
    },
    social:{
        paddingTop: "0.5em",
        textAlign: "center",
        fontSize: "2.5em",
    },

}));

const SideBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.box}>
            <div className={classes.profileData} >
                <Grid container>
                    <Grid item md={9} sm={12} style={{margin:"auto"}}>
                        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQErinAlSXMxDw/profile-displayphoto-shrink_400_400/0/1642154741151?e=1651104000&v=beta&t=5DvfDZcRQFBDos63PmdmMe0i7k4vAxtSQh42Rvi6VgI" 
                        alt="Bilgehan Aygün" className={classes.avatar} />
                    </Grid>
                </Grid>
                <Typography variant="h5" className = {classes.personalInfo}>
                    Bilgehan Aygün
                </Typography>
                {/*
                <Typography style={{display:"block", textAlign: "center"}} >
                    Javascript/Html/Css/React.js
                </Typography>
                */}
                <div className={classes.social} >
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                        <BsLinkedin style={{color:"#0e76a8"}} />
                    </a>
                    <a href="https://github.com/Bilgehanaygn?tab=repositories" target="_blank">
                        <BsGithub style={{paddingLeft: "0.5em", color:"black"}} />
                    </a>
                </div>
            </div>
        </div>
    );
}


export default SideBar;
