import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return(
        <Layout>
            <Header className="header-color" title="Placido Hoff Portfolio" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About Me</Link>
                </Navigation>
            </Header>
            <Drawer title="Portfolio">
            <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About Me</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-body">
                  <Main />
                </div>
            </Content>
        </Layout>
    )
  }
}

export default App;
