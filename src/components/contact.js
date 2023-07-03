import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Csaba Vadasz</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            I am an enthusiastic backend developer with a passion for learning and improving my skills.
                            I am always looking for new challenges and opportunities to grow. I am also interested in
                            learning about ethical hacking and penetration testing.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
