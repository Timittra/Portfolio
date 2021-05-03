import React from 'react';
import './Resume.css';


const Resume = () => {

    return (
        <div className="resume">
            <h1 style={{ fontWeight: '700' }}>My Resume.</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mt-5">
                        <div className="skills p-3">
                            <h3>Skills</h3>
                            <ul>
                                <li><strong>Web Development:</strong> HTML5, CSS3, JAVASCRIPT ES6, React Js, BOOTSTRAP, Material UI,
                            React Bootstrap, Node (crud operation), WordPress theme customization.</li>
                                <li><strong>Database Management Systems:</strong> Mongodb, MySQL</li>
                                <li><strong>Programming Languages:</strong> C, C++, Javascript ES6, Java</li>
                                <li><strong>IDE:</strong> Visual Studio Code , NetBeans, Code Blocks, Eclipse, MS Visual Studio</li>
                                <li><strong>Deploy:</strong> Firebase, Heroku, Netlify, GitHub </li>
                            </ul>
                        </div>

                        <div className="projects p-3">
                            <h3>Projects</h3>
                            <ul>
                                <li><strong><h4>Museum’s Galaxy (2021, April)</h4></strong>
                                    <li><h5>Technologies and Languages:</h5> HTML, CSS, React Js, Node(crud), Mongodb Atlas, VS
                            Code, Firebase, Heroku, Bootstrap cdn, Material UI.</li>
                                    <li><h5>Features:</h5> React router, private router, google sign-in system with firebase OAuth, event
                            tickets shipment system, providing user order information, events adding system, events
                            deleting system, events updating system, font awesome icons, responsive, react calendar,
                            google map, .env, and .gitignore system for security purpose</li>
                                </li>
                            </ul>
                            <ul>
                                <li><strong><h4>Laptop Magic HUB (2021, March)</h4></strong>
                                    <li><h5>Technologies and Languages:</h5>HTML, CSS(bootstrap, material ui, bootstrap cdn), React
                                Js, Node(crud), Mongodb Atlas,VS Code, Firebase, Heroku.</li>
                                    <li><h5>Features:</h5> React router, private router, google sign-in system with firebase OAuth,
                                product buying system, check out system, providing user order information, product
                                adding system, product deleting system, font awesome icons, spinner, .env, and .gitignore
                                system for security purpose.</li>
                                </li>
                            </ul>
                            <ul>
                                <li><strong><h4>Ticket to Train (2021, March)</h4></strong>
                                    <li><h5>Technologies and Languages:</h5> HTML, CSS(bootstrap, material ui, bootstrap cdn), React
                                Js, VS Code, Firebase.</li>
                                    <li><h5>Features:</h5> React router, react private router, using carts for showing ticket details, event
                                handler in the button for selecting specific ticket by dynamic routing, a firebase
                                authentication system for using google and email, password sign-in method, Mapbox for
                                showing the map, search for current location to destination location system, using font
                                awesome for icons, responsive.</li>
                                </li>
                            </ul>
                            <ul>
                                <li><strong><h4>City Museum Management (2018, October)</h4></strong>
                                    <li><h5>Technologies and Languages:</h5> JAVA, ASP.NET, Microsoft Visual Studio, PL/SQL, XAMPP</li>
                                    <li><h5>Features:</h5> events, exhibitions, ticket booking, gallery section, location, notice board, etc.</li>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 mt-5">
                        <div className="education p-3">
                            <h3>Education</h3>
                            <ul>
                                <li><strong><h4>Dhaka University, Bangladesh:</h4></strong>MBA in Management Information Systems, Enrolled, January 2020</li>
                                <li><strong><h4>Ahsanullah University of Science and Technology Dhaka, Bangladesh</h4></strong>
                        B.Sc. in Computer Science and Engineering, CGPA: 3.137/4.00 June 2015–June 2019</li>
                            </ul>
                        </div>
                        <div className="extra-curricular p-3">
                            <h3>Extra-Curricular Activities</h3>
                            <ul>
                                <li>Programming contests at Ahsanullah University of Science and Technology.</li>
                                <li>Project Show at Ahsanullah University of Science and Technology.</li>
                                <li>National Girls' Programming Contest(NGPC).</li>
                                <li>MindSpeark’18.</li>
                            </ul>
                        </div>
                        <div className="qualification p-3">
                            <h3>Special Qualification</h3>
                            <p>Good presentation quality</p>
                        </div>
                        <div className="training p-3">
                            <h3>Training</h3>
                            <ul>
                                <li>Full Stack Web Development with Jhankar Mahbub, Programming Hero. </li>
                                <li> Freelancing course on WordPress Theme Customization at Creative It Institute.</li>
                                <li>Freelancing course on Web Design at UY Lab.</li>
                            </ul>
                        </div>
                        <div className="achievement p-3">
                            <h3>Achievement</h3>
                            <p>Published thesis paper at 22nd ICCIT conference under IEEE on the topic “An Enriched Kasumi
                       encryption algorithm by modifying F-functions for 4G LTE”.</p>
                        </div>
                        <div className="language p-3">
                            <h3>Language Proficiency</h3>
                            <ul>
                                <li>Bangla (reading, writing, speaking).</li>
                                <li>English (reading, writing, speaking).</li>
                                <li>Hindi (speaking).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;