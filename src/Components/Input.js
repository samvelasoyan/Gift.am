import React, { useState, createRef } from "react";

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
    const textInput = createRef()
    const enterInput = () => textInput.current.click()
    return (
        <div className="input-container">
            {icon && (
                <span className='icon'>
                    <i className={icon}></i>
                </span>
            )}
            <input
                type={type === "password" ? (bool ? "text" : "password") : type}
                name={name}
                autoComplete="off"
                noValidate
                onChange={handleChange}
                ref={textInput}
            />
            <label onClick={enterInput} htmlFor={name} className={`label ${labelBool && "upper"}`}>
                {placeholder}
            </label>
            {formError !== "" && <span className="error">{formError}</span>}
            {type === "password" && (
                <span className='icon eye' onClick={() => show()}>
                    <i className={`far fa-eye${bool ? "" : "-slash"}`}></i>
                </span>
            )}
        </div>
    );
}
