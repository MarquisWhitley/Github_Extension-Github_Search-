import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SET_LOADING,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_USERSFOUND,
  SET_EMPTYSEARCH,
  SET_DARKTHEME,
  SET_LIGHTTHEME,
  USER_INFO,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    user: {},
    userInfo: [],
    repos: [],
    loading: false,
    usersFound: true,
    emptySearch: false,
    dark: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    if (text === '') {
      dispatch({ type: SET_EMPTYSEARCH });
    }
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      );

      const res2Data = [];
      for (let key of res.data.items) {
        const res2 = await axios.get(
          `https://api.github.com/users/${key.login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
        );
        res2Data.push(res2.data);
      }
      dispatch({ type: USER_INFO, payload: res2Data });

      if (res.data.items.length === 0) {
        dispatch({ type: SET_USERSFOUND });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Clear Users

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Set Theme
  const setDark = (dark) => {
    const body = document.body;
    if (dark !== true) {
      body.style.backgroundColor = 'rgb(8, 8, 8)';
      body.classList.add('dark');
      dispatch({ type: SET_DARKTHEME });
    } else {
      body.style.backgroundColor = 'white';
      body.classList.remove('dark');
      dispatch({ type: SET_LIGHTTHEME });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        userInfo: state.userInfo,
        repos: state.repos,
        loading: state.loading,
        usersFound: state.usersFound,
        emptySearch: state.emptySearch,
        dark: state.dark,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        setDark,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
