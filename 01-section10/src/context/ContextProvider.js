import Context from "./Context";
import { useEffect, useState } from "react";


function ContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {
        const storedUserLoggedInInformation = localStorage.getItem('isLogIn')

        if(storedUserLoggedInInformation === 'LOGGED_ON') {
            setIsLoggedIn(true)
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLogIn', 'LOGGED_ON')
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLogIn')
        setIsLoggedIn(false);
    };
    return (
       <Context.Provider value={{
           isLoggedIn,
           setIsLoggedIn,
           loginHandler,
           logoutHandler
       }}>
           {children}
       </Context.Provider>
    );
}

export default ContextProvider
