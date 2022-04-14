import React, { useState, useReducer, useEffect, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Context from "../../context/Context";
import InputComponent from "../UI/Input/InputComponent";

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


const Login = () => {

  const ctx = useContext(Context)

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
      setFormIsValid(
          emailIsValid && passIsValid
      );
    }, 500)

    return ()=> {
      clearTimeout(identifier)
    }

  }, [formState, emailIsValid, passIsValid])

  const emailChangeHandler = (event) => {
    dispatchForm({type: 'USER_INPUT', val: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({type: 'PASS_INPUT', val: event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchForm({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchForm({type: 'INPUT_PASS_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.loginHandler(formState.emailValue, formState.passValue);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputComponent
            id='email'
            label='E-Mail'
            value={formState.emailValue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            isValid={formState.isEmailValid}
        />
        <InputComponent
            id='password'
            label='Password'
            value={formState.passValue}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            isValid={formState.isEmailValid}
        />
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
