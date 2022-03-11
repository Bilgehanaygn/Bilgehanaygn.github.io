import React from 'react';
import Articles from './Articles';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@mui/material';


const useStyles = makeStyles(()=>({
    gridContaner: {
        paddingTop:50,
    }
}));

const MainPage = () => {
    const classes = useStyles();


    return (
        <Grid container className={classes.gridContaner}>
            <Grid item md={12} sm={8} xs={12} >
                <Articles/>
            </Grid>
        </Grid>
    );
}

export default MainPage;