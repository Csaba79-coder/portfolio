import React, { Component } from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import avatarImg from "../assets/CsabaVadasz2022.png";
import {FaAddressCard, FaPhone} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Button from "@material-ui/core/Button";
import Footer from "./footer";

class About extends Component {

    render() {
        return(
            <div className='about-body'>
                <Grid className='about-grid'>
                    <Cell col={12}>
                        <h2>About Me</h2>
                        <hr />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                        </p>
                        <Footer />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
