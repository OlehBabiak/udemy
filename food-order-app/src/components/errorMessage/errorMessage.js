import Card from "../UI/Card";
import classes from './errorMessage.module.css'

const ErrorMessage = () => {
	return (
		<Card>
			<h2 className={ classes.error }>
				Вибачте, сторінка не доступна
			</h2>
		</Card>
	)
}

export default ErrorMessage
