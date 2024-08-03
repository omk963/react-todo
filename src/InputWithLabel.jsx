import React from "react";
import { useRef, useEffect } from "react";

const InputWithLabel = ({ id, children, value, onInputChange }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <React.Fragment>
            <label>{children}</label>
            <input id={id} type='text' name={children} value={value} onChange={onInputChange} ref={inputRef} />
            <label htmlFor={id}></label>
        </React.Fragment>
    );
};

export default InputWithLabel;