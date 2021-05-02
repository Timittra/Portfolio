import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/detail/:id">
          <Detail></Detail>
        </Route>
        <Route path="/blogs">
          <Blogs/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
