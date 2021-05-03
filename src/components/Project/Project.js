import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
    const {id, image} = props.project;
    return (
        <div className="col-md-10 col-lg-7 col-xl-4 col-sm-12 col-xs-12">
            <div class="project_main">
            <div class="project_img">
                   <img src={require(`../../images/${image}`).default} alt=""/>
                    <div class="project_overlay">
                        <ul>
                            <li><Link className='links' to={`/detail/${id}`}>DE</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>TA</Link></li>
                            <li><Link className='links' to={`/detail/${id}`}>IL</Link></li>
                        </ul>
                    </div>
            </div>
            </div>
        </div>
    );
};

export default Project;