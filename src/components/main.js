import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingPage';
import About from './aboutMe';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import Education from './education'


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/education" component={Education} />
    </Switch>
)

export default Main;