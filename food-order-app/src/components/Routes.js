import HomePage from "./Layout/Home/HomePage";
import MacDonalds from "./restaurants/MacDonalds";
import KFC from "./restaurants/KFC";
import BigBurger from "./restaurants/BigBurger";
import TastyBurger from "./restaurants/TastyBurger";
import { Routes, Route } from "react-router-dom";

const RoutesComp = () => {
	return (
		<Routes>
			<Route path="/mac" element={<MacDonalds />}>
			</Route>
			<Route path="/kfc" element={<KFC />}>
			</Route>
			<Route path="/big-burger" element={<BigBurger />}>
			</Route>
			<Route path="/tasty-burger" element={<TastyBurger />}>
			</Route>
			<Route path="/" element={<HomePage />}>
			</Route>
		</Routes>
	);
};

export default RoutesComp;
