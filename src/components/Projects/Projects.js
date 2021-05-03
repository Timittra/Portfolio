/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import fakeData from '../../fakeData/fakeData';
import './Projects.css';

const Projects = () => {
    const [allProjects, setAllProjects] = useState([]);

    useEffect(() =>{
        setAllProjects(fakeData);
      },[]);

    return (
        <div id="project" className="projects">
            <div class="container">
                <h1 style={{fontWeight:'700'}}>Projects.</h1>
                <div class="row">
                    {
                        allProjects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;