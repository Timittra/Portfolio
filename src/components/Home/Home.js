import React from 'react';
import './Home.css';

const Home = () => {

    return (
        <div class="banner">
        <div class="bnr_overlay">
            <div class="container">
                <div class="bnr_content">
                    <h3>Hi......</h3>
                    <h1>I'm <span>Timittra Islam Hridi</span></h1>
                   <h2>I'm a <span id='spin'>Web Developer</span>.</h2>
                    <div className="btn btn-outline-light">
                    <a style={{color:'lightblue', fontWeight:'900'}} 
                        href="https://drive.google.com/uc?export=download&id=1MaMgiEQ5yoi0ydEWqpk9T8WtY7ZominJ">Resume</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Home;