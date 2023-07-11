import React from "react";


function Input(props) {
    const { type, name, placeholder } = props;
    return (
        <input type={type} name={name} placeholder={placeholder} />
    )
}

export default Input;