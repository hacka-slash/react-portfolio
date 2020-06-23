import React,{ Component } from "react";
import {Grid, Cell} from 'react-mdl';

class Resume extends Component {
    render(){
        return(
            <div className="page-body">
            <br />
            <Grid className="landing-grid">
                <Cell col={12}>Resume</Cell>
                
            </Grid>

        </div>
        )
    }
}

export default Resume;