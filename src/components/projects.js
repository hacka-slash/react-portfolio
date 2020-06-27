import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeTab: 0
        }
    }
    toggleCategories() {
        console.log(this.state.activeTab)
        if(this.state.activeTab === 0){
            return(
                // <div><h1>This is React</h1></div>
                <div class="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>            )
        }
        else if(this.state.activeTab === 2){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>            )
        }
        else{
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                    <CardText>
                        fdsfds dsf dsfds fdsf ds
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>            )
        }

        
        
        
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React {this.tabId}</Tab>
                    <Tab>Angular{this.tabId}</Tab>
                    <Tab>VueJS{this.tabId}</Tab>
                    <Tab>MongoDB{this.tabId}</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects