import React from "react";
import { Link } from "react-router-dom";

export default function Box({ background, text }) {
    return (
        <div className="box">
            <Link to={`/categories/${text}/#home`}>
                <div
                    className="front"
                    style={{ background: `url(${background}) no-repeat`, backgroundSize: "cover" }}
                ></div>
                <div className="back">
                    <span>{text}</span>
                </div>
            </Link>
        </div>
    );
}
