import React, { useContext } from "react";
import UserItem from "./UserItem";
import classes from "./CSS/Users.module.css";
import Spinner from "../layout/Spinner";
import Error from "../ErrorComponents/Error";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, usersFound, users, userName, dark } = githubContext;
  
  if (loading) return <Spinner />;
  if (!usersFound) return <Error userName={userName} />;
  return (
    <div className={dark ? classes.darkGrid : classes.grid}>
      {users.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default Users;
