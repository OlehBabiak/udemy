import { useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const initialUserObj = {
    userName: '',
    userAge: ''
}

const AddUser=({onAddUser}) => {

    const [userData, setUserData] = useState(initialUserObj);
    const [error, setError]=useState(null);


    const addUserHandler=(e) => {
        e.preventDefault();
        if(userData.userName.trim().length===0 || userData.userAge.trim().length===0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name or age (non-empty values)'
            })
            return;
        }
        if(+ userData.userAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Age should be more then 0'
            })
            return
        }
        onAddUser(userData.userName, userData.userAge)
        setUserData((prevobj)=> {
            return   {...prevobj, userAge: '', userName: ''}
        })
    }

    const userNameChangeHandler=(e) => {
        setUserData((prevobj)=> {
         return   {...prevobj, userName: e.target.value}
        })
    }

    const userAgeChangeHandler=(e) => {
        setUserData((prevobj)=> {
            return   {...prevobj, userAge: e.target.value}
        })
    }

    const errorhandler=() => {
        setError(null)
    }

    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} confirm={errorhandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    {/*передаємо стилі в Card як пропс    */}
                    <label htmlFor='username'>User Name</label>
                    <input value={userData.userName} onChange={userNameChangeHandler} id='username' type='text'/>
                    <label htmlFor='age'>Age (Years)</label>
                    <input value={userData.userAge} onChange={userAgeChangeHandler} id='age' type='number'/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser