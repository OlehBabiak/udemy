import classes from './Input.module.css'
import { forwardRef } from "react";

const Input = forwardRef(({input, label}, ref) => {
    return (
       <div className={classes.input}>
           <label htmlFor={input.id}>{label}</label>
           <input ref={ref} {...input} />
           {/*{...props.input} сюди передаєм всі параметри інпута*/}
       </div>
    );
});

export default Input