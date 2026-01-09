import React, { Component } from 'react';
import { Card, CardContent, CardActions, Button, IconButton, Tabs, Tab, Grid, Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import htmlCssImage from '../assets/html-css.png';
import reactJSImage from '../assets/react-js.png';
import springImage from '../assets/spring.png';
import angularImage from '../assets/angular.png';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from "./footer";

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
                    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 5 }}>
                        <Box
                            sx={{
                                height: 176,
                                backgroundImage: `url(${htmlCssImage})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundColor: 'blue',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: 2
                            }}
                        >
                            <h3>Frontend Project #1</h3>
                        </Box>
                        <CardContent>
                            It was my first frontend project using HTML & CSS with some JavaScript, and I also rendered it as a GitHub io page.
                        </CardContent>
                        <CardActions sx={{ borderTop: 1, borderColor: 'divider' }}>
                            <Button size="small" color="primary" href="https://github.com/Csaba79-coder/csaba79-coder.github.io" target="_blank">Source Code</Button>
                            <Button size="small" color="primary" href="https://csaba79-coder.github.io/" target="_blank">Live Demo</Button>
                            <Box sx={{ marginLeft: 'auto' }}>
                                <CopyToClipboard text="https://csaba79-coder.github.io/">
                                    <IconButton onClick={() => alert('URL copied to clipboard!')}>
                                        <ShareIcon />
                                    </IconButton>
                                </CopyToClipboard>
                            </Box>
                        </CardActions>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className='project-grid'>
                    {[1, 2, 3, 4].map((index) => (
                        <Card key={index} sx={{ maxWidth: 345, margin: 'auto', boxShadow: 5 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    backgroundImage: `url(${springImage})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundColor: 'blue',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: 2
                                }}
                            >
                                <h3>JAVA | Spring</h3>
                            </Box>
                            <CardContent>
                                ???
                            </CardContent>
                            <CardActions sx={{ borderTop: 1, borderColor: 'divider' }}>
                                <Button size="small" color="primary" href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                                <Button size="small" color="primary" href="https://csaba79coder.com/" target="_blank">Pic Gallery</Button>
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <CopyToClipboard text="https://csaba79-coder.github.io/">
                                        <IconButton onClick={() => alert('URL copied to clipboard!')}>
                                            <ShareIcon />
                                        </IconButton>
                                    </CopyToClipboard>
                                </Box>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className='project-grid'>
                    {[1, 2].map((index) => (
                        <Card key={index} sx={{ maxWidth: 345, margin: 'auto', boxShadow: 5 }}>
                            <Box
                                sx={{
                                    height: 176,
                                    backgroundImage: `url(${angularImage})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    backgroundColor: 'blue',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    padding: 2
                                }}
                            >
                                <h3>Fullstack Project #{index}</h3>
                            </Box>
                            <CardContent>
                                ???
                            </CardContent>
                            <CardActions sx={{ borderTop: 1, borderColor: 'divider' }}>
                                <Button size="small" color="primary" href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                                <Button size="small" color="primary" href="https://csaba79coder.com/" target="_blank">Pic Gallery</Button>
                                <Box sx={{ marginLeft: 'auto' }}>
                                    <CopyToClipboard text="https://csaba79-coder.github.io/">
                                        <IconButton onClick={() => alert('URL copied to clipboard!')}>
                                            <ShareIcon />
                                        </IconButton>
                                    </CopyToClipboard>
                                </Box>
                            </CardActions>
                        </Card>
                    ))}
                </div>
            );
        } else if (this.state.activeTab === 3) {
            return (
                <div className='project-grid'>
                    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: 5 }}>
                        <Box
                            sx={{
                                height: 176,
                                backgroundImage: `url(${reactJSImage})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                backgroundColor: 'blue',
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: 2
                            }}
                        >
                            <h3>Portfolio | CV</h3>
                        </Box>
                        <CardContent>
                            As an enthusiastic backend developer, I thought it important, to create an introduction site for myself, where I can present my projects and my resume.
                        </CardContent>
                        <CardActions sx={{ borderTop: 1, borderColor: 'divider' }}>
                            <Button size="small" color="primary" href="https://github.com/Csaba79-coder/portfolio" target="_blank">Source Code</Button>
                            <Button size="small" color="primary" href="https://csaba79coder.com/" target="_blank">Live Demo</Button>
                            <Box sx={{ marginLeft: 'auto' }}>
                                <CopyToClipboard text="https://csaba79coder.com/">
                                    <IconButton onClick={() => alert('URL copied to clipboard!')}>
                                        <ShareIcon />
                                    </IconButton>
                                </CopyToClipboard>
                            </Box>
                        </CardActions>
                    </Card>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs value={this.state.activeTab} onChange={(event, newValue) => this.setState({ activeTab: newValue })} centered>
                    <Tab label="JS | HTML | CSS" />
                    <Tab label="Java | Spring" />
                    <Tab label="TypeScript | Angular" />
                    <Tab label="JavaScript | React" />
                </Tabs>

                <Grid container>
                    <Grid item xs={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Project;
