import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class AboutMe extends Component {
    render(){
        return(
            <div className="page-body">
                <br />
            <Grid>
                <Cell col={12}>About Me</Cell>
                
            </Grid>
            </div>
        )
    }
}

export default AboutMe