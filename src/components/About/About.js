import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop,faEye,faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import './About.css';

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

const About = () => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <main style={{marginLeft:'240px', background:'#2C2D2F', color:'white', height:'750px'}} className={classes.content}>
        <div className={classes.toolbar} />
            <div className="container">
            <div style={{marginBottom:'100px'}} className="row">
            <h1 style={{fontWeight:'700'}}>Representing Thyself...</h1>
                <div className="col-md-6">
                   <h2 style={{fontWeight:'700'}}>Web Developer</h2>
                   <p>It science long I'm working in the field of web development. I started my journey as a <strong>web designer </strong>
                       and currently I'm doing as an enthusiastic <strong>Front-End web developer</strong>. Starting from <em>HTML, CSS</em> and moving to the 
                       <em> JavaScript ES6 with React library</em>. I have also interest in <em>NODE CRUD</em> operation while performing as a 
                       <strong> full-stack web developer</strong>. I'm exploring myself in this long journey as well as exploring users' expectation. 
                   </p>
                </div>
                <div className="col-md-6">
                    <h2 style={{fontWeight:'700'}}>Personal Information</h2>
                    <ul style={{listStyle:'none'}}>
                        <li><strong>Name:</strong> Timittra Islam Hridi</li>
                        <li><strong>Residence:</strong> Dhaka, Bangladesh</li>
                        <li><strong>Email:</strong> timittra.cse.aust@gmail.com</li>
                        <li><strong>Phone:</strong> 01318050458</li>
                    </ul>
                </div>
            </div>
            <div className="row text-center">
                <h2 style={{fontWeight:'700'}}>Services</h2>
                <div className="col-md-4">
                <FontAwesomeIcon className='icons' icon={faLaptop} />
                <h4>Web Development</h4>
                <p>Full-stack with React and Node.js crud operation.</p>
                </div>
                <div className="col-md-4">
                <FontAwesomeIcon className='icons' icon={faEye} />
                <h4>Web Design</h4>
                <p>High quality pixel perfect design with responsiveness.</p>
                </div>
                <div className="col-md-4">
                <FontAwesomeIcon className='icons' icon={faWordpress} />
                <h4>WordPress</h4>
                <p>Theme customization for e-commerce, blog sites with landing page using elimentor.</p>
                </div>
            </div>
            </div>
        </main>
    );
};

export default About;