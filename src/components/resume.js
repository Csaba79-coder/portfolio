import React, { Component } from 'react';
import {Cell, Grid} from "react-mdl";
import avatarImg from "../assets/CsabaVadasz2022.png";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return(
        <div className="landing-container">
            <div className="background-image"></div>
            <div className="resume-downloads">
                {/* Avatar and Introduction */}
                <div className="intro">
                    <img src={avatarImg} alt="Avatar" className="avatar"/>
                    <h1>Csaba Vadasz</h1>
                    <h2>Full Stack Developer</h2>
                    <h4>
                        I am an enthusiastic Java-Spring software engineer, primarily a backend software developer,
                        interested in the development (technology) of Artificial Intelligence (AI).
                    </h4>
                </div>

                {/* Resume Downloads Section */}
                <Grid className="resume-grid">
                    <Cell col={12}>
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
                    </Cell>
                </Grid>

                <Footer/>
            </div>
        </div>
    )
  }
}


export default Resume;
