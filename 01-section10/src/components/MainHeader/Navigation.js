import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import Context from "../../context/Context";

const Navigation = () => {

    const {
        isLoggedIn,
        logoutHandler
    } = useContext(Context)

  return (
    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
