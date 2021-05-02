import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: 240,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));


const Home = () => {
    const classes = useStyles();

    return (
    <main style={{marginLeft:'240px', background:'black'}} className={classes.content}>
        <div className={classes.toolbar} />
        <div class="banner">
        <div class="bnr_overlay">
            <div class="container">
                <div class="bnr_content">
                    <h3>Hi......</h3>
                    <h1>I'm <span>Timittra Islam Hridi</span></h1>
                   <h2>I'm a <span id='spin'>Web Developer</span>.</h2>
                    <div className="btn btn-outline-light">
                    <a style={{color:'skyblue', fontWeight:'700'}} 
                        href="https://drive.google.com/uc?export=download&id=1MaMgiEQ5yoi0ydEWqpk9T8WtY7ZominJ">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>
    );
};

export default Home;