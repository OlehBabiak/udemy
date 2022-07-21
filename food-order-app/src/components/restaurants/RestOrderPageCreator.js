import Meals from "../Meals/Meals";
import { Fragment, useEffect, useState } from "react";
import FoodAppService from "../services/FoodAppService";
import ErrorMessage from "../errorMessage/errorMessage";
import Spinner from "../spinner/Spinner";


const RestOrderPageCreator = ({path}) => {
	const [macMenu, setMacMenu] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const foodAppService = new FoodAppService()
	
	const errorMessage = error ? <ErrorMessage /> : null;
	const spinner = loading ? <Spinner /> : null;
	const content = !(loading || error) ? <Meals menu={macMenu}/>: null
	
	function onMenuLoaded(menu) {
		setMacMenu(menu)
		setLoading(false);
	}
	
	function onMenuLoading() {
		setLoading(true);
	}
	
	function onError() {
		setError(true);
	}
	
	function getMacMenu() {
		onMenuLoading()
		foodAppService.getRestMenu(path).then(onMenuLoaded).catch(onError)
	}
	
	useEffect(()=>{
		getMacMenu()
	}, [])
	
	return(
		<Fragment>
			{errorMessage}
			{spinner}
			{content}
		</Fragment>

	)
}

export default RestOrderPageCreator;
