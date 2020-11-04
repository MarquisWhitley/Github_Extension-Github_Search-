import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import classes from './CSS/Search.module.css';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { dark } = githubContext;
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      return null;
    }
    githubContext.searchUsers(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className={classes.form}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
          className={dark ? classes.darkSearchInput : classes.searchInput}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {githubContext.userInfo.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
