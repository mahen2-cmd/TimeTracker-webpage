import React from "react";

import "./ThreeCircles.css";

function ThreeCircles(props) {
    return (
        <div className="three-circles">
            <div
                className="small-circle"
                style={{
                    marginRight: "3px",
                }}
            ></div>
            <div
                className="small-circle"
                style={{
                    marginRight: "2.5px",
                }}
            ></div>
            <div className="small-circle"></div>
        </div>
    );
}

export default ThreeCircles;
