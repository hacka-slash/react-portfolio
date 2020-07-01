import React,{ Component } from "react";
import {Grid, Cell} from 'react-mdl';
import Education, {education} from './education.js'

class Resume extends Component {
    render(){
        return(
            <div className="page-body">
            <br />
                <Grid>
                    
                    <Cell className="resume left-col" col={4}>
                    
                        <div style={{textAlign: 'center'}}>
                            <img src="../content/yinyang.jpg"
                                alt="My Image"
                                style={{height: '250px'}} 
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Placido Hoff</h2>
                        <h4 style={{color: 'grey'}}Programmer></h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>placido.hoff@gmail.com</p>
                        <h5>Web</h5>
                        <p>myWebsite.com</p>
                    </Cell>
                    <Cell className="resume right-col"col={8}>
                        <Education />
                    </Cell>

                        
                    
                </Grid>
            </div>

        )
    }
}

export default Resume;