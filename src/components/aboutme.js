import React, { Component } from 'react';
import { Grid } from "@mui/material";
import claudeLogo from '../assets/claude-ai-icon.png';
import Footer from "./footer";

class About extends Component {

    render() {
        return(
            <div className='page-wrapper'>
                <div className='about-body page-content'>
                    <Grid container className='about-grid'>
                        <Grid item xs={12}>
                            <h2>About Me</h2>
                            <hr className="about-separator" />
                            <p>
                                I am a Java backend developer specializing in Spring, working with both Maven- and Gradle-based projects. I am passionate about learning new technologies and improving my programming skills. I thrive in dynamic environments where I can tackle complex problems and continuously grow as a developer. I am always eager to explore modern frameworks, best practices, and innovative solutions to build efficient and scalable applications. Coming from a financial background, I am a career changer eager to leverage my previous experience in a tech-driven environment. I believe that my analytical mindset and domain knowledge can add value to complex business challenges. I seek a supportive team and leadership where long-term collaboration and professional growth are guaranteed. A strong and encouraging environment is key to achieving great results, and I am excited to contribute my skills while learning from experienced colleagues. Looking forward to joining a team!
                            </p>
                            <a href="https://www.codewars.com/users/Csaba79-coder" target="_blank" rel="noopener noreferrer">
                                My Codewars Profile <span className="arrow">→</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://stackoverflow.com/users/15341736/csaba79-coder" target="_blank" rel="noopener noreferrer">
                                My Stack Overflow Profile <span className="arrow">→</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://profile.codersrank.io/user/csaba79-coder" target="_blank" rel="noopener noreferrer">
                                My CodersRank Profile <span className="arrow">→</span>
                            </a>
                            <br/>
                            <br/>
                            <a href="https://dev.to/csaba79coder" target="_blank" rel="noopener noreferrer">
                                My Dev Community Profile <span className="arrow">→</span>
                            </a>
                            <br/>
                            <br/>
                            <br/>

                            <hr className="about-separator" />

                            <div className="claude-collaboration">
                                <h2>
                                    <img src={claudeLogo} alt="Claude AI" className="claude-title-icon" />
                                    Claude AI Collaboration
                                </h2>
                                <hr className="about-separator" />
                                <p>
                                    Claude provided a free MCP server configuration that enabled me to explore large
                                    language model and MCP server interactions for my thesis research. This hands-on
                                    experimentation significantly advanced my diploma work, allowing me to implement and
                                    test real-world AI integration scenarios.
                                </p>
                                <p>
                                    In early 2026, I experimented with Claude AI for portfolio maintenance tasks.
                                    Claude assisted with vulnerability fixes and version upgrades, becoming a GitHub
                                    contributor during this trial. The experiment demonstrated AI's usefulness for
                                    specific code maintenance scenarios.
                                </p>
                                <p>
                                    Thanks to the Anthropic team for making these development tools accessible and
                                    providing me a valuable learning experience!
                                </p>
                            </div>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;
