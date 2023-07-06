import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import avatarImg from '../assets/CsabaVadasz2022.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Footer from "./footer";

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={avatarImg} alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                        </div>
                        <hr/>
                    <p style={{color: "white", fontSize: '20px', padding: '1em'}}>Java | Python | C# | HTML/CSS | Bootstrap | JavaScript | TypeScript | Spring | Angular | React</p>
                    <p style={{color: "white", fontSize: '20px', padding: '1em'}}>MySQL | PostgreSQL | H2 | MongoDB | Git | GitHub | Bitbucket | Jira | Confluence | Jenkins | Sonar</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/csabavadasz/" rel="noopener noreferrer" target="_blank">
                                <FaLinkedin style={{ color: '#0077B5', fontSize: '4em' }}/>
                            </a>
                            <a href="https://github.com/Csaba79-coder" rel="noopener noreferrer" target="_blank">
                                <FaGithub style={{ color: '#0077B5', fontSize: '4em' }}/>
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
