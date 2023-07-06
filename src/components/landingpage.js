import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import santoriniImage from '../assets/santorini.png';
import avatarImg from '../assets/CsabaVadasz2022.png';
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import Footer from "./footer";

class Landing extends Component {
    render() {
        return(
            <div className="background-container" style={{ backgroundImage: `url(${santoriniImage})` }}>
                <Grid className="background-container">
                    <Cell col={12}>
                        <img src={avatarImg} alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                        </div>
                        <hr />
                        <p style={{ color: 'white', fontSize: '20px', padding: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'inline-block' }}>
                            Java | Python | C# | HTML/CSS | Bootstrap | JavaScript | TypeScript | Spring | Angular | React
                        </p>
                        <br/>
                        <p style={{ color: 'white', fontSize: '20px', padding: '20px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'inline-block' }}>
                            MySQL | PostgreSQL | H2 | MongoDB | Git | GitHub | Bitbucket | Jira | Confluence | Jenkins | Sonar
                        </p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/csabavadasz/" rel="noopener noreferrer" target="_blank">
                                <FaLinkedin style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                            <a href="https://github.com/Csaba79-coder" rel="noopener noreferrer" target="_blank">
                                <FaGithub style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                            <a href="https://www.facebook.com/vadasz.csaba.180" rel="noopener noreferrer" target="_blank">
                                <FaFacebook style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                            <a href="https://www.instagram.com/vadasz.csaba/" rel="noopener noreferrer" target="_blank">
                                <FaInstagram style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                            <a href="https://twitter.com/csaba_vadasz" rel="noopener noreferrer" target="_blank">
                                <FaTwitter style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                        </div>
                    </Cell>
                </Grid>
                <Footer />
            </div>
        )
    }
}

export default Landing;
