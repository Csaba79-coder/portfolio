import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tabs, Tab, Grid, Cell } from 'react-mdl';
import htmlCssImage from '../assets/html-css.png'; // Replace with the correct image path
import reactJSImage from '../assets/react-js.png'; // Replace with the correct image path
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className='project-grid'>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            key={this.state.activeTab} // Add a unique key
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${htmlCssImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            Frontend Project #1
                        </CardTitle>
                        <CardText>
                            It was my first frontend project using HTML & CSS with some JavaScript, and I also rendered it as a GitHub io page.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/csaba79-coder.github.io" target="_blank">Source Code</Button>
                            <Button colored  href="https://csaba79-coder.github.io/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className='project-grid'>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            JAVA | Spring
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            JAVA | Spring
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            JAVA | Spring
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            JAVA | Spring
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className='project-grid'>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            Fullstack Project #1
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            Fullstack Project #2
                        </CardTitle>
                        <CardText>
                            ???
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79-coder.github.io/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div className='project-grid'>
                    <Card shadow={5} style={{ minWidth: '450px', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background: `url(${reactJSImage}) center / contain no-repeat`,
                                backgroundColor: 'blue'
                            }}
                        >
                            Portfolio | CV
                        </CardTitle>
                        <CardText>
                            As an enthusiastic backend developer, I thought it important, to create an introduction site for myself, where I can present my projects and my resume.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button colored href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <CopyToClipboard text="https://csaba79coder.com/">
                                <IconButton name="share" onClick={() => alert('URL copied to clipboard!')}>
                                    Share
                                </IconButton>
                            </CopyToClipboard>
                        </CardMenu>
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JS | HTML | CSS</Tab>
                    <Tab>Java | Spring</Tab>
                    <Tab>TypeScript | Angular</Tab>
                    <Tab>JavaScript | React</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Project;
