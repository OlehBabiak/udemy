import Header from "./components/Layout/Header/Header";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider.js";
import RoutesComp from "./components/RoutesComp";

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
                <RoutesComp/>
            </main>
        </ContextProvider>
    );
}

export default App;
