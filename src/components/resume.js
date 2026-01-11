import React, { Component } from 'react';
import { Grid } from "@mui/material";
import { Link } from 'react-router-dom';
import avatarImg from "../assets/CsabaVadasz2022.png";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return(
        <div className="resume-page">
            <div className="resume-content">
                {/* Avatar and Introduction */}
                <div className="intro">
                    <img src={avatarImg} alt="Avatar" className="avatar"/>
                    <h1>Csaba Vadasz</h1>
                    <h2>Full Stack & AI Engineer</h2>
                    <h4>
                        I am an enthusiastic Java-Spring software engineer, primarily a backend software developer,
                        interested in the development (technology) of Artificial Intelligence (AI).
                    </h4>
                </div>

                {/* Resume Downloads Section */}
                <Grid container className="resume-grid">
                    <Grid item xs={12}>
                        <h3>Download my resumé:</h3>
                        <div className="resume-buttons">
                            <a href="/assets/csaba_vadasz_resume_eng.pdf" download>
                                <button className="resume-button">Resume (English)</button>
                            </a>
                            <a href="/assets/csaba_vadasz_resume_hun.pdf" download>
                                <button className="resume-button">Önéletrajz (magyar)</button>
                            </a>
                            <a href="/assets/csaba_vadasz_resume_deu.pdf" download>
                                <button className="resume-button">Lebenslauf (Deutsch)</button>
                            </a>
                            <a href="/assets/csaba_vadasz_resume_ita.pdf" download>
                                <button className="resume-button">Curriculum Vitae (Italiano)</button>
                            </a>
                        </div>

                        {/* Resume Generator CTA */}
                        <div className="cv-generator-cta-resume">
                            <hr className="resume-separator" />
                            <h3>Want to create your own?</h3>
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
            </div>
            <Footer/>
        </div>
    )
  }
}


export default Resume;
