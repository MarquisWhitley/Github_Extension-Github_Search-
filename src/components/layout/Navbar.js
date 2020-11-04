import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Dark from './Dark'

const Navbar = ({ icon, title, dark, setDark }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>
          <i className={icon}></i> {title}
        </h1>
      </div>
      <div className={classes.nav}>
        <ul className={classes.navBarLinks}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Dark dark={dark} setDark={setDark} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Search",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
