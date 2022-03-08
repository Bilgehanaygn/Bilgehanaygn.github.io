import React from 'react'
import Container from '@mui/material/Box';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@emotion/react';
import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';



const useStyles = makeStyles(()=>({
    
    articlesContainer: {
        paddingTop: useTheme().spacing(3),
        paddingRight: useTheme().spacing(3)
    },
    articlesTitle: {
        fontWeight: 800,
        paddingBottom: useTheme().spacing(3),
        paddingLeft: useTheme().spacing(3)
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    gridContainer: {
        paddingLeft: useTheme().spacing(3),
    },
    footerDate: {
        display: "flex",
        justifyContent: "right",
        fontWeight: "bold",
        paddingRight: "24px",
    },
    
}));


const Articles = () => {
    const articles = data.data;
    const navigate = useNavigate();
    const classes = useStyles();
    
    const handleClick = (elementId) => {
        navigate(`/articles/${elementId}`);
    }

    return (
        <Container className={classes.articlesContainer}>
            <Typography variant="h4" className={classes.articlesTitle}>
                Articles
            </Typography>
            <Grid container spacing={7} className={classes.gridContainer}>
                {
                    articles.map((element,index)=>{
                        return (
                            <Grid item xs={12} sm={6} md={3} key={element.id}>
                                <Card className={classes.card}>
                                    <CardActionArea onClick={()=>{handleClick(element.id)}}>
                                        <CardMedia 
                                        className={classes.media}
                                        image={element.image[0]}
                                        title={element.title} />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {element.title}
                                            </Typography>
                                            <Typography gutterBottom variant="b2" component="p">
                                                {element.subtitle}
                                            </Typography>
                                        </CardContent>
                                        <p className={classes.footerDate}>
                                            {element.date}
                                        </p>
                                        
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })
                    
                }


            </Grid>
        </Container>
    );
}

export default Articles;
