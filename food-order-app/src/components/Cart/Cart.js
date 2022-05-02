import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import Context from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";


const Cart = ({onCloseCart}) => {
    const {cartContext}=useContext(Context);
    const totalAmount=`$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items.length > 0

    const cartItems=
        <ul className={classes['cart-items']}>
            {
                cartContext.items.map(item =>
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        onRemove={cartContext.removeItem}
                        onAdd={cartContext.addItem}
                    />)
            }
        </ul>

    return (
       <Modal onClose={onCloseCart}>
           {cartItems}
           <div className={classes.total}>
               <span>Total Amount</span>
               <span>{totalAmount}</span>
           </div>
           <div className={classes.actions}>
               <button onClick={onCloseCart} className={classes['button--alt']}>Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
           </div>
       </Modal>
    );
}

export default Cart