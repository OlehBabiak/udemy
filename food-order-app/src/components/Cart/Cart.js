import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import Context from "../../store/cart-context";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartInput from "./CartInput";
import FoodAppService from "../services/FoodAppService";

const INIT_VALUE = {
	name: '',
	email: '',
	phone: '',
	address: ''
};

const Cart = ( {onCloseCart} ) => {
	const {cartContext} = useContext(Context);
	const [form, setForm] = useState(INIT_VALUE);
	const totalAmount = `$${ cartContext.totalAmount.toFixed(2) }`
	const hasItems = cartContext.items.length > 0
	const foodAppService = new FoodAppService()
	
	const cartItemRemoveHandler = ( id ) => {
		cartContext.removeItem(id)
	}
	const cartItemAddHandler = ( item ) => {
		cartContext.addItem({...item, amount: 1})
	}
	
	const onValueChange = ( e ) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
		cartContext.addUserData(form)
	}
	
	
	const addData = () => {
		const json = JSON.stringify(cartContext.order);
		foodAppService.postRestOrder(json)
			.then(res => console.log(res))
			.catch(err => console.error(err))
		cartContext.clearState()
		onCloseCart()
	}
	
	
	const cartItems =
		<ul className={ classes['cart-items'] }>
			{
				cartContext.items.map(item =>
					<CartItem
						key={ item.id }
						name={ item.name }
						price={ item.price }
						amount={ item.amount }
						onRemove={ cartItemRemoveHandler.bind(null, item.id) }
						onAdd={ cartItemAddHandler.bind(null, item) }
					/>)
			}
		</ul>
	
	return (
		<Modal onClose={ onCloseCart }>
			<CartInput
				input={ {
					type: 'text',
					placeholder: 'Name',
					name: 'name',
					value: form.name
				} }
				onValueChange={ onValueChange }
			/>
			<CartInput
				input={ {
					type: 'email',
					placeholder: 'Email',
					name: 'email',
					value: form.email
				} }
				onValueChange={ onValueChange }
			/>
			<CartInput
				input={ {
					type: 'phone',
					placeholder: 'Phone',
					name: 'phone',
					value: form.phone
				} }
				onValueChange={ onValueChange }
			/>
			<CartInput
				input={ {
					type: 'address',
					placeholder: 'Address',
					name: 'address',
					value: form.address
				} }
				onValueChange={ onValueChange }
			/>
			{ cartItems }
			<div className={ classes.total }>
				<span>Total Amount</span>
				<span>{ totalAmount }</span>
			</div>
			<div className={ classes.actions }>
				<button onClick={ onCloseCart } className={ classes['button--alt'] }>Close</button>
				{ hasItems && <button onClick={ addData } className={ classes.button }>Order</button> }
			</div>
		</Modal>
	);
}

export default Cart
