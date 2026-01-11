import React, { Component } from 'react';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import santoriniImage from '../assets/santorini.png';
import avatarImg from '../assets/CsabaVadasz2022.png';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import Footer from "./footer";

class Landing extends Component {
    render() {
        return(
            <div className="background-container" style={{ backgroundImage: `url(${santoriniImage})` }}>
                <Grid container className="background-container">
                    <Grid item xs={12}>
                        <img src={avatarImg} alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack & AI Engineer</h1>
                        </div>
                        <hr className="landing-separator" />
                        <p className="tech-stack-text">
                            Java | Python | C# | HTML/CSS | Bootstrap | JavaScript | TypeScript | Spring | Angular | React
                        </p>
                        <br/>
                        <p className="tech-stack-text">
                            MySQL | PostgreSQL | H2 | MongoDB | Git | GitHub | Bitbucket | Jira | Confluence | Jenkins | Sonar
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/csabavadasz/" rel="noopener noreferrer" target="_blank">
                                <FaLinkedin className="social-icon"/>
                            </a>
                            <a href="https://github.com/Csaba79-coder" rel="noopener noreferrer" target="_blank">
                                <FaGithub className="social-icon"/>
                            </a>
                            <a href="https://www.facebook.com/vadasz.csaba.180" rel="noopener noreferrer" target="_blank">
                                <FaFacebook className="social-icon"/>
                            </a>
                            <a href="https://www.instagram.com/vadasz.csaba/" rel="noopener noreferrer" target="_blank">
                                <FaInstagram className="social-icon"/>
                            </a>
                            <a href="https://twitter.com/csaba_vadasz" rel="noopener noreferrer" target="_blank">
                                <FaTwitter className="social-icon"/>
                            </a>
                        </div>

                        {/* Resume Generator CTA */}
                        <div className="cv-generator-cta">
                            <div className="cv-generator-content">
                                <div className="cv-generator-image">
                                    <img src="/open-graph-fan.png" alt="Resume Templates" />
                                </div>
                                <div className="cv-generator-text">
                                    <h2>Create Your Professional Resume</h2>
                                    <p>Build your personalized CV in 4 languages</p>
                                    <Link to="/resume-generator/en">
                                        <button className="cv-generator-btn">Get Started</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Landing;
