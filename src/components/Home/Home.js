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
                    <Link style={{color:'skyblue', fontWeight:'700'}} to="https://drive.google.com/file/d/1MaMgiEQ5yoi0ydEWqpk9T8WtY7ZominJ/view?usp=sharing" target="_blank" download>Resume
                    </Link></div>
                </div>
            </div>
        </div>
    </div>
    </main>
    );
};

export default Home;