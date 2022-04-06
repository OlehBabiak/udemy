import React, { useState } from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import {v4 as uuidv4} from 'uuid';

let myuuid = uuidv4();


function App () {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler =(name, age) => {
        setUsersList((prevUserList)=> {
            return [...prevUserList, {name: name, age: age, id: myuuid}]
        })
    }

    return (
        <div>
            <AddUser onAddUser={addUserHandler}/>
            <UsersList users={usersList}/>
        </div>
    );
}

export default App;
