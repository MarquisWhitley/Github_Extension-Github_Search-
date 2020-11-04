import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const UserItem = ({
  user: { login, avatar_url },
  hireable,
  followers,
  following,
}) => {
  const githubContext = useContext(GithubContext);
  const { dark } = githubContext;

  // const { hireable, followers, following } = userInfo;

  return (
    <div className={dark ? 'dark card text-center' : 'card text-center'}>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <h4>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
      </h4>

      <h5 className='badge badge-primary'>Followers: {followers}</h5>
      <h5 className='badge badge-success'>Following: {following}</h5>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
