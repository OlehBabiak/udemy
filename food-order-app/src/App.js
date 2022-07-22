import Header from "./components/Layout/Header/Header";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider.js";
import RoutesComp from "./components/RoutesComp";
import ThanksModalCard from "./components/UI/ThanksModalCard";

function App() {
	
	const [cartIsVisible, setCartIsVisible] = useState(false);
	const [thanksModalCardIsVisible, setThanksModalCardIsVisible] = useState(false)
	const [content, setContent] = useState('')
	
	const cartHandler = () => {
		setCartIsVisible(!cartIsVisible)
	}
	
	const thanksCardHandler = ( val, message ) => {
		setThanksModalCardIsVisible(val)
		setContent(message)
		// setTimeout(() => {
		// 	setThanksModalCardIsVisible(false)
		// }, 4000)
	}
	
	return (
		<ContextProvider>
			{ cartIsVisible && <Cart onShowCard={ thanksCardHandler } onCloseCart={ cartHandler }/> }
			{ thanksModalCardIsVisible && <ThanksModalCard content={ content }/> }
			<Header onShowCart={ cartHandler }/>
			<main>
				<RoutesComp/>
			</main>
		</ContextProvider>
	);
}

export default App;
