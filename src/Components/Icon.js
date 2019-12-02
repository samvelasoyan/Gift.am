import React from "react";

function Icon({icon, title}) {
    return (
        <div className='acc'>
            <i className={icon}></i>
            <span>{title}</span>
        </div>
    );
}

export default Icon