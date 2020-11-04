import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import GithubContext from '../../context/github/githubContext';

const Dark = () => {
  const githubContext = useContext(GithubContext);
  const { dark, setDark } = githubContext;
  return (
    <button
      className={dark ? classes.btn : classes.darkbtn}
      onClick={() => setDark(dark)}
    >
      {dark ? 'Light Theme' : 'Dark Theme'}
    </button>
  );
};

export default Dark;
