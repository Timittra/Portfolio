/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Project from '../Project/Project';
import fakeData from '../../fakeData/fakeData';

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

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);
    const classes = useStyles();

    useEffect(() =>{
        setAllProjects(fakeData);
      },[]);

    return (
        <main id="project" style={{marginLeft:'240px', background:'#2C2D2F', padding:'170px 50px'}} className={classes.content}>
        <div className={classes.toolbar} />
        <div class="container">

        <div class="row">
            {
                allProjects.map(project => <Project key={project.id} project={project}></Project>)
            }
        </div>
        </div>


        </main>
    );
};

export default Projects;