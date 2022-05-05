import classes from './MealsSummary.module.css';
import Context from "../../store/cart-context";
import { useContext } from "react";

const MealsSummary = () => {
    const {cartContext}=useContext(Context);
    const isDark = cartContext.isThemeDark
    const lightClasses=`${classes.summary} ${isDark ? classes.light : ''}`;

    return (
        <section className={lightClasses}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!
            </p>
        </section>
    );
};

export default MealsSummary;