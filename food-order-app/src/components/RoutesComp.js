import { Routes, Route } from "react-router-dom";
import RestaurantsNavPage from "./Layout/Home/RestaurantsNavPage";
import RestOrderPageCreator from "./restaurants/RestOrderPageCreator";

const RoutesComp = () => {
	return (
		<Routes>
			<Route path="/mac" element={<RestOrderPageCreator path={ 'mac' }/>}>
			</Route>
			<Route path="/kfc" element={<RestOrderPageCreator path={ 'kfc' } />}>
			</Route>
			<Route path="/big-burger" element={<RestOrderPageCreator path={ 'big-burger' }/>}>
			</Route>
			<Route path="/tasty-burger" element={<RestOrderPageCreator path={ 'tasty-burger' }/>}>
			</Route>
			<Route path="/" element={<RestaurantsNavPage/>}>
			</Route>
		</Routes>
	);
};

export default RoutesComp;
