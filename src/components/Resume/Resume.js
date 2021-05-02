import React from 'react';
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

const Resume = () => {
    const classes = useStyles();

    return (
       <main style={{marginLeft:'240px', background:'#2C2D2F', color:'white'}} className={classes.content}>
        <div className={classes.toolbar} />
        <h1 style={{fontWeight:'700'}}>My Resume.</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="important-links p-3">
                        <h3 style={{fontWeight:'700'}}>Important Links:</h3>
                            <a href='https://github.com/Timittra' target='_blank' rel='noreferrer'>GitHub</a>
                            <a href='https://www.linkedin.com/in/Timittra-Islam-Hridi/' target='_blank' rel='noreferrer'> LinkedIn</a>
                    </div>
                    <div className="skills p-3">
                    <h3 style={{fontWeight:'700'}}>Skills</h3>
                    <ul style={{listStyle:'none'}}>
                        <li><strong>Web Development:</strong> HTML5, CSS3, JAVASCRIPT ES6, React Js, BOOTSTRAP, Material UI,
                            React Bootstrap, Node (crud operation)</li>
                        <li><strong>Database Management Systems:</strong> Mongodb, MySQL</li>
                        <li><strong>Programming Languages:</strong> C, C++, Javascript ES6, Java</li>
                        <li><strong>IDE:</strong> Visual Studio Code , NetBeans, Code Blocks, Eclipse, MS Visual Studio</li>
                        <li><strong>Deploy:</strong> Firebase, Heroku, Netlify, GitHub </li>
                    </ul>
                    </div>

                    <div className="projects p-3">
                    <h3 style={{fontWeight:'700'}}>Projects</h3>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4>Museum’s Galaxy (2021, April)</h4></strong>
                        <li><h5>Technologies and Languages:</h5> HTML, CSS, React Js, Node(crud), Mongodb Atlas, VS
                            Code, Firebase, Heroku, Bootstrap cdn, Material UI.</li>
                        <li><h5>Features:</h5> React router, private router, google sign-in system with firebase OAuth, event
                            tickets shipment system, providing user order information, events adding system, events
                            deleting system, events updating system, font awesome icons, responsive, react calendar,
                            google map, .env, and .gitignore system for security purpose</li>
                        </li>
                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4>Laptop Magic HUB (2021, March)</h4></strong>
                        <li><h5>Technologies and Languages:</h5>HTML, CSS(bootstrap, material ui, bootstrap cdn), React
                                Js, Node(crud), Mongodb Atlas,VS Code, Firebase, Heroku.</li>
                        <li><h5>Features:</h5> React router, private router, google sign-in system with firebase OAuth,
                                product buying system, check out system, providing user order information, product
                                adding system, product deleting system, font awesome icons, spinner, .env, and .gitignore
                                system for security purpose.</li>
                        </li>
                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4>Ticket to Train (2021, March)</h4></strong>
                        <li><h5>Technologies and Languages:</h5> : HTML, CSS(bootstrap, material ui, bootstrap cdn), React
                                Js, VS Code, Firebase.</li>
                        <li><h5>Features:</h5> React router, react private router, using carts for showing ticket details, event
                                handler in the button for selecting specific ticket by dynamic routing, a firebase
                                authentication system for using google and email, password sign-in method, Mapbox for
                                showing the map, search for current location to destination location system, using font
                                awesome for icons, responsive.</li>
                        </li>
                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li><strong><h4>City Museum Management (2018, October)</h4></strong>
                        <li><h5>Technologies and Languages:</h5> JAVA, ASP.NET, Microsoft Visual Studio, PL/SQL, XAMPP</li>
                        <li><h5>Features:</h5> events, exhibitions, ticket booking, gallery section, location, notice board, etc.</li>
                        </li>
                    </ul>
                    </div>

                </div>
                <div className="col-md-6">

                </div>
            </div>
        </div>

        </main>
    );
};

export default Resume;