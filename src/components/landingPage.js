import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render(){
        return(
            <div className="page-body">
                <br />
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://image.posterlounge.com/img/products/680000/677165/677165_poster_l.jpg" 
                        alt="Yin Yang"
                        className="landing-img" />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />

                            <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                               
                               {/*May need another grid to make this responsive bootstrap-like */}
                               {/*Linked-In*/}
                               {/* <a href="http://google.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    
                                    
                                    <i className="fa fa-linkedin-square" 
                                    aria-hidden="true"
                                    />    
                                </a>  */}
                               {/*Github-In*/}
                               {/* <a href="http://google.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    
                                    
                                    <i class="fa fa-github" 
                                    aria-hidden="true" />

  
                                </a>  */}
                               {/*Freecodecamp*/}
                               {/* <a href="http://google.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    
                                    
                                    <i class="fa fa-free-code-camp"
                                    aria-hidden="true"></i>   
                                </a>  */}
                               {/*Youtube*/}
                               {/* <a href="http://google.com" 
                                rel="noopener noreferrer"
                                target="_blank">
                                    
                                    
                                    <i class="fa fa-youtube-square" />
                                        
                                </a>  */}

                            </div>
                        </div>
                    </Cell>
                
                <Grid className="social-links">
                    <Cell col={3}>
                        <a href="http://google.com" 
                            rel="noopener noreferrer"
                            target="_blank">
                                    
                                    
                            <i className="fa fa-linkedin-square" 
                            aria-hidden="true"
                                    />    
                        </a> 
                    </Cell>
                    <Cell col={3}>
                        <a href="http://google.com" 
                            rel="noopener noreferrer"
                            target="_blank">
                                    
                                    
                            <i class="fa fa-github" 
                            aria-hidden="true" />

  
                        </a> 
                    </Cell>
                    <Cell col={3}>
                        <a href="http://google.com" 
                            rel="noopener noreferrer"
                            target="_blank">
                                    
                                    
                            <i class="fa fa-free-code-camp"
                            aria-hidden="true"></i>   
                        </a>
                    </Cell>
                    <Cell col={3}>
                        <a href="http://google.com" 
                            rel="noopener noreferrer"
                            target="_blank">
                                    
                                    
                        <i class="fa fa-youtube-square" />
                                        
                        </a>
                    </Cell>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;