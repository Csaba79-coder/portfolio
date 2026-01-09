import React, { Component } from 'react';
import { Grid, List, ListItem, ListItemText, Button } from '@mui/material';
import avatarImg from '../assets/CsabaVadasz2022.png';
import {FaAddressCard, FaPhone} from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Footer from "./footer";

class Contact extends Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://platform.linkedin.com/badges/js/profile.js';
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    }

    componentWillUnmount() {
        const script = document.querySelector('script[src="https://platform.linkedin.com/badges/js/profile.js"]');
        if (script) {
            document.head.removeChild(script);
        }
    }

    render() {
        const isChrome = /chrome/i.test(navigator.userAgent);
        const isEdge = /edge/i.test(navigator.userAgent);

        return (
            <div className='contact-body'>
                <Grid container className='contact-grid'>
                    <Grid item xs={12} sm={6}>
                        <h2>Csaba Vadasz</h2>
                        {isChrome || isEdge ? (
                            <div>
                                <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
                                <div className="badge-base LI-profile-badge"
                                     data-locale="en_US"
                                     data-size="medium"
                                     data-theme="light"
                                     data-type="HORIZONTAL"
                                     data-vanity="csabavadasz"
                                     data-version="v1"
                                     style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <img src={avatarImg} alt="avatar" className="avatar-img" />
                                <div>
                                    <br/>
                                </div>
                                <div className="badge-base LI-profile-badge"
                                     data-locale="en_US"
                                     data-size="medium"
                                     data-theme="light"
                                     data-type="HORIZONTAL"
                                     data-vanity="csabavadasz"
                                     data-version="v1"
                                     style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <a className="badge-base__link LI-simple-link" href="https://hu.linkedin.com/in/csabavadasz?trk=profile-badge"
                                       rel="noopener noreferrer" target="_blank" style={{ color: '#0077B5', fontFamily: 'Oxygen', fontWeight: 'bald'}}>
                                        Click for my LinkedIn profile
                                    </a>
                                </div>
                            </div>
                        )}
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            I am an enthusiastic backend developer with a passion for learning and improving my skills.
                            I am always looking for new challenges and opportunities to grow. I am also interested in learning about ethical hacking and penetration testing.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <div style={{ fontSize: '20px', fontFamily: 'Anton', display: 'flex', alignItems: 'center' }}>
                                                <FaPhone style={{ color: '#0077B5', fontSize: '2em', marginRight: '0.5em' }}/>
                                                <span style={{ marginLeft: '0.5em' }}>+36-30-235-63-04</span>
                                            </div>
                                        }
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <div style={{ fontSize: '20px', fontFamily: 'Anton', display: 'flex', alignItems: 'center' }}>
                                                <IoIosMail style={{ color: '#0077B5', fontSize: '2em', marginRight: '0.5em' }}/>
                                                <span style={{ marginLeft: '0.5em' }}>
                                                    csabavadasz79@gmail.com
                                                </span>
                                                <CopyToClipboard text="csabavadasz79@gmail.com">
                                                    <Button style={{ color: '#0077B5', marginLeft: '0.5em' }} variant="outlined" color="primary" onClick={() => alert('Email copied to clipboard!')}>
                                                        Copy
                                                    </Button>
                                                </CopyToClipboard>
                                            </div>
                                        }
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <div style={{ fontSize: '20px', fontFamily: 'Anton', display: 'flex', alignItems: 'center' }}>
                                                <FaAddressCard style={{ color: '#0077B5', fontSize: '2em', marginRight: '0.5em' }}/>
                                                <span style={{ marginLeft: '0.5em' }}>Budakalasz, Hungary, Europe</span>
                                            </div>
                                        }
                                    />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>
                </Grid>
                <Footer />
            </div>
        );
    }
}

export default Contact;
