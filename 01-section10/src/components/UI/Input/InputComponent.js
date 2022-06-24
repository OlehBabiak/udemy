import React from "react";
import classes from "./InputComponent.module.css";


const InputComponent=({
                          id,
                          label,
                          value,
                          onblur,
                          onChange,
                          isValid

                      }) => {
    return (
        <div className={`${classes.control} ${isValid===false ? classes.invalid : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input
                type={id}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onblur}
            />
        </div>
    );
}

export default InputComponent