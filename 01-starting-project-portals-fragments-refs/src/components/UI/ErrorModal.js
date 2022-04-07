import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.confirm} />
    );
}


const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.confirm}>Okay</Button>
            </footer>
        </Card>
    );
}


const ErrorModal = ({confirm, title, message}) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(
            <Backdrop confirm={confirm}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay title={title} message={message} confirm={confirm}/>,
            document.getElementById('overlay-root')
        )}
    </Fragment>
  );
};

export default ErrorModal;
