import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import './About.css';

const About = () => {

    return (
        <div className="about">
            <div className="container">
                <div style={{ marginBottom: '100px' }} className="row">
                    <h1 style={{ fontWeight: '700'}}>Representing Thyself...</h1>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pt-5">
                        <h2 style={{ fontWeight: '700' }}>Web Developer</h2>
                        <p>It science long I'm working in the field of web development. I started my journey as a <strong>web designer </strong>
                       and currently I'm doing as an enthusiastic <strong>Front-End web developer</strong>. Starting from <em>HTML, CSS</em> and moving to the
                       <em> JavaScript ES6 with React library</em>. I have also interest in <em>NODE CRUD</em> operation while performing as a
                       <strong> full-stack web developer</strong>. I'm exploring myself in this long journey as well as exploring users' expectation.
                   </p>
                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pt-5">
                        <h2 style={{ fontWeight: '700' }}>Personal Information</h2>
                        <ul style={{ listStyle: 'none' }}>
                            <li><strong>Name:</strong> Timittra Islam Hridi</li>
                            <li><strong>Residence:</strong> Dhaka, Bangladesh</li>
                            <li><strong>Email:</strong> timittra.cse.aust@gmail.com</li>
                            <li><strong>Phone:</strong> 01318050458</li>
                        </ul>
                    </div>
                </div>
                <div className="row text-center">
                    <h2 style={{ fontWeight: '700' }}>Technical Skills</h2>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <FontAwesomeIcon className='icons' icon={faLaptopCode} />
                        <h4>Web Development</h4>
                        <p>Full-stack with React and Node.js crud operation.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <FontAwesomeIcon className='icons' icon={faEye} />
                        <h4>Web Design</h4>
                        <p>High quality pixel perfect design with responsiveness.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12">
                        <FontAwesomeIcon className='icons' icon={faWordpress} />
                        <h4>WordPress</h4>
                        <p>Theme customization for e-commerce, blog sites with landing page using elimentor.</p>
                    </div>
                </div>
            </div>
        </div>
     );
};

export default About;