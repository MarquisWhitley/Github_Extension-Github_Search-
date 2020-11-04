import React, { Fragment } from 'react';
import classes from './About.module.css';

const About = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <h1>How this App Works</h1>
        <br />

        <p>
          <em>
            This app was created to display the information of a Github users
            account.
          </em>
        </p>

        <br />
        <p className={classes.version}>Version: 1.3.2</p>
        <br />
        <br />
        <div className={classes.imgContainer}>
          <div className={classes.contents}>
            <div className={classes.img1}></div>
            <h4>Home Page</h4>
          </div>
          <div className={classes.contents}>
            <div className={classes.img2}></div>
            <h4>Search Users</h4>
          </div>
          <div className={classes.contents}>
            <div className={classes.img3}></div>
            <h4>User</h4>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
