import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import Button from "../UI/Button/Button";
import Context from "../../context/Context";

const Home = () => {

    const ctx = useContext(Context)

  return (
      <Card className={classes.home}>
          <h1>Welcome back!</h1>
          <Button onClick={ctx.logoutHandler}>Logout</Button>
      </Card>
  );
};

export default Home;
