import Header from "./components/Layout/Header/Header";
import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider.js";
import HomePage from "./components/Layout/Home/HomePage";

function App () {

    const [cartIsVisible, setCartIsVisible] = useState(false);

    const cartHandler = () => {
        setCartIsVisible(!cartIsVisible)
    }
    
    return (
        <ContextProvider>
            {cartIsVisible && <Cart onCloseCart={cartHandler}/>}
            <Header onShowCart={cartHandler}/>
            <main>
                <HomePage/>
            </main>
        </ContextProvider>
    );
}

export default App;
