import React, { Fragment } from 'react'
import classes from './About.module.css'

const About = () => {
    return (
        <Fragment >
            <div className={classes.container}>
            <h1>How this App Works</h1>
            <br/>
            
            <p><em>This app was created to display the information of a Github users account.</em></p>
            <br/>
            <p>Version: 1.2.0</p>
            </div>
        </Fragment>
    )
}

export default About