import classes from './Cartnput.module.css'

const CartInput = ( {onValueChange, input} ) => {

	return (
		<div className={classes['app-add-form']}>
			<input
				{...input}
				onChange={onValueChange}
			/>
		</div>
	)
}

export default CartInput
