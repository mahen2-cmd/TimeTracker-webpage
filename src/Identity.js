import React from "react";

// import Time from "./Time.js";
import "./Identity.css";

function Identity(props) {
    return (
        <div className="identity">
            <div
                style={{
                    margin: "20px",
                }}
            >
                <div
                    style={{
                        color: "hsl(236, 100%, 87%)",
                        fontSize: "12px",
                    }}
                >
                    Report for
                </div>
                <div
                    style={{
                        color: "white",
                        fontSize: "40px",
                        fontWeight: "300",
                    }}
                >
                    Jeremy Robson
                </div>
            </div>
        </div>
    );
}

export default Identity;
