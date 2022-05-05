import { Fragment, useContext } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import classes from './Meals.module.css'
import Context from "../../store/cart-context";

const Meals = () => {
    const {cartContext}=useContext(Context);
    const isDark = cartContext.isThemeDark
    const lightClasses=`${classes.dark} ${isDark ? classes.light : ''}`;

    return (
       <Fragment>
           <div className={lightClasses}>
               <MealsSummary/>
               <AvailableMeals/>
           </div>
       </Fragment>
    );
}

export default Meals