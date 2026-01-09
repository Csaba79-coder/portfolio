import React, { Component } from 'react';
import { Grid } from "@mui/material";
import Footer from "./footer";

class About extends Component {

    render() {
        return(
            <div className='about-body'>
                <Grid container className='about-grid'>
                    <Grid item xs={12}>
                        <h2>About Me</h2>
                        <hr />
                        <p>
                            I am a Full Stack developer with 2+ years' of coding experience in the IT industry. I have familiarity with
                            building CRUD applications, RESTful APIs using Java as language and Spring Boot as Framework.
                            I have experience on gradle- and maven-based projects. I came across building JPA,
                            Hibernate, Security in Spring Boot. I faced Unit Testing using JUnit and Mockito and
                            Integration Testing using Postman and Spring MockMVC. I have also used to create an APi-first approach
                            using Swagger, implemented in Spring (Java) and Angular (TypeScript). I have experience in Spring
                            Microservices as well. I have acquaintance with building UI using HTML, CSS, Bootstrap, and JavaScript.
                            I also used Angular with TypeScript and React with JavaScript for UI solutions.
                        </p>
                        <a href="https://www.codewars.com/users/Csaba79-coder" target="_blank" rel="noopener noreferrer">
                            My Codewars Profile <span className="arrow">→</span>
                        </a>
                        <br/>
                        <br/>
                        <a href="https://stackoverflow.com/users/15341736/csaba79-coder" target="_blank" rel="noopener noreferrer">
                            My Stack Overflow Profile <span className="arrow">→</span>
                        </a>
                        <br/>
                        <br/>
                        <a href="https://profile.codersrank.io/user/csaba79-coder" target="_blank" rel="noopener noreferrer">
                            My CodersRank Profile <span className="arrow">→</span>
                        </a>
                        <br/>
                        <br/>
                        <a href="https://dev.to/csaba79coder" target="_blank" rel="noopener noreferrer">
                            My Dev Community Profile <span className="arrow">→</span>
                        </a>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <Footer />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default About;
