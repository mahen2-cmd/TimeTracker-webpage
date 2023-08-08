import React from "react";

import Time from "./Time.js"
import "./Card.css";

function Card(props) {
    return (
        <div className="card">
            <Time text={props.text} />
        </div>
    );
}

export default Card;
