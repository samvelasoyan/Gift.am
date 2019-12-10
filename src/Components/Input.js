import React, { useState } from "react";

export default function Input({
    type,
    name,
    placeholder,
    handleChange,
    labelBool,
    formError,
    icon
}) {
    const [bool, setBool] = useState(false);
    const show = () => setBool(!bool);
    const error = formError !== "" && formError !== undefined 
    return (
        <div className={`input-container ${error && 'red'}`}>
            {icon && (
                <span className="icon">
                    <i className={icon}></i>
                </span>
            )}
            <label htmlFor={name} className={`label ${labelBool && "upper"}`} style={icon === undefined ? {left: '4%'} : {left: '10%'}}>
                {placeholder}
            </label>
            <input
                type={type === "password" ? (bool ? "text" : "password") : type}
                name={name}
                id={name}
                autoComplete="off"
                noValidate
                onChange={handleChange}
            />
            {error && <span className="error">{formError}</span>}
            {type === "password" && (
                <span className="icon eye" onClick={() => show()}>
                    <i className={`far fa-eye${bool ? "" : "-slash"}`}></i>
                </span>
            )}
        </div>
    );
}
