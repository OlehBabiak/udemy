import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const initialUserObj = {
  userName: '',
  userAge: ''
}

const AddUser=({onAddUser}) => {
  const nameInputRef =useRef();
  const ageInputRef =useRef();

  const [error, setError]=useState(null);


  const addUserHandler=(e) => {
    e.preventDefault();
    initialUserObj.userName = nameInputRef.current.value;
    initialUserObj.userAge = ageInputRef.current.value;

    if(initialUserObj.userName.trim().length===0 || initialUserObj.userAge.trim().length===0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name or age (non-empty values)'
      })
      return;
    }
    if(+ initialUserObj.userAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Age should be more then 0'
      })
      return
    }
    onAddUser(initialUserObj.userName, initialUserObj.userAge)
    nameInputRef.current.value = '';
    ageInputRef.current.value = ''
  }

  const errorhandler=() => {
    setError(null)
  }

  return (
      <Wrapper>
        {error && <ErrorModal title={error.title} message={error.message} confirm={errorhandler}/>}
        <Card className={styles.input}>
          <form onSubmit={addUserHandler}>
            {/*передаємо стилі в Card як пропс    */}
            <label htmlFor='username'>User Name</label>
            <input
                id='username'
                type='text'
                ref={nameInputRef}
            />
            <label htmlFor='age'>Age (Years)</label>
            <input
                id='age'
                type='number'
                ref={ageInputRef}
            />
            <Button type='submit'>Add User</Button>
          </form>
        </Card>
      </Wrapper>
  );
}

export default AddUser