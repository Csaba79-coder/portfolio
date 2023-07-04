import React, { Component, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatarImg from '../assets/CsabaVadasz2022.png';

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
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        const isChrome = /chrome/i.test(navigator.userAgent);
        const isEdge = /edge/i.test(navigator.userAgent);

        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Csaba Vadasz</h2>
                        {isSafari || isChrome || isEdge ? (
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
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;

