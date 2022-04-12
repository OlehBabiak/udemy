import React, { useState, useReducer, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const formReducer = (state, action) => {
  //state = formState, action = все що в dispatchForm {type: 'USER_INPUT', val: event.target.value}

  if (action.type === 'USER_INPUT') {
    return {...state, emailValue: action.val, isEmailValid: action.val.includes('@')}
    //клонуєм все що було до того і змінюєм те що потрібно для даного кейсу
  }
  if(action.type === 'INPUT_BLUR') {
    return {...state, emailValue: state.emailValue, isEmailValid: state.emailValue.includes('@')}
  }

  if (action.type === 'PASS_INPUT') {
    return {...state, passValue: action.val, isPassValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_PASS_BLUR') {
    return {...state, passValue: state.passValue, isPassValid: state.passValue.trim().length > 6}
  }

  return {emailValue: '', isEmailValid: false, passValue: '', isPassValid: false}
}


const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [formState, dispatchForm] = useReducer(formReducer, {
    emailValue: '',
    isEmailValid: null,
    passValue: '',
    isPassValid: null
  });

  //dispatchForm приймає action ({type: 'USER_INPUT', val: event.target.value}), викликає formReducer, що він повертає засовує в formState

  const {isEmailValid: emailIsValid, isPassValid: passIsValid} = formState

  useEffect(()=> {
    const identifier = setTimeout(()=> {
      console.log('Checking from validity')
      setFormIsValid(
          emailIsValid && passIsValid
      );
    }, 500)

    return ()=> {
      clearTimeout(identifier)
    }

  }, [formState])

  const emailChangeHandler = (event) => {
    dispatchForm({type: 'USER_INPUT', val: event.target.value})
    // setFormIsValid(
    //     event.target.value.includes('@') && formState.passValue.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({type: 'PASS_INPUT', val: event.target.value})
    // setFormIsValid(
    //     formState.isEmailValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    dispatchForm({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchForm({type: 'INPUT_PASS_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.emailValue, formState.passValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
              formState.isEmailValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={formState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
              formState.isPassValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formState.passValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
