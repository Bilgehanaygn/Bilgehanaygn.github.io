import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@emotion/react';
import data from "../data.json";


const useStyles = makeStyles(()=>({
    gridItem:{
        margin: "auto"
    },
    paper:{
        padding: useTheme().spacing(3),
        marginBottom: useTheme().spacing(8),
        
    },
    header:{
        display: "flex",
        justifyContent: "space-around",
        borderBottom:"solid",
        marginTop:20
    },
    image:{
        width: "100%",
        borderRadius: 5,
        marginTop: useTheme().spacing(3),
        marginBottom: useTheme().spacing(4)
    },
    content:{
        marginTop: useTheme().spacing(3),
        whiteSpace:"break-spaces"
    },
    date: {
        textAlign: "Right",
        fontWeight: "bold",
        paddingTop: "1.5em"
    }

}));


const PostDetails = () => {
    const classes = useStyles();
    const params = useParams();
    const currentArticle = data.data[params.id-1]
    

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={7} className={classes.gridItem}>
                <Paper elevation={2} style={{paddingTop: 50}} className={classes.paper}>
                    <div>
                        <div className={classes.header}>
                            <Typography variant="h4">
                                {currentArticle ? currentArticle.title : "Error: cannot read properties of undefined"}
                            </Typography>
                        </div>
                        <div className={classes.content} >
                            {/* image0 */}
                            <img src={currentArticle ? currentArticle.image[0] : "" } alt="Post Image" className={classes.image} />
                            {/* body0 */}
                            <Typography style={{textIndent:"2em"}} variant="body1">
                                {currentArticle.content[0] ? currentArticle.content[0] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* head1 */}
                            <Typography style={{fontWeight: "bold"}} variant="h5">
                                {currentArticle.headings[0] ? currentArticle.headings[0] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* image1 */}
                            <img src={currentArticle.image[1] ? currentArticle.image[1] : "" } alt="Post Image" className={classes.image} />
                            {/* body1 */}
                            <Typography style={{textIndent:"2em"}} variant="body1">
                                {currentArticle.content[1] ? currentArticle.content[1] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* head2 */}
                            <Typography style={{fontWeight: "bold"}} variant="h5">
                                {currentArticle.headings[1] ? currentArticle.headings[1] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* image2 */}
                            <img src={currentArticle.image[2] ? currentArticle.image[2] : "" } alt="Post Image" className={classes.image} />
                            {/* body2 */}
                            <Typography style={{textIndent:"2em"}} variant="body1">
                                {currentArticle.content[2] ? currentArticle.content[2] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* head3 */}
                            <Typography style={{fontWeight: "bold"}} variant="h5">
                                {currentArticle.headings[2] ? currentArticle.headings[2] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* image3 */}
                            <img src={currentArticle.image[3] ? currentArticle.image[3] : "" } alt="Post Image" className={classes.image} />
                            {/* body3 */}
                            <Typography style={{textIndent:"2em"}} variant="body1">
                                {currentArticle.content[3] ? currentArticle.content[3] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* body4 */}
                            <Typography style={{textIndent:"2em", fontWeight:"bold"}} variant="body1">
                                {currentArticle.content[4] ? currentArticle.content[4] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* head4 */}
                            <Typography style={{fontWeight: "bold"}} variant="h5">
                                {currentArticle.headings[3] ? currentArticle.headings[3] : "Error: Cannot read properties of undefined"}
                            </Typography>
                            {/* image4 */}
                            <img src={currentArticle.image[4] ? currentArticle.image[4] : "" } alt="Post Image" className={classes.image} />



                            {/*Date*/}
                            <Typography className={classes.date}>
                                {currentArticle ? currentArticle.date : "Error: Cannot read properties of undefined"}
                            </Typography>
                        </div>
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default PostDetails;
