import React, { Component } from 'react';
import {Cell, Grid, List, ListItem, ListItemContent} from "react-mdl";
import avatarImg from "../assets/CsabaVadasz2022.png";
import {FaAddressCard, FaPhone} from "react-icons/fa";
import {IoIosMail} from "react-icons/io";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Button from "@material-ui/core/Button";

class About extends Component {

    render() {
        return(
            <div className='about-body'>
                <Grid className='about-grid'>
                    <Cell col={12}>
                        <h2>About Me</h2>
                        <hr />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
