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
                        <Avatar src="https://media-exp1.licdn.com/dms/image/D5603AQHIVio2YfZzEQ/profile-displayphoto-shrink_800_800/0/1646790019640?e=1652313600&v=beta&t=5EGvu2SmZ8RSXHLOvtl_-TIiA3W56GtI7cEqmMr5DDk" 
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
                    <a href="https://tr.linkedin.com/in/bilgehan-ayg%C3%BCn-0228aa20b" target="_blank">
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
