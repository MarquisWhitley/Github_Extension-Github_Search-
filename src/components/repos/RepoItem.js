import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const RepoItem = ({ repo }) => {
  const githubContext = useContext(GithubContext);
  const { dark } = githubContext
  return (
    <div className={dark ? 'dark card' : 'card'}>
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
