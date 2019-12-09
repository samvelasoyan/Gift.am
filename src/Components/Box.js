import React from "react";

export default function Box({ background, text }) {
    return (
        <div className="box">
            <div
                className="front"
                style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
            ></div>
            <div className="back">
                <span>{text}</span>
            </div>
        </div>
    );
}
