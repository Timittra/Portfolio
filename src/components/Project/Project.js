import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    const {id, image} = props.project;
    return (
        <div className="col-md-4">
            <div class="project_main">
            <div class="project_img">
                   <img style={{height:'350px', width:'350px'}} src={require(`../../images/${image}`).default} alt=""/>
                    <div class="project_overlay">
                        <ul>
                            <li><Link className='links' to={`/detail/${id}`}>D</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>E</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>T</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>A</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>I</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>L</Link></li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Project;