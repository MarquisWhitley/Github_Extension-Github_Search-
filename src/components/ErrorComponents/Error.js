import React from "react";
import classes from "./Error.module.css";

const Error = (props) => {
  console.log(props.match)
  return (
    <div className={classes.Error}>
      <h3 className={classes.UserName}>
        Username not found.
      </h3>
    </div>
  );
};

export default Error;
