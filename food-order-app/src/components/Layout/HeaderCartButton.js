import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import Context from '../../store/cart-context'

const HeaderCartButton=({onClick}) => {

    const {cartContext} = useContext(Context)

    const numberOfCartItems = cartContext.items.reduce((curNumber, item)=> {
        return curNumber + item.amount;
    }, 0)

    return (
        <>
            <button onClick={onClick} className={classes.button}>
           <span className={classes.icon}>
                <CartIcon/>
           </span>
                <span>Your Cart</span>
                <span className={classes.badge}>
                {numberOfCartItems}
            </span>
            </button>
        </>
    );
}

export default HeaderCartButton