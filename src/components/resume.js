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


          <Footer />
        </div>
    )
  }
}


export default Resume;
