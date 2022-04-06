import styles from './ErrorModal.module.css'
import Card from "./Card";
import Button from "./Button";

const ErrorModal=({title, message, confirm}) => {
    return (
        <div>
            <div className={styles.backdrop} onClick={confirm}/>
            <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={confirm}>Okay</Button>
            </footer>
        </Card>
        </div>
    );
}

export default ErrorModal