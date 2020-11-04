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

export default (state, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
        usersFound: true,
        emptySearch: false,
      };
    case SET_DARKTHEME:
      return {
        ...state,
        dark: true,
      };
    case SET_LIGHTTHEME:
      return {
        ...state,
        dark: false,
      };
    case SET_EMPTYSEARCH:
      return {
        ...state,
        emptySearch: true,
        loading: false,
        usersFound: true,
      };
    case SET_USERSFOUND:
      return {
        ...state,
        usersFound: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        userInfo: [],
        loading: false,
        usersFound: true,
        emptySearch: false,
      };
    case GET_REPOS: {
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
